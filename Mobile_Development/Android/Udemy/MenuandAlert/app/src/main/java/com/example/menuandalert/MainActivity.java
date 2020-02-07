package com.example.menuandalert;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.DialogInterface;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    TextView languageTextView;
    int flag;         // 1 = english       2 = spanish
    SharedPreferences sharedPreferences;
    String english = "Your preferred language is English";
    String spanish = "Your preferred language is Spanish";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        languageTextView = (TextView) findViewById(R.id.languageTextView);
        sharedPreferences = getSharedPreferences("com.example.menuandalert", Context.MODE_PRIVATE);

        manageAlert();
    }

    public void manageAlert(){
        flag = sharedPreferences.getInt("flag", 0);

        if(flag==0){
            new AlertDialog.Builder(this)
                    .setIcon(android.R.drawable.ic_menu_info_details)
                    .setTitle("What language you prefer?")
                    .setMessage("Please choose a language")
                    .setPositiveButton("English", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            languageTextView.setText(english);
                            flag=1;
                            sharedPreferences.edit().putInt("flag", flag).apply();
                            Toast.makeText(getApplicationContext(), "English is selected", Toast.LENGTH_LONG).show();
                        }
                    })
                    .setNegativeButton("Spanish", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            languageTextView.setText(spanish);
                            flag=2;
                            sharedPreferences.edit().putInt("flag", flag).apply();
                            Toast.makeText(getApplicationContext(), "Spanish is selected", Toast.LENGTH_LONG).show();
                        }
                    })
                    .show();
        }
        else if(flag==1){
            languageTextView.setText(english);
        }
        else
            languageTextView.setText(spanish);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater menuInflater = getMenuInflater();
        menuInflater.inflate(R.menu.main_menu, menu);

        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        super.onOptionsItemSelected(item);
        switch (item.getItemId()){
            case R.id.english:
                languageTextView.setText(english);
                flag=1;
                sharedPreferences.edit().putInt("flag", flag).apply();
                Toast.makeText(getApplicationContext(), "English is selected", Toast.LENGTH_LONG).show();
                return true;

            case R.id.spanish:
                languageTextView.setText(spanish);
                flag=2;
                sharedPreferences.edit().putInt("flag", flag).apply();
                Toast.makeText(getApplicationContext(), "Spanish is selected", Toast.LENGTH_LONG).show();
                return true;

            default:
                return false;
        }
    }
}
