package com.example.currencyconverter;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    public void onClickConvert(View view){
        EditText amountEditText = (EditText) findViewById(R.id.amountEditText);
        String amount = amountEditText.getText().toString();
        double amountInPounds = Double.parseDouble(amount);
        double dollarValue = 1.3*amountInPounds;
//        String dollars = String.valueOf(dollarValue);
        String dollars = String.format("%.2f", dollarValue);
        Toast.makeText(this, "£"+amount+" is $"+dollars,Toast.LENGTH_SHORT).show();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
