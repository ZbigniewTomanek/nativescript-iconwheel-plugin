package com.example.iconwheelview;

import android.content.Context;

public class IconWheelView extends WheelView {

    public IconWheelView(Context context) {
        super(context);

        Integer[] items =
                {R.drawable.clouds, R.drawable.rain, R.drawable.storm, R.drawable.sun, R.drawable.snow};
        this.isCyclic = true;

        AbstractWheelAdapter adapter = new IconWheelViewAdapter(context, items);
        this.setAdapter(adapter);
    }
}
