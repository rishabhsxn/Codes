package com.example.sharedpreferences;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        SharedPreferences sharedPreferences = this.getSharedPreferences("com.example.sharedpreferences", Context.MODE_PRIVATE);

//        sharedPreferences.edit().putInt("age", 20).apply();
        ArrayList<String> friends = new ArrayList<>();
        friends.add("Poojan");
        friends.add("Prateek");
        friends.add("Anirudh");
        friends.add("Ashutosh");
        friends.add("Sanyam");
        String arrayAsString="";
        try {
            arrayAsString = ObjectSerializer.serialize(friends);
            Log.i("Seriaized String", arrayAsString);
        }
        catch(Exception e){
            e.printStackTrace();
            Log.i("sharedPreferences", "Could not serialize the ArrayList");
        }
        sharedPreferences.edit().putString("friends", arrayAsString).apply();

        Log.i("Age", Integer.toString(sharedPreferences.getInt("age", -1)));

        ArrayList<String> newFriends = new ArrayList<>();
        try{
            newFriends = (ArrayList<String>) ObjectSerializer.deserialize(sharedPreferences.getString("friends", ObjectSerializer.serialize(new ArrayList<String>())));
        }
        catch(Exception e){
            e.printStackTrace();
            Log.i("Error in deserialize", "Could not receive the ArrayList from SharedPreferences");
        }

        Log.i("newFriends", newFriends.toString());

    }
}
