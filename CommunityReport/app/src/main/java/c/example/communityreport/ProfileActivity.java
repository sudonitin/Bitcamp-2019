package c.example.communityreport;

import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class ProfileActivity extends AppCompatActivity implements View.OnClickListener{

    private Button buttonSave;
    private EditText editTextUserFullName;
    private EditText editTextUserAddress;
    private EditText editTextUserPhone;

    private FirebaseAuth firebaseAuth;
    private DatabaseReference databaseReference;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);

        firebaseAuth = FirebaseAuth.getInstance();
        databaseReference = FirebaseDatabase.getInstance().getReference();

        buttonSave = (Button) findViewById(R.id.buttonSave);
        editTextUserFullName = (EditText) findViewById(R.id.UserFullName);
        editTextUserAddress = (EditText) findViewById(R.id.UserAddress);
        editTextUserPhone = (EditText) findViewById(R.id.UserPhone);

        databaseReference.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                FirebaseUser user = firebaseAuth.getCurrentUser();
                if(user != null) {
                    if (dataSnapshot.child("Users").hasChild(user.getUid())){
                        finish();
                        startActivity(new Intent(getApplicationContext(), HomeActivity.class));
                    }
                }
            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {

            }
        });

        buttonSave.setOnClickListener(this);
    }

    private void saveUserInfo(){

        String fullname = editTextUserFullName.getText().toString().trim();
        String address = editTextUserAddress.getText().toString().trim();
        String phone = editTextUserPhone.getText().toString().trim();

        UserInformation userInformation = new UserInformation(fullname,address,phone);

        FirebaseUser user = firebaseAuth.getCurrentUser();

        if(user == null){
            finish();
            startActivity(new Intent(this, LoginActivity.class));
        }
        else {
            databaseReference.child("Users").child(user.getUid()).setValue(userInformation);
            Toast.makeText(this, "Information Saved", Toast.LENGTH_SHORT).show();
            finish();
            startActivity(new Intent(this, HomeActivity.class));
        }

    }

    @Override
    public void onClick(View v) {
        if(v == buttonSave){
            saveUserInfo();
        }

    }
}
