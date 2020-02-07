package com.example.braintrainer;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.CountDownTimer;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    int totalTime=30, questionsAttempted=0, correctAnswers=0;
    final String totalTimeString="30s";
    final String defaultScoreString = "0/0";
    int secondsLeft=30;
    int firstNumber, secondNumber, realAnswer;
    final int minNumber = 1;
    final int maxNumber = 20;
    final int maxAnswer = maxNumber+maxNumber;
    final int minAnswer = minNumber+minNumber;
    final int smallestIndex = 0;
    final int largestIndex = 3;          // 4 buttons = 4 options
    int randomIndex;

//    boolean isGameActive = true;

    String wrongMessage = "WRONG :(";
    String correctMessage = "CORRECT!";

    CountDownTimer countDownTimer;
    TextView timeLeftTextView, scoreTextView, answerTextView, questionTextView, finalScoreTextView;
    Button button1, button2, button3, button4, startButton;


    // only called one time to start the game
    public void initializeGame(){
        resetGame();
    }

    // write a function to make game visible when click on a button(add that button)
    public void onClickStart(View view){
        startButton.setEnabled(false);
        startButton.setVisibility(View.INVISIBLE);
        timeLeftTextView.setVisibility(View.VISIBLE);
        scoreTextView.setVisibility(View.VISIBLE);
        answerTextView.setVisibility(View.VISIBLE);
        questionTextView.setVisibility(View.VISIBLE);
        finalScoreTextView.setVisibility(View.INVISIBLE);

        button1.setVisibility(View.VISIBLE);
        button1.setEnabled(true);
        button2.setVisibility(View.VISIBLE);
        button2.setEnabled(true);
        button3.setVisibility(View.VISIBLE);
        button3.setEnabled(true);
        button4.setVisibility(View.VISIBLE);
        button4.setEnabled(true);

        timerController();
        generateValues();
    }

    // write a function to call check function from the button clicked and refill values.
    public void onClickOption(View view){
        Button button = (Button) view;
        int clickedValue = Integer.parseInt(button.getText().toString());
        checkAnswer(clickedValue);
        generateValues();
    }

    /* write a function that generates and set new values to firstNumber, secondNumber,
     all options and puts it to a random button*/
    public void generateValues(){
        firstNumber = generateRandom(minNumber, maxNumber);
        secondNumber = generateRandom(minNumber, maxNumber);
        String newQuestion = firstNumber+" + "+secondNumber;
        questionTextView.setText(newQuestion);
        realAnswer = firstNumber + secondNumber;
        randomIndex = generateRandom(smallestIndex, largestIndex);
        Log.i("answer", Integer.toString(realAnswer));

        int[] arr = new int[4];
        for(int i=0; i<4; i++){
            int wrongAnswer = generateRandom(minAnswer, maxAnswer);
            if(i==randomIndex)
                arr[i] = realAnswer;
            else{
                int flag=0;
                if(wrongAnswer == realAnswer)
                    i--;
                else{
                    for(int j=0; j<i; j++){
                        if(wrongAnswer==arr[j]){
                            flag=1;
                            i--;
                        }
                    }
                    if(flag==0)
                        arr[i] = wrongAnswer;
                }
            }
        }

        button1.setText(String.valueOf(arr[0]));
        button2.setText(String.valueOf(arr[1]));
        button3.setText(String.valueOf(arr[2]));
        button4.setText(String.valueOf(arr[3]));
    }

    // write a function that generates a no. between min and max (both inclusive)
    public int generateRandom(int min, int max){
        int result;
        result = (int)(Math.random()*(max-min+1))+min;
        return result;
    }

    // write a method to check if the clicked answer was correct and update the scoreTextView
    public void checkAnswer(int chosen){
        questionsAttempted++;
        if(chosen==realAnswer) {
            correctAnswers++;
            answerTextView.setText(correctMessage);
        }
        else
            answerTextView.setText(wrongMessage);

        String scoreString = correctAnswers+"/"+questionsAttempted;
        scoreTextView.setText(scoreString);
    }

    // write a function to reset the game when timer is over
    public void resetGame(){
        timeLeftTextView.setVisibility(View.INVISIBLE);
        scoreTextView.setVisibility(View.INVISIBLE);
        answerTextView.setVisibility(View.INVISIBLE);
        questionTextView.setVisibility(View.INVISIBLE);
        finalScoreTextView.setVisibility(View.VISIBLE);

        button1.setVisibility(View.INVISIBLE);
        button1.setEnabled(false);
        button2.setVisibility(View.INVISIBLE);
        button2.setEnabled(false);
        button3.setVisibility(View.INVISIBLE);
        button3.setEnabled(false);
        button4.setVisibility(View.INVISIBLE);
        button4.setEnabled(false);

        questionsAttempted=0;
        correctAnswers=0;
        secondsLeft=30;
        scoreTextView.setText(defaultScoreString);

        startButton.setEnabled(true);
        startButton.setVisibility(View.VISIBLE);


    }

    // write a function to control timer.
    public void timerController(){
        countDownTimer = new CountDownTimer(totalTime*1000, 1000) {
            @Override
            public void onTick(long millisUntilFinished) {
                secondsLeft--;
                String secondsLeftString = secondsLeft+"s";
                timeLeftTextView.setText(secondsLeftString);
            }

            @Override
            public void onFinish() {
//                isGameActive=false;
                String finalScore = "Your score: "+correctAnswers+"/"+questionsAttempted;
                finalScoreTextView.setText(finalScore);
                timeLeftTextView.setText(totalTimeString);
                resetGame();
            }
        }.start();

    }



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        timeLeftTextView = (TextView) findViewById(R.id.timeLeftTextView);
        scoreTextView = (TextView) findViewById(R.id.scoreTextView);
        answerTextView = (TextView) findViewById(R.id.answerTextView);
        questionTextView = (TextView) findViewById(R.id.questionTextView);
        finalScoreTextView = (TextView) findViewById(R.id.finalScoreTextView);

        button1 = (Button) findViewById(R.id.button1);
        button2 = (Button) findViewById(R.id.button2);
        button3 = (Button) findViewById(R.id.button3);
        button4 = (Button) findViewById(R.id.button4);
        startButton = (Button) findViewById(R.id.startButton);

        initializeGame();

    }
}
