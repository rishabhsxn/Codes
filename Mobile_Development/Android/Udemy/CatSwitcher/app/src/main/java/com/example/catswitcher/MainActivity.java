package com.example.catswitcher;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    int flag=0;

    public void onClickChange(View view){
        ImageView image = (ImageView) findViewById(R.id.catImageView);
        if(flag==0){
            image.setImageResource(R.drawable.cat2);
            flag = 1;
        }
        else{
            image.setImageResource(R.drawable.cat1);
            flag=0;
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
