package com.example.animations;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    int flag=0;

    public void onClickHomer(View view){
        ImageView homerImageView = (ImageView) findViewById(R.id.homerImageView);
        ImageView bartImageView = (ImageView) findViewById(R.id.bartImageView);

        if(flag==0){
            fadeAndShow(homerImageView, bartImageView);
            flag=1;
        }
        else{
            fadeAndShow(bartImageView, homerImageView);
            flag=0;
        }
    }

    public void fadeAndShow(ImageView imageView1, ImageView imageView2){
        imageView1.animate().alpha(0).setDuration(2000);
        imageView2.animate().alpha(1).setDuration(2000);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
