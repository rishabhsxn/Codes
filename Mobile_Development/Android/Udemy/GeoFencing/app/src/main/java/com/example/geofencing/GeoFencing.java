package com.example.geofencing;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.location.Location;
import android.util.Log;

import androidx.annotation.NonNull;

import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.api.ResultCallback;
import com.google.android.gms.location.Geofence;
import com.google.android.gms.location.GeofencingRequest;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.maps.model.LatLng;

import java.util.ArrayList;
import java.util.List;

public class GeoFencing implements ResultCallback {

    public static final String TAG = GeoFencing.class.getSimpleName();

    private List<Geofence> mGeofenceList;
    private PendingIntent mGeofencingPendingIntent;
    private Context myContext;
    private GoogleApiClient mGoogleApiClient;

    public GeoFencing(Context context, GoogleApiClient client){
        myContext = context;
        mGoogleApiClient = client;
        mGeofencingPendingIntent = null;
        mGeofenceList = new ArrayList<>();
    }

    public void updateGeofencesList(Location location){
        mGeofenceList = new ArrayList<>();
        String locationUID = "10";

        if(location == null)
            return;

        Geofence geofence = new Geofence.Builder()
                .setRequestId(locationUID)
                .setExpirationDuration(24*60*1000)
                .setCircularRegion(location.getLatitude(), location.getLongitude(), 20)
                .setTransitionTypes(Geofence.GEOFENCE_TRANSITION_ENTER | Geofence.GEOFENCE_TRANSITION_EXIT)
                .build();

        mGeofenceList.add(geofence);
    }

    private GeofencingRequest getGeofencingRequest(){
        GeofencingRequest.Builder builder = new GeofencingRequest.Builder();
        builder.setInitialTrigger(GeofencingRequest.INITIAL_TRIGGER_DWELL);     // if device is already in Geofence at time of geofence registering, immediately run enter function
        builder.addGeofences(mGeofenceList);
        return builder.build();
    }


    private PendingIntent getmGeofencingPendingIntent() {
        if(mGeofencingPendingIntent != null)
            return mGeofencingPendingIntent;

        Intent intent = new Intent(myContext, GeofenceBroadcastReceiver.class);
        mGeofencingPendingIntent = PendingIntent.getBroadcast(myContext, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT);

        return mGeofencingPendingIntent;
    }

    public void registerAllGeofences(){
        if(mGoogleApiClient == null || !mGoogleApiClient.isConnected() || mGeofenceList == null || mGeofenceList.size() == 0)
            return;

        try{
            LocationServices.GeofencingApi.addGeofences(mGoogleApiClient, getGeofencingRequest(), getmGeofencingPendingIntent()).setResultCallback(this);
        }catch (SecurityException securityException){
            Log.e(TAG, securityException.getMessage());
        }
    }

    public void unRegisterAllGeofences(){
        if(mGoogleApiClient == null || !mGoogleApiClient.isConnected())
            return ;

        try{
            LocationServices.GeofencingApi.removeGeofences(mGoogleApiClient, getmGeofencingPendingIntent()).setResultCallback(this);
        }catch (SecurityException securityException){
            Log.e(TAG, securityException.getMessage());
        }
    }

    @Override
    public void onResult(@NonNull Result result) {
        Log.e(TAG, String.format("Error adding/removing geofence : %s", result.getStatus().toString()));
    }
}
