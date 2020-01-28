package com.example.wheelview;

import android.content.Context;
import android.widget.Toast;

public class Toaster {
    public void showToast(Context ctx, String message) {
        Toast.makeText(ctx, message, Toast.LENGTH_SHORT).show();
    }
}
