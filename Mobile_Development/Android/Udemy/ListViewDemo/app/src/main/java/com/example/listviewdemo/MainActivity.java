package com.example.listviewdemo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final ArrayList<String> myFamily = new ArrayList<>();
        myFamily.add("Anil");
        myFamily.add("Alpana");
        myFamily.add("Sanyam");
        myFamily.add("Rishabh");
        myFamily.add("Poojan");

        ArrayAdapter<String> arrayAdapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, myFamily);

        ListView familyListView = (ListView) findViewById(R.id.familyListView);
        familyListView.setAdapter(arrayAdapter);

        familyListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Toast.makeText(getApplicationContext(), "Hello "+myFamily.get(position), Toast.LENGTH_SHORT).show();
            }
        });
    }
}
