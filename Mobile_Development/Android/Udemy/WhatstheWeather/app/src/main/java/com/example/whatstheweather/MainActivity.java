package com.example.whatstheweather;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

public class MainActivity extends AppCompatActivity {

    EditText editText;
    TextView resultTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editText = findViewById(R.id.editText);
        resultTextView = findViewById(R.id.resultTextView);
    }

    public void getWeather(View view) {
        try {
            DownloadJSON task = new DownloadJSON();
            String encodedCityName = URLEncoder.encode(editText.getText().toString(), "UTF-8");
//            String encodedCityName = editText.getText().toString();
            String finalURL = "http://api.openweathermap.org/data/2.5/weather?q=" + encodedCityName + "&appid=4776dbfb066e269544ff74e68effff05";
            Log.i("myFinal URL", finalURL);

            task.execute(finalURL);

            InputMethodManager mgr = (InputMethodManager) getSystemService(Context.INPUT_METHOD_SERVICE);
            mgr.hideSoftInputFromWindow(editText.getWindowToken(), 0);
        } catch (Exception e) {
            e.printStackTrace();
            Toast.makeText(getApplicationContext(),"Could not find weather :( GetWeather",Toast.LENGTH_SHORT).show();
        }
    }

    public class DownloadJSON extends AsyncTask<String, Void, String>{

        @Override
        protected String doInBackground(String... urls){
            URL url;
            HttpURLConnection httpURLConnection;
            String result="";
            try{
                url = new URL(urls[0]);
                httpURLConnection = (HttpURLConnection)url.openConnection();
                InputStream in = httpURLConnection.getInputStream();
                InputStreamReader reader = new InputStreamReader(in);
                int data = reader.read();
                while(data!=-1){
                    char letter = (char)data;
                    result += letter;
                    data = reader.read();
                }

                return result;

            }catch (Exception e){
                e.printStackTrace();
                Log.i("error", "Couldn't get the JSON");
                return null;
            }
        }

        @Override
        protected void onPostExecute(String s) {
            super.onPostExecute(s);

            try {
                JSONObject jsonObject = new JSONObject(s);

                String weatherInfo = jsonObject.getString("weather");

                Log.i("Weather content", weatherInfo);

                JSONArray arr = new JSONArray(weatherInfo);

                String message = "";

                for (int i=0; i < arr.length(); i++) {
                    JSONObject jsonPart = arr.getJSONObject(i);

                    String main = jsonPart.getString("main");
                    String description = jsonPart.getString("description");

                    if (!main.equals("") && !description.equals("")) {
                        message += main + ": " + description + "\r\n";
                    }
                }

                if (!message.equals("")) {
                    resultTextView.setText(message);
                } else {
                    Toast.makeText(getApplicationContext(),"Could not find weather :( message is empty",Toast.LENGTH_SHORT).show();
                    resultTextView.setText("");
                }

            } catch (Exception e) {
                Toast.makeText(getApplicationContext(),"Could not find weather :(",Toast.LENGTH_SHORT).show();
                resultTextView.setText("");
                e.printStackTrace();
            }

        }
    }
}
