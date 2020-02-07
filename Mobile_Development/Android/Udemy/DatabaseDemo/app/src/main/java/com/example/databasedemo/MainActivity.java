package com.example.databasedemo;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        SQLiteDatabase myDatabase = openOrCreateDatabase("Users", Context.MODE_PRIVATE, null);

        myDatabase.execSQL("CREATE TABLE IF NOT EXISTS users (name VARCHAR, age INT(3))");
        myDatabase.execSQL("INSERT INTO users (name, age) VALUES ('Rishabh', 21)");
        myDatabase.execSQL("INSERT INTO users (name, age) VALUES ('Poojan', 19)");
        myDatabase.execSQL("INSERT INTO users (name, age) VALUES ('Sanyam', 18)");


        // to retrieve we use Cursor

        Cursor c = myDatabase.rawQuery("SELECT * FROM users", null);
        int nameIndex = c.getColumnIndex("name");
        int ageIndex = c.getColumnIndex("age");
        c.moveToFirst();
        while(!c.isAfterLast()){
            Log.i("INFO", "Name: "+c.getString(nameIndex));
            Log.i("INFO", "Age: "+c.getString(ageIndex));
            c.moveToNext();
        }
        c.close();
    }
}
