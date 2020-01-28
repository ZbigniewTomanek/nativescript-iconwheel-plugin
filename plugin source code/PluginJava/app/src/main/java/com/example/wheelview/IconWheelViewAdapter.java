package com.example.wheelview;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;



public class IconWheelViewAdapter extends AbstractWheelAdapter {
    class ViewHolder {
        private ImageView icon;

        public ImageView getIcon() {
            return icon;
        }

        public void setIcon(ImageView icon) {
            this.icon = icon;
        }
    }

    private Integer[] items;
    private LayoutInflater inflater;

    public IconWheelViewAdapter(Context ctx, Integer[] items) {
        this.items = items;
        inflater = (LayoutInflater) ctx.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
    }

    @Override
    public int getItemsCount() {
        return items.length;
    }

    @Override
    public View getItem(int index, View convertView, ViewGroup parent) {
        ViewHolder holder;
        View view;

        if (convertView == null) {
            view = inflater.inflate(R.layout.icon_wheel_view, parent, false);

            holder = new ViewHolder();
            holder.icon = view.findViewById(R.id.weather_list_icon);

            view.setTag(holder);
        } else {
            view = convertView;
            holder = (ViewHolder) convertView.getTag();
        }

        ImageView icon = holder.icon;
        icon.setImageResource(items[index]);

        return view;
    }
}
