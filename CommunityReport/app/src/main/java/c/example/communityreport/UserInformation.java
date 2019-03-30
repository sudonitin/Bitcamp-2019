package c.example.communityreport;

public class UserInformation {

    public String fullname;
    public String address;
    public String phone;
    public int credits;

    public UserInformation(){

    }

    public UserInformation(String fullname, String address, String phone) {
        this.fullname = fullname;
        this.address = address;
        this.phone = phone;
        this.credits = 0;
    }
}
