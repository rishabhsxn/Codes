package com.example.gameconnect3;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.TargetApi;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
//import android.widget.GridLayout;    //***IMP creates error***
import androidx.gridlayout.widget.GridLayout;
import android.widget.ImageView;
import android.widget.TextView;


public class MainActivity extends AppCompatActivity {

    int activePlayer=0;    // 0=red , 1=yellow, 2=empty
    int[] cellValues = {2, 2, 2, 2, 2, 2, 2, 2, 2};
    String winMessage;
    int chancesLeft=9;
    Button resetButton;
    TextView messageTextView;
    boolean gameActive=true;

//    @TargetApi(16)
    public void onClickReset(View view){
//        recreate();
        // or manually reset everything

//        activePlayer=0;
//        gameActive=true;
//        winMessage=null;
//        chancesLeft=9;
//        messageTextView.setVisibility(View.INVISIBLE);
//        for(int i=0; i<9; i++)
//            cellValues[i] = 2;
//
//        resetButton.setText("Reset");
//        GridLayout gridLayout = (GridLayout)findViewById(R.id.gridView);
//        for(int i=0; i<gridLayout.getChildCount(); i++){
//            ImageView imageView = (ImageView)gridLayout.getChildAt(i);
//            imageView.setEnabled(true);
//            imageView.setImageDrawable(null);
//        }


//        Intent intent = getIntent();
//        finish();
//        startActivity(intent);


        if (Build.VERSION.SDK_INT >= 11) {
            recreate();
        } else {
            Intent intent = getIntent();
            intent.addFlags(Intent.FLAG_ACTIVITY_NO_ANIMATION);
            finish();
            overridePendingTransition(0, 0);

            startActivity(intent);
            overridePendingTransition(0, 0);
        }
    }

    public boolean win(){
        if(cellValues[0]!=2 && cellValues[0]==cellValues[1] && cellValues[1]==cellValues[2])
            return true;
        else if(cellValues[3]!=2 && cellValues[3]==cellValues[4] && cellValues[4]==cellValues[5])
            return true;
        else if(cellValues[6]!=2 && cellValues[6]==cellValues[7] && cellValues[7]==cellValues[8])
            return true;
        else if(cellValues[0]!=2 && cellValues[0]==cellValues[3] && cellValues[3]==cellValues[6])
            return true;
        else if(cellValues[1]!=2 && cellValues[1]==cellValues[4] && cellValues[4]==cellValues[7])
            return true;
        else if(cellValues[2]!=2 && cellValues[2]==cellValues[5] && cellValues[5]==cellValues[8])
            return true;
        else if(cellValues[0]!=2 && cellValues[0]==cellValues[4] && cellValues[4]==cellValues[8])
            return true;
        else if(cellValues[2]!=2 && cellValues[2]==cellValues[4] && cellValues[4]==cellValues[6])
            return true;
        else
            return false;
    }

    //  one more method for the Winning logic using 2D array
    public boolean win2(){
        int[][] winningLocations = {{0,1,2}, {3,4,5}, {6,7,8}, {0,3,6}, {1,4,7}, {2,5,8}, {0,4,8}, {2,4,6}};

        for(int[] winningLocation : winningLocations){
            if(cellValues[winningLocation[0]]!=2 && cellValues[winningLocation[0]]==cellValues[winningLocation[1]] && cellValues[winningLocation[1]]==cellValues[winningLocation[2]])
                return true;
        }

        return false;
    }


    public void printMessage(){
        gameActive=false;
        // try to delay showing message - when the coin reach the place, then only show winner
        messageTextView.setText(winMessage);
        messageTextView.setVisibility(View.VISIBLE);
        resetButton.setText("Play Again!");
    }

    public void dropIn(View view){
        if(gameActive) {
            messageTextView = (TextView) findViewById(R.id.messageTextView);
            ImageView counter = (ImageView) view;
            resetButton = (Button) findViewById(R.id.resetButton);
            counter.setTranslationY(-1500);
            int cellNumber = Integer.parseInt(counter.getTag().toString());
            cellValues[cellNumber] = activePlayer;
            if (activePlayer == 0) {
                counter.setImageResource(R.drawable.red);
                activePlayer = 1;
            } else {
                counter.setImageResource(R.drawable.yellow);
                activePlayer = 0;
            }
            counter.animate().translationYBy(1500).rotation(3600).setDuration(300);
            counter.setEnabled(false);
            chancesLeft--;

            if (win2()) {                // opposite of activePlayer has to be taken, because it's value is reversed
                if (activePlayer == 1)
                    winMessage = "Red Won!";
                else
                    winMessage = "Yellow Won!";
                printMessage();
            } else {
                if (chancesLeft == 0) {
                    winMessage = "It's a Draw!";
                    printMessage();
                }
            }
        }

    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
