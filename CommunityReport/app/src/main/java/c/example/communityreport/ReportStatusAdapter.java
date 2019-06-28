package c.example.communityreport;

import android.content.Context;
import android.support.annotation.NonNull;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;

import java.util.ArrayList;


public class ReportStatusAdapter extends ArrayAdapter<String> {

    private ArrayList<String> itemData;
    private ArrayList<String> itemGps;
    private ArrayList<String> itemWidth;
    private ArrayList<String> itemHeight;
    private ArrayList<String> itemTimeStamp;
    private ArrayList<String> itemStatus;
    private ArrayList<String> itemCount;
    private Context mContext;

    public ReportStatusAdapter(Context context, ArrayList<String> itemTimeStamp, ArrayList<String> itemGps, ArrayList<String> itemStatus, ArrayList<String> itemCount, ArrayList<String> itemWidth, ArrayList<String> itemHeight) {
        super(context, R.layout.listview_item);
        this.itemGps = itemGps;
        this.itemWidth = itemWidth;
        this.itemHeight = itemHeight;
        this.itemTimeStamp = itemTimeStamp;
        this.itemStatus = itemStatus;
        this.itemCount = itemCount;
        this.mContext = context;
    }

    @Override
    public int getCount() {
        return itemTimeStamp.size();
    }

    @NonNull
    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ViewHolder viewHolder = new ViewHolder();
        if(convertView == null) {
            LayoutInflater inflater = (LayoutInflater) mContext.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            convertView = inflater.inflate(R.layout.listview_item, parent, false);

            viewHolder.timestamp =  convertView.findViewById(R.id.timestamp);
            viewHolder.gps =  convertView.findViewById(R.id.gps);
            viewHolder.count = convertView.findViewById(R.id.count);
            viewHolder.dimensions = convertView.findViewById(R.id.dimensions);
            viewHolder.status = convertView.findViewById(R.id.status);
            viewHolder.progressBar = convertView.findViewById(R.id.progressBar);
            convertView.setTag(viewHolder);
        }else{
            viewHolder = (ViewHolder) convertView.getTag();
        }
        String status_text = null;
        switch (itemStatus.get(position)) {
            case "0":
                status_text = "Report Rejected";
                break;
            case "10":
                status_text = "Report Submitted";
                break;
            case "50":
                status_text = "Pothole(s) Detected and Report Accepted";
                break;
            case "60":
                status_text = "Report Acknowledged and Fixing Process Started";
                break;
            case "70":
                status_text = "Engineer Assigned for fixing the issue";
                break;
            case "80":
                status_text = "Issue has been Resolved";
                break;
        }

        viewHolder.timestamp.setText(itemTimeStamp.get(position));
        viewHolder.gps.setText(itemGps.get(position));
        viewHolder.dimensions.setText(String.format("%s*%s", itemWidth.get(position), itemHeight.get(position)));
        viewHolder.count.setText(itemCount.get(position));
        viewHolder.status.setText(status_text);
        viewHolder.progressBar.setProgress(Integer.parseInt(itemStatus.get(position)));

        return convertView;
    }

    static class ViewHolder{
        TextView timestamp;
        TextView gps;
        TextView count;
        TextView dimensions;
        TextView status;
        ProgressBar progressBar;
    }
}
