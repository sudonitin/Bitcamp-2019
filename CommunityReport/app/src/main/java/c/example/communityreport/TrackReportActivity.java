package c.example.communityreport;

import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.Toast;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.StorageReference;

import java.util.ArrayList;

public class TrackReportActivity extends AppCompatActivity {

    private ListView listView;
    ImageView back;

    ImageInformation childValue;

    //Firebase vairables
    FirebaseAuth firebaseAuth;
    StorageReference storageReference;
    DatabaseReference databaseReference;
    FirebaseUser firebaseUser;

    //Firebase items
    ArrayList<String> itemData;
    ArrayList<String> itemGps;
    ArrayList<String> itemWidth;
    ArrayList<String> itemHeight;
    ArrayList<String> itemTimeStamp;
    ArrayList<String> itemStatus;
    ArrayList<String> itemCount;

    //Dialog Items
    ArrayList<String> dialogdetails;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_track_report);

        back = findViewById(R.id.backreport);

        listView =  findViewById(R.id.reportlist);
        //initializing pothole details array list
        itemData = new ArrayList<String>();
        itemGps = new ArrayList<String>();
        itemCount = new ArrayList<String>();
        itemHeight = new ArrayList<String>();
        itemTimeStamp = new ArrayList<String>();
        itemStatus = new ArrayList<String>();
        itemWidth = new ArrayList<String>();

        firebaseAuth = FirebaseAuth.getInstance();
        databaseReference = FirebaseDatabase.getInstance().getReference();
        firebaseUser = firebaseAuth.getCurrentUser();
        storageReference = FirebaseStorage.getInstance().getReference();

        //firebase data retrieval
        databaseReference.child("Pothole_Reports").child(firebaseUser.getUid()).addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                Iterable<DataSnapshot> children = dataSnapshot.getChildren();

                for (DataSnapshot child : children) {
                    childValue = child.getValue(ImageInformation.class);
                    itemCount.add(String.valueOf(childValue.NumberOfPotholes));
                    itemGps.add(childValue.GPS_Coordinates);
                    itemStatus.add(String.valueOf(childValue.Status));
                    itemHeight.add(String.valueOf(childValue.RealHeight));
                    itemWidth.add(String.valueOf(childValue.RealWidth));
                    itemTimeStamp.add(childValue.Timestamp);
                }

                createListView();
            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {

            }
        });

        createListView();

        back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
                startActivity(new Intent(TrackReportActivity.this, HomeActivity.class));
            }
        });

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                dialogdetails = new ArrayList<String>();
                dialogdetails.add(itemTimeStamp.get(position));
                dialogdetails.add(itemGps.get(position));
                dialogdetails.add(Float.toString(Float.parseFloat(itemHeight.get(position))*Float.parseFloat(itemWidth.get(position))));
                dialogdetails.add(itemStatus.get(position));
                openDialog(dialogdetails);
            }
        });
    }

    public void openDialog(ArrayList<String> dialogdetails) {
        PotholeReportDialog potholeReportDialog = new PotholeReportDialog();
        Bundle bundle = new Bundle();
        bundle.putStringArrayList("key", dialogdetails);
        potholeReportDialog.setArguments(bundle);
        potholeReportDialog.show(getSupportFragmentManager(), "Show Report");
    }

    private void createListView(){
        ReportStatusAdapter myAdapter = new ReportStatusAdapter(this, itemTimeStamp, itemGps, itemStatus, itemCount, itemWidth, itemHeight);
        listView.setAdapter(myAdapter);
    }
}
