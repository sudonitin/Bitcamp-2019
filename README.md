<h1>Bitcamp-2019</h1>
<i>Won the most innovative solution at Bitcamp 2019.</i>

An android application for citizens(users) which allows them to register issues on potholes in their area.<br>
Web for report management
<br>
<h3>Usage Flow:</h3>
<ul>
  <li>User clicks a photo of the pothole and registers a new issue.</li>
  <li>The photo gets uploaded on the firebase database along with other information like GPS co-ordinates.</li>
  <li>The image is downloaded in the server and served in the pothole detection script.</li>
  <li>If pothole is detected an estimated area is calculated, id no pothole is detected user's issue gets rejected.</li>
  <li>After successful detection details are uploaded on the web for administrator, these issue are forwarded to govt. officials.</li>
  <li>Once the officials claim that they have fixed the pothole, the user gets a notification and they can close their issue if pothole is fixed</li>
</ul>

<h3>Technology Stack:</h3>
<ul>
  <li>OpenCV</li>
  <li>Android Studio</li>
  <li>YOLOV2 Algorithm</li>
  <li>Tensorflow lib</li>
  <li>Firebase</li>
  <li>Front End stack(HTML5, CSS3, Bootstrap 4, jQuery)</li>
</ul>
