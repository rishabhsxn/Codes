package com.example.otheranimation;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ImageView bartImageView = (ImageView) findViewById(R.id.bartImageView);
        bartImageView.setX(-1100);
//        bartImageView.setAlpha(0);
        bartImageView.setScaleX(0);
        bartImageView.setScaleY(0);
//        bartImageView.animate().scaleYBy(-1).scaleYBy(-1);
//        bartImageView.animate().translationXBy(-1100).alpha(0).scaleXBy(-1).scaleYBy(-1);
        bartImageView.animate().translationXBy(1100).rotationBy(1080).alpha(1).scaleXBy(1).scaleYBy(1).setDuration(2500);

    }
}
