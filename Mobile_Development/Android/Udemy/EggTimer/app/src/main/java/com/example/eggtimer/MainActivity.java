package com.example.eggtimer;

import androidx.appcompat.app.AppCompatActivity;
import java.lang.Math;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.View;
import android.widget.Button;
import android.widget.SeekBar;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    final int initialSeconds = 30;
    final int maxSeconds = 600;
    final String go = "GO!";
    final String stop = "STOP!";

    int chosenSeconds = 30;
    String chosenTimeInMinutesSeconds;

    CountDownTimer countDownTimer;
    SeekBar timeSeekBar;
    TextView timeLeftTextView;
    Button goButton;
    MediaPlayer alarmSound;


    public void onClickGo(View view){

        if(goButton.getText().equals(go)) {
            // start decreasing time
            if (timeSeekBar.isEnabled())
                timeSeekBar.setEnabled(false);

            goButton.setText(stop);

            countDownTimer = new CountDownTimer(chosenSeconds * 1000, 1000) {
                @Override
                public void onTick(long milliSecondsLeft) {
                    timeSeekBar.setProgress(chosenSeconds - 1);
                    timeLeftTextView.setText(convertToMinutesSeconds(chosenSeconds--));
                }

                @Override
                public void onFinish() {
                    alarmSound.start();
                    resetToInitial();
                }
            }.start();
        }
        else{
            resetToInitial();
        }

    }

    public String convertToMinutesSeconds(int seconds){
        // returns a string of minutes:seconds
        String result;
        int minutes = (int)Math.floor((double)seconds/60f);
        int secondsInt = seconds%60;

        result = minutes+":"+String.format("%02d", secondsInt);
        return result;
    }

    public void initializeSeekBar(){
        timeSeekBar.setMax(maxSeconds);
        timeSeekBar.setProgress(initialSeconds);

        timeSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                if(fromUser){
                    chosenSeconds = progress;
                    chosenTimeInMinutesSeconds = convertToMinutesSeconds(chosenSeconds);
                    timeLeftTextView.setText(chosenTimeInMinutesSeconds);
                }
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });
    }

    public void resetToInitial(){
        countDownTimer.cancel();
        timeSeekBar.setEnabled(true);
        goButton.setText(go);
        timeSeekBar.setProgress(initialSeconds);
        chosenSeconds=initialSeconds;
        timeLeftTextView.setText(convertToMinutesSeconds(initialSeconds));
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        timeSeekBar = (SeekBar) findViewById(R.id.timeSeekBar);
        timeLeftTextView = (TextView) findViewById(R.id.timeLeftTextView);
        timeLeftTextView.setText(convertToMinutesSeconds(initialSeconds));
        goButton = (Button) findViewById(R.id.goButton);
        goButton.setText(go);
        alarmSound = MediaPlayer.create(this, R.raw.air_horn);
        initializeSeekBar();
    }
}
