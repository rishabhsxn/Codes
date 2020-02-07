package com.example.memorableplaces;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import com.google.android.gms.maps.model.LatLng;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    ListView placeListView;

    static ArrayList<String> places = new ArrayList<>();    // these are made static so that they can be accessed in SecondActivity
    static ArrayList<LatLng> locations = new ArrayList<>();
    static ArrayAdapter<String> arrayAdapter;

    Intent intent;

    public void handleListView(){
        placeListView.setAdapter(arrayAdapter);

        placeListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                intent = new Intent(getApplicationContext(), MapsActivity.class);
                intent.putExtra("position", position);   // sending integer
                startActivity(intent);
            }
        });

    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        placeListView = (ListView) findViewById(R.id.placeListView);

        ArrayList<String> latitudes = new ArrayList<>();
        ArrayList<String> longitudes = new ArrayList<>();

        SharedPreferences sharedPreferences = getSharedPreferences("com.example.memorableplaces", Context.MODE_PRIVATE);

//        sharedPreferences.edit().clear().commit();


        places.clear();
        latitudes.clear();
        longitudes.clear();
        locations.clear();

        try{
            places = (ArrayList<String>) ObjectSerializer.deserialize(sharedPreferences.getString("places", ObjectSerializer.serialize(new ArrayList<String>())));
            latitudes = (ArrayList<String>) ObjectSerializer.deserialize(sharedPreferences.getString("lats", ObjectSerializer.serialize(new ArrayList<String>())));
            longitudes = (ArrayList<String>) ObjectSerializer.deserialize(sharedPreferences.getString("lons", ObjectSerializer.serialize(new ArrayList<String>())));
        }
        catch(Exception e){
            e.printStackTrace();
            Log.i("error in MainActivity", "COULDN'T GET THE ARRAYS FROM SHARED PREFERENCES");
        }

        if(places != null && latitudes != null && longitudes != null) {
            if (places.size() > 0 && places.size() == latitudes.size() && latitudes.size() == longitudes.size()) {
                for (int i = 0; i < latitudes.size(); i++) {
                    LatLng latLng = new LatLng(Double.parseDouble(latitudes.get(i)), Double.parseDouble(longitudes.get(i)));
                    locations.add(latLng);
                }
            } else {
                places.add("Add a new place...");
                locations.add(new LatLng(0, 0));
            }
        }

        arrayAdapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, places);

        handleListView();
    }
}
