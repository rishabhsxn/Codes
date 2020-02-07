package com.example.memorableplaces;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.fragment.app.FragmentActivity;

import android.Manifest;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

public class MapsActivity extends FragmentActivity implements OnMapReadyCallback, GoogleMap.OnMapLongClickListener {

    private GoogleMap mMap;
    LocationManager locationManager;
    LocationListener locationListener;

    final int minTime = 10*1000;
    final float minDistance = 10;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }


    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;

        mMap.setOnMapLongClickListener(this);

        locationManager = (LocationManager)this.getSystemService(LOCATION_SERVICE);
        handleLocations();
    }

    public void handleLocations(){
        Intent intent = getIntent();
        int position = intent.getIntExtra("position", -1);

        if(position == 0) {
            locationListener = new LocationListener() {
                @Override
                public void onLocationChanged(Location location) {

                    addMarkerAndZoom(location, "Your Location");
                }

                @Override
                public void onStatusChanged(String provider, int status, Bundle extras) {

                }

                @Override
                public void onProviderEnabled(String provider) {

                }

                @Override
                public void onProviderDisabled(String provider) {

                }
            };

            if (ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
                ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, 1);
            } else {
                locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, minTime, minDistance, locationListener);
                Location lastKnownLocation = locationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER);
                if (lastKnownLocation != null)
                    addMarkerAndZoom(lastKnownLocation, "Your last location");
                else
                    Toast.makeText(this, "Couldn't fetch Last Location :(", Toast.LENGTH_LONG).show();
            }
        }

        else if(position == -1){
            Toast.makeText(this, "Couldn't get the position :(", Toast.LENGTH_LONG).show();
        }

        else{
            Location placeLocation = new Location(LocationManager.GPS_PROVIDER);
            placeLocation.setLatitude(MainActivity.locations.get(position).latitude);
            placeLocation.setLongitude(MainActivity.locations.get(position).longitude);

            String nameOfLocation = MainActivity.places.get(position);

            addMarkerAndZoom(placeLocation, nameOfLocation);
        }
    }

    public void addMarkerAndZoom(Location location, String title){
        mMap.clear();
        LatLng userLocation = new LatLng(location.getLatitude(), location.getLongitude());
        mMap.addMarker(new MarkerOptions().position(userLocation).title(title));
//        mMap.addCircle(new CircleOptions().center(userLocation).radius(20).strokeColor(Color.RED).fillColor(Color.BLUE));
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(userLocation, 15));
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);

        if(grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            if (ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED){
                locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, minTime, minDistance, locationListener);
            }
        }
    }

    @Override
    public void onMapLongClick(LatLng latLng) {
        Geocoder geocoder = new Geocoder(this, Locale.getDefault());
        String address= "";

        try{
            List<Address> listAddresses = geocoder.getFromLocation(latLng.latitude, latLng.longitude, 1);
            if(listAddresses != null && listAddresses.size()>0){
                if(listAddresses.get(0).getThoroughfare() != null){
                    if(listAddresses.get(0).getSubThoroughfare() != null)
                        address += listAddresses.get(0).getSubThoroughfare();

                    address += listAddresses.get(0).getThoroughfare();
                }
            }
        }
        catch(Exception e){
            e.printStackTrace();
            Log.i("From onMapLongClick", "Could not get address");
        }

        if(address.equals("")){
            SimpleDateFormat sdf = new SimpleDateFormat("hh:mm a dd/MM/yyyy");
            address += sdf.format(new Date());
        }

        mMap.addMarker(new MarkerOptions().position(latLng).title(address));

        MainActivity.places.add(address);
        MainActivity.locations.add(latLng);
        MainActivity.arrayAdapter.notifyDataSetChanged();

        SharedPreferences sharedPreferences = getSharedPreferences("com.example.memorableplaces", Context.MODE_PRIVATE);

        // these are taken in separate arrays because ObjectSerializer can not convert Locations to Strings
        // only basic things are supported
        ArrayList<String> latitudes = new ArrayList<>();
        ArrayList<String> longitudes = new ArrayList<>();

        for(LatLng location : MainActivity.locations){
            latitudes.add(Double.toString(location.latitude));
            longitudes.add(Double.toString(location.latitude));
        }

        try{
            sharedPreferences.edit().putString("places", ObjectSerializer.serialize(MainActivity.places)).apply();
            sharedPreferences.edit().putString("lats", ObjectSerializer.serialize(latitudes)).apply();
            sharedPreferences.edit().putString("lons", ObjectSerializer.serialize(longitudes)).apply();
        }
        catch(Exception e){
            e.printStackTrace();
            Log.i("error in serialization", "Couldn't serialize");
        }

        Toast.makeText(this, "Location Saved!", Toast.LENGTH_LONG).show();
    }
}
