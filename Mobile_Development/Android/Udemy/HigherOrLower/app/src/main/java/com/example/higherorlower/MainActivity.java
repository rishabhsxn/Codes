package com.example.higherorlower;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import java.util.Random;

public class MainActivity extends AppCompatActivity {

    int randomNumber;

    public int randomNumberGenerator(){
        int min=2, max=19;
        Random random = new Random();
        int r = random.nextInt((max-min)+1) + min;
        return r;
    }

    public void onClickGuess(View view){

        EditText guessEditText = (EditText) findViewById(R.id.guessEditText);
        String numberString = guessEditText.getText().toString();
        int numberInt = Integer.parseInt(numberString);
        String result;
        if(numberInt < randomNumber){
            result = "Higher!";
        }
        else if(numberInt > randomNumber){
            result = "Lower!";
        }
        else{
            result = "You got it! Play Again.";
            // generate random no. again
            randomNumber = randomNumberGenerator();
        }

        Toast.makeText(this, result, Toast.LENGTH_SHORT).show();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        randomNumber = randomNumberGenerator();
    }
}
