package com.example.timersdemo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.CountDownTimer;
import android.os.Handler;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    TextView timeLeftTextView;
    TextView timePassedTextView;
    int initialTimeLeft = 15;
    int initialTimePassed = 0;
    Handler handler;
    Runnable runnable;

    // using handler and runnable
    public void timePassed(){
        handler = new Handler();

        runnable = new Runnable() {
            @Override
            public void run() {
                initialTimePassed++;
                String initTimePassed = initialTimePassed + " seconds";
                timePassedTextView.setText(initTimePassed);
                handler.postDelayed(this, 1000);
            }
        };

        handler.post(runnable);
    }

    // using countdown timer
    public void timeLeft(){
        new CountDownTimer(15000, 1000){
            public void onTick(long milliSecondsUntilDone){
                initialTimeLeft--;
                String initTimeLeft = initialTimeLeft + " seconds";
                timeLeftTextView.setText(initTimeLeft);
            }

            public void onFinish(){
                handler.removeCallbacks(runnable);
            }
        }.start();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        timeLeftTextView = (TextView) findViewById(R.id.timeLeftTextView);
        timePassedTextView = (TextView) findViewById(R.id.timePassedTextView);

        timePassed();
        timeLeft();
    }
}
