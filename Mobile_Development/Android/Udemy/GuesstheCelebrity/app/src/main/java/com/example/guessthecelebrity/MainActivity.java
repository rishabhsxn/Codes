package com.example.guessthecelebrity;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class MainActivity extends AppCompatActivity {
    final String correct="Correct!";
    final String wrong="Wrong! It was ";
    final String websiteURL = "http://www.posh24.se/kandisar";

    final int minButtonNumber = 0;
    final int maxButtonNumber = 3;

    Button button0, button1, button2, button3;
    ImageView celebrityImageView;

    ArrayList<String> celebNames = new ArrayList<>();
    ArrayList<String> celebImages = new ArrayList<>();

    int correctButtonNumber;
    int buttonClickedNumber;
    int indexOfCorrectCelebInArray;
    int totalCelebs;


    // write a class to fetch html from provided URL.
    public class DataFetcher extends AsyncTask<String, Void, String>{

        @Override
        protected String doInBackground(String... urls){
            URL url;
            HttpURLConnection httpURLConnection;
            String data="";

            try{
                url = new URL(urls[0]);
                httpURLConnection = (HttpURLConnection) url.openConnection();
                InputStream in = httpURLConnection.getInputStream();
                InputStreamReader reader = new InputStreamReader(in);

                int d = reader.read();
                while(d!=-1){
                    char letters = (char)d;
                    data += letters;
                    d = reader.read();
                }

                return data;
            }
            catch(Exception e){
                Log.i("Error Info", "Couldn't fetch HTML");
                e.printStackTrace();
                return null;
            }
        }
    }


    // write a class to Download Image that is selected by newQuestion function
    public class DownloadImage extends AsyncTask<String, Void, Bitmap>{

        @Override
        protected Bitmap doInBackground(String... urls){
            Bitmap imageBitmap = null;
            URL url;
            HttpURLConnection httpURLConnection;

            try{
                url = new URL(urls[0]);
                httpURLConnection = (HttpURLConnection) url.openConnection();
                httpURLConnection.connect();
                InputStream in = httpURLConnection.getInputStream();
                imageBitmap = BitmapFactory.decodeStream(in);
                return imageBitmap;
            }
            catch(Exception e){
                e.printStackTrace();
                Log.i("Error in Download Class", "Couldn't download Image");
                return null;
            }
        }
    }


    // write a function to fetch html, parse html and puts celebrity images links and names in ArrayLists
    public void fetchAndParseData(){
        // fetch
        DataFetcher dataFetcher = new DataFetcher();
        String data="";
        try{
            data = dataFetcher.execute(websiteURL).get();
            Log.i("MYINFO", data);
        }
        catch (Exception e){
            e.printStackTrace();
            Log.i("fetcherFunction", "Couldn't get data");
        }

        String[] dataSplitted = data.split("<div class=\"col-xs-12 col-sm-6 col-md-4\">");

        data = dataSplitted[0];
        // parse using regex
        Pattern p = Pattern.compile("img src=\"(.*?)\"");   // regex to get images
        Matcher m = p.matcher(data);
        while(m.find())
            celebImages.add(m.group(1));

        p = Pattern.compile("alt=\"(.*?)\"");    // regex to get names
        m = p.matcher(data);
        while(m.find())
            celebNames.add(m.group(1));

        totalCelebs = celebImages.size();

//        Log.i("celeb Images", celebImages.toString());
//        Log.i("celeb names", celebNames.toString());

    }


    // write a function to randomly select a celebrity and download and show new image and options
    public void newQuestion(){
        correctButtonNumber = generateRandomNumber(minButtonNumber, maxButtonNumber);
        indexOfCorrectCelebInArray = generateRandomNumber(0, totalCelebs-1);

        String imageURL = celebImages.get(indexOfCorrectCelebInArray);
        DownloadImage downloadImage = new DownloadImage();
        Bitmap image = null;
        try {
            image = downloadImage.execute(imageURL).get();
        }
        catch(Exception e){
            e.printStackTrace();
            Log.i("Downloading function", "Could not download Image");
        }
        celebrityImageView.setImageBitmap(image);

        String[] celebNameOptions = new String[maxButtonNumber+1];
        for(int i=minButtonNumber; i<=maxButtonNumber; i++){
            if(i==correctButtonNumber)
                celebNameOptions[i] = celebNames.get(indexOfCorrectCelebInArray);
            else{
                int randomCelebIndex = generateRandomNumber(0, totalCelebs-1);
                int flag=0;
                if(randomCelebIndex==indexOfCorrectCelebInArray)
                    i--;
                else{
                    for(int j=minButtonNumber; j<i; j++){
                        if(celebNameOptions[j].equals(celebNames.get(randomCelebIndex))){
                            i--;
                           flag=1;
                           break;
                        }
                    }
                    if(flag==0)
                        celebNameOptions[i] = celebNames.get(randomCelebIndex);
                }
            }
        }

        button0.setText(celebNameOptions[0]);
        button1.setText(celebNameOptions[1]);
        button2.setText(celebNameOptions[2]);
        button3.setText(celebNameOptions[3]);

    }


    // write a function to check if the chosen answer is correct and display a Toast
    public void checkAnswer(View view){
        String msg;
        Button button = (Button) view;
        buttonClickedNumber = Integer.parseInt(button.getTag().toString());

        if(buttonClickedNumber == correctButtonNumber)
            msg=correct;
        else
            msg = wrong+celebNames.get(indexOfCorrectCelebInArray);

        Toast.makeText(this, msg, Toast.LENGTH_SHORT).show();
        newQuestion();
    }


    // write a function to generate random number between passed numbers (both inclusive)
    public int generateRandomNumber(int min, int max){
        int result;
        result = (int)(Math.random()*(max-min+1))+min;
        return result;
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        celebrityImageView = (ImageView) findViewById(R.id.celebrityImageView);

        button0 = (Button) findViewById(R.id.button0);
        button1 = (Button) findViewById(R.id.button1);
        button2 = (Button) findViewById(R.id.button2);
        button3 = (Button) findViewById(R.id.button3);

        fetchAndParseData();
        newQuestion();
    }
}

// http://www.posh24.se/kandisar