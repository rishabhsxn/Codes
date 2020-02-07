package com.example.notes;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    Intent intentWithData, intentWithoutData;
    ListView notesListView;
    static ArrayList<String> notes;
    static ArrayAdapter<String> arrayAdapter;
    SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        intentWithData = new Intent(getApplicationContext(), NoteActivity.class);
        intentWithoutData = new Intent(getApplicationContext(), NoteActivity.class);

        notesListView = (ListView) findViewById(R.id.notesListView);
        sharedPreferences = getSharedPreferences("com.example.notes", Context.MODE_PRIVATE);

        notes = new ArrayList<String>();

        try{
            notes = (ArrayList<String>) ObjectSerializer.deserialize(sharedPreferences.getString("notes", ObjectSerializer.serialize(new ArrayList<String>())));
        }
        catch(Exception e){
            e.printStackTrace();
            Log.i("MYINFO", "COULD NOT GET LIST FROM SHARED_PREFERENCES");
        }

        if(notes.size() == 0)
            notes.add("Example note");

        arrayAdapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, notes);
        notesListView.setAdapter(arrayAdapter);

        manageListView();

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater menuInflater = getMenuInflater();
        menuInflater.inflate(R.menu.new_note_menu, menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        super.onOptionsItemSelected(item);

        if(item.getItemId() == R.id.addnote){
            startActivity(intentWithoutData);
            return true;
        }
        return false;
    }

    public void manageListView(){

        notesListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
//                String presentNote = notes.get(position);
//                intentWithData.putExtra("presentNote", presentNote);
                intentWithData.putExtra("position", position);
                startActivity(intentWithData);
            }
        });

        notesListView.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener() {
            @Override
            public boolean onItemLongClick(AdapterView<?> parent, View view, final int position, long id) {
                new AlertDialog.Builder(MainActivity.this)
                        .setIcon(android.R.drawable.ic_menu_delete)
                        .setTitle("Are you sure?")
                        .setMessage("Are you sure you want to delete this note?")
                        .setPositiveButton("delete", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                notes.remove(position);
                                try{
                                    sharedPreferences.edit().putString("notes", ObjectSerializer.serialize(notes)).apply();
                                }
                                catch(Exception e){
                                    e.printStackTrace();
                                    Log.i("MY ERROR", "COULD NOT SAVE NOTES IN SHARED PREFERENCES - MAIN_ACTIVITY");
                                }
                                arrayAdapter.notifyDataSetChanged();
                            }
                        })
                        .setNegativeButton("cancel", null)
                        .show();

                return true;
            }
        });
    }

}
