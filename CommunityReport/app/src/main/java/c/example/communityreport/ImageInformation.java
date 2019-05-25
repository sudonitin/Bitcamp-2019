package c.example.communityreport;



public class ImageInformation {
    public String DownloadUrl;
    public String GPS_Coordinates;
    public String Timestamp;
    public int Status;
    public float hangle;
    public float vangle;
    public float RealArea;
    public float RealWidth;
    public float RealHeight;
    public float FrameHeight;
    public float FrameWidth;
    public int NumberOfPotholes;
    public float PotholeHeight;
    public float PotholeWidth;


    public ImageInformation(){

    }

    public ImageInformation(String downloadUrl, String gps, String timestamp, float hangle, float vangle) {
        this.DownloadUrl = downloadUrl;
        this.GPS_Coordinates = gps;
        this.Timestamp = timestamp;
        this.Status = 10;
        this.hangle = hangle;
        this.vangle = vangle;
        this.RealArea = 0;
        this.RealWidth = 0;
        this.RealHeight = 0;
        this.FrameHeight = 0;
        this.FrameWidth = 0;
        this.NumberOfPotholes = 0;
        this.PotholeHeight = 0;
        this.PotholeWidth = 0;
    }

}
