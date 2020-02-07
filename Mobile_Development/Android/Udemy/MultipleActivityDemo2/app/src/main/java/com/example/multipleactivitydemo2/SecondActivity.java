package com.example.multipleactivitydemo2;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class SecondActivity extends AppCompatActivity {
    TextView nameTextView;
    Intent intent;

    public void goBack(View view){
        finish();
    }

    public void getAndSetName(){
        String name = intent.getStringExtra("nameOfFriend");
        String msg = "You clicked on : "+name;
        nameTextView.setText(msg);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        nameTextView = (TextView) findViewById(R.id.nameTextView);
        intent = getIntent();
        getAndSetName();
    }
}
