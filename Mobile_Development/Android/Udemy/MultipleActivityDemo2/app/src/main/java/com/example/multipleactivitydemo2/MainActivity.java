package com.example.multipleactivitydemo2;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    ListView friendListView;
    ArrayList<String> friends;
    ArrayAdapter<String> arrayAdapter;
    Intent intent;

    public void setUpList(){
        friendListView.setAdapter(arrayAdapter);

        friendListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String nameString = friends.get(position);
                intent.putExtra("nameOfFriend", nameString);
                startActivity(intent);
            }
        });

    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        friends = new ArrayList<>();
        friends.add("Poojan");
        friends.add("Anirudh");
        friends.add("Prateek");
        friends.add("Ashutosh");

        arrayAdapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, friends);
        friendListView = (ListView) findViewById(R.id.friendListView);
        intent = new Intent(this, SecondActivity.class);

        setUpList();
    }
}
