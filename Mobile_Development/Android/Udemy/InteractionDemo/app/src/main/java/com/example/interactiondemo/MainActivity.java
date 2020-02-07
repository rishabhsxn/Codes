package com.example.interactiondemo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    public void onLogin(View view){
        EditText usernameEditText = (EditText) findViewById(R.id.usernameEditText);
        EditText passwordEditText = (EditText) findViewById((R.id.passwordEditText));

        String username = usernameEditText.getText().toString();
        String password = passwordEditText.getText().toString();

        Log.i("User info", "Username: "+username);
        Log.i("User info", "Password: "+password);

    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
