//<script src="https://www.gstatic.com/firebasejs/5.9.2/firebase.js"></script>
//<script src="https://www.gstatic.com/firebasejs/5.9.2/firebase-app.js"></script>

var config = {
    apiKey: "AIzaSyAfth_mmAGWTMTxxG_2-DWgV_qIHwJsqSs",
    authDomain: "communityreport-2a88c.firebaseapp.com",
    databaseURL: "https://communityreport-2a88c.firebaseio.com",
    projectId: "communityreport-2a88c",
    storageBucket: "communityreport-2a88c.appspot.com",
    messagingSenderId: "1024313734913"
  };
//firebase.initializeApp(config);

var mainApp=firebase.initializeApp(config);
console.log(mainApp.name);
var fireDatabase=firebase.database();

//code sample for read
/*
fireDatabase.ref("Pothole_Reports/dAvBxyWOA8ehDQGPVR9ONWtsSb23/20190330_153031/").child("Status").on('value', function(snapshot){
	console.log(snapshot.val());
});
*/
//code sample for update
statusData={"Status":60};
fireDatabase.ref("Pothole_Reports/dAvBxyWOA8ehDQGPVR9ONWtsSb23/20190330_153031/").update(statusData);