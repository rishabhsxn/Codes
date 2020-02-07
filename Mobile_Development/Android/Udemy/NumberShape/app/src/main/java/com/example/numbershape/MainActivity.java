package com.example.numbershape;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    class Number{
        int value;

        public boolean isTriangular(){
            int triangularNumber = 1, count=1;

            while(triangularNumber <= value){
                if(value == triangularNumber)
                    return true;

                count++;

                triangularNumber += count;
            }

            return false;
        }

        public boolean isSquare(){
            int perfectSquare = 1, count=1;

            while(perfectSquare <= value){
                if(value == perfectSquare)
                    return true;

                count++;

                perfectSquare = count*count;
            }

            return false;
        }
    }

    public void onClickCheck(View view){
        EditText numberEditText = (EditText) findViewById(R.id.numberEditText);
        String numberString = numberEditText.getText().toString();

        String message;
        if(numberString.isEmpty())
            message = "Please enter a number!";
        else{
            int numberInt = Integer.parseInt(numberString);
            Number number = new Number();
            number.value = numberInt;

            message = numberString;
            if(number.isSquare() && number.isTriangular())
                message += " is Triangular as well as Square";
            else if(number.isSquare())
                message += " is Square but not Triangular";
            else if(number.isTriangular())
                message += " is Triangular but not Square";
            else
                message += " is neither Triangular nor Square";
        }

        Toast.makeText(this, message, Toast.LENGTH_LONG).show();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
