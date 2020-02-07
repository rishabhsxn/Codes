package com.example.basicphrases;

import androidx.appcompat.app.AppCompatActivity;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    MediaPlayer sound;
    String fileName;
    Button button;

    public void playSound(View view){
        button = (Button) view;
        fileName = button.getTag().toString();
        sound = MediaPlayer.create(this, getResources().getIdentifier(fileName, "raw", getPackageName()));
        if(!sound.isPlaying())
            sound.start();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
