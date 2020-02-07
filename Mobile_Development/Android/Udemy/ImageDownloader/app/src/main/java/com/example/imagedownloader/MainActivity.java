package com.example.imagedownloader;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class MainActivity extends AppCompatActivity {
    ImageView imageView;

    public void onClickDownload(View view){
        ImageDownloader imageDownloader = new ImageDownloader();
        Bitmap myImage=null;
        try {
            myImage = imageDownloader.execute("https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png").get();

//            https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png
//            https://scontent.fdel1-3.fna.fbcdn.net/v/t31.0-8/s960x960/23737979_1987464024868186_4777455301409871996_o.jpg?_nc_cat=111&_nc_ohc=5AIbHbmidgQAX_E_SRe&_nc_ht=scontent.fdel1-3.fna&_nc_tp=1002&oh=226c9d6bc397940ccf1bc7e406f44a53&oe=5E9896C7
        }catch(Exception e){
            Log.i("error","Did not get Bitmap of image");
            e.printStackTrace();
        }
        imageView.setImageBitmap(myImage);
    }

    public class ImageDownloader extends AsyncTask<String, Void, Bitmap>{

        @Override
        protected Bitmap doInBackground(String... urls) {
            URL url;
            HttpURLConnection httpURLConnection;
            Bitmap bitmap;
            try{
                url = new URL(urls[0]);
                httpURLConnection = (HttpURLConnection) url.openConnection();
                httpURLConnection.connect();
                InputStream in = httpURLConnection.getInputStream();
                bitmap = BitmapFactory.decodeStream(in);
                return bitmap;

            }catch(Exception e){
                Log.i("info", "Failed");
                e.printStackTrace();
                return null;
            }
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        imageView = (ImageView) findViewById(R.id.imageView);
    }
}
