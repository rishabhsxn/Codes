package com.example.timestable;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.SeekBar;

import java.util.ArrayList;
import java.util.Arrays;

public class MainActivity extends AppCompatActivity {

//    int min=1;
    int max=20;
    int num;
    SeekBar seekBar;
    ArrayList<Integer> multipliers;
    ArrayAdapter<Integer> arrayAdapter;

    public void formatSeekBar(){
        seekBar = (SeekBar) findViewById(R.id.seekBar);
//        seekBar.setMin(min);
        seekBar.setMax(max-1);

        seekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                num = progress+1;

                for(int i=1; i<=10; i++){
                    multipliers.set(i-1, i*num);
                }

                arrayAdapter.notifyDataSetChanged();
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ListView tableListView = (ListView) findViewById(R.id.tableListView);

        formatSeekBar();

        multipliers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

        arrayAdapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, multipliers);

        tableListView.setAdapter(arrayAdapter);
    }
}
