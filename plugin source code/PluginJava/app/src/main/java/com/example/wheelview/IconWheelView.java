package com.example.wheelview;

import android.content.Context;

public class IconWheelView extends WheelView {

    public IconWheelView(Context context, Integer[] items) {
        super(context);
        this.isCyclic = true;

        AbstractWheelAdapter adapter = new IconWheelViewAdapter(context, items);
        this.setAdapter(adapter);
    }
}
