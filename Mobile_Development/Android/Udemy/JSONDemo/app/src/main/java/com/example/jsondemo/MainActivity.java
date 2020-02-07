package com.example.jsondemo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class MainActivity extends AppCompatActivity {

    final String apiKey = "4776dbfb066e269544ff74e68effff05";
    final String apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
    final String location = "Dahmi";

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
        protected void onPostExecute(String result){
            super.onPostExecute(result);

            try{
                JSONObject myJsonObject = new JSONObject(result);
                String weatherInfo = myJsonObject.getString("weather");
                JSONArray weatherJsonArray = new JSONArray(weatherInfo);
                for (int i=0; i<weatherJsonArray.length(); i++){
                    JSONObject oneWeatherObject = weatherJsonArray.getJSONObject(i);
                    Log.i("main",oneWeatherObject.getString("main"));
                    Log.i("description",oneWeatherObject.getString("description"));
                }
            }
            catch(Exception e){
                e.printStackTrace();
                Log.i("error", "error in making JSON object");
            }
//            Log.i("myJson", result);
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        DownloadJSON downloadJSON = new DownloadJSON();
        String finalUrl = apiUrl+location+"&appid="+apiKey;
        downloadJSON.execute(finalUrl);

    }
}
