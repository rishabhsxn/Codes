package com.example.kotlincounter

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    var num=0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var countTextView = findViewById<TextView>(R.id.countTextView)

    }

    fun increase(view: View){
        num++
        val newCounter: String = "Count: $num"
        countTextView.setText(newCounter)
    }

    fun reset(view: View){
        num=0
        val newCounter: String = "Count: $num"
//        countTextView.setText(newCounter)
        countTextView.text = newCounter        // NEW WAY OF KOTLIN
    }
}
