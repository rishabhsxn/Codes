package com.example.notes;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.widget.TextView;

public class NoteActivity extends AppCompatActivity {

    TextView noteTextView;
    int position;
    SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_note);

        noteTextView = (TextView) findViewById(R.id.noteTextView);
        sharedPreferences = getSharedPreferences("com.example.notes", Context.MODE_PRIVATE);

        handleIncomingNote();
    }

    public void handleIncomingNote(){
        Intent intent = getIntent();
//        String presentNote = intent.getStringExtra("presentNote");
        position = intent.getIntExtra("position", -1);
        String presentNote="";

        if(position != -1) {
            presentNote = MainActivity.notes.get(position);
            noteTextView.setText(presentNote);
//            noteTextView.setSelectAllOnFocus(true);
        }
        else{
            // add an empty note to arraylist, get it's index and set it to position
            MainActivity.notes.add("");
            position = MainActivity.notes.size()-1;
        }

        noteTextView.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                String modifiedNote = noteTextView.getText().toString();

                if(modifiedNote.length()>0) {
                    MainActivity.notes.set(position, modifiedNote);
                    MainActivity.arrayAdapter.notifyDataSetChanged();
                    try{
                        sharedPreferences.edit().putString("notes", ObjectSerializer.serialize(MainActivity.notes)).apply();
                    }
                    catch(Exception e){
                        e.printStackTrace();
                        Log.i("MY ERROR", "COULD NOT SAVE NOTES IN SHARED PREFERENCES - NOTE_ACTIVITY");
                    }
                }
            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });
    }

//    @Override
//    protected void onStop() {
//        super.onStop();
//
//        String modifiedNote = noteTextView.getText().toString();
//
//        if(modifiedNote.length()>0) {
//            if (position != -1)
//                MainActivity.notes.set(position, modifiedNote);
//            else
//                MainActivity.notes.add(modifiedNote);
//
//            MainActivity.arrayAdapter.notifyDataSetChanged();
//        }
//    }
}
