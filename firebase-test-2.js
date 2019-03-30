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

var databaseTree;
/*
fireDatabase.ref("Pothole_Reports/").on('value', function(snapshot){
	//console.log(snapshot.val());
	//databaseTree=JSON.parse(snapshot.val());
	//console.log(databaseTree[0]);
	snapshot.forEach(function(childSnapshot){
		console.log(childSnapshot.key);
		childSnapshot.forEach(function(child_oneSnapshot){
		
			//console.log(child_oneSnapshot.val());
		});
		//console.log(childSnapshot.val());
	});
	console.log(snapshot.key);
});
*/
//console.log(fireDatabase.ref("Pothole_Reports/"));

//firebase call is asyncrhonous in nature
var users=[];
var photos=[];
var count=0;
var keyValue=new Object;

fireDatabase.ref("Pothole_Reports/").once('value', function(snapshot){
	snapshot.forEach(function(childSnapshot){
		//console.log(childSnapshot.key);
		users.push(childSnapshot.key);
		console.log(users[count++]);
		childSnapshot.forEach(function(child_childSnapshot){
			photos.push(child_childSnapshot.key);
			if(child_childSnapshot.val().Status>=50){ 
				console.log(child_childSnapshot.val().Status+" "+childSnapshot.key+" "+child_childSnapshot.key);
			}
				
		});
		//console.log(users[0]);
	});
});
/*
var photos=[];
var count=0;
for(var i=0; i<users.length; i++){
	firebase.ref("Pothole_Reports/"+users[i]).once('value', function(snapshot){
			photos.push(snapshot.key);
			console.log(photos[count++]);
		});

}
*/
//console.log(photos[1]);
//document.getElementById("special-id1").innerHTML=photos[0];
