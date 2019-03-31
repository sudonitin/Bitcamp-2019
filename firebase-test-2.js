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
//console.log(mainApp.name);
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

var i = 1;

fireDatabase.ref("Pothole_Reports/").once('value', function(snapshot){
	snapshot.forEach(function(childSnapshot){
		//console.log(childSnapshot.key);
		//users.push(childSnapshot.key);
		//console.log(users[count++]);
		childSnapshot.forEach(function(child_childSnapshot){
			//photos.push(child_childSnapshot.key);
			if(child_childSnapshot.val().Status>=50){ 
				//console.log(child_childSnapshot.val().Status+" "+childSnapshot.key+" "+child_childSnapshot.key+" "+child_childSnapshot.val().GPS_Coordinates+" "+child_childSnapshot.val().RealArea);

				$("#t_body").append("<tr id="+i+"row><td>"+i+"</td><td id="+i+"stat>"+child_childSnapshot.val().Status+"</td><td id = "+i+"time>"+child_childSnapshot.key+"</td><td id="+i+"loc>"+child_childSnapshot.val().GPS_Coordinates+"</td><td id = "+i+"area>"+child_childSnapshot.val().RealArea+"</td><td><select id='"+i+"drop'><option value='sahun5774@gmail.com'>sahun5774@gmail.com</option><option value='rugvedpk2@gmail.com'>rugvedpk2@gmail.com</option><option value='santiagoreha.r@gmail.com'>santiagoreha.r@gmail.com</option><option value='anantthegreat9@gmail.com'>anantthegreat9@gmail.com</option></select></td><td scope='col'><input id = "+i+ '-eng' + " onclick='mail("+i+");' class='btn btn-primary' type='button' name='engineer' value='engg' data-toggle='modal' data-target='#exampleModal'></td><td scope='col'><input id = "+i+'-user'+" class='btn btn-primary' type='button' name='user' value='user' data-toggle='modal' data-target='#UserModal'></td></tr>");

				//$("#modal-forms").append("<div class='modal fade' id='EnggModal' tabindex='-1' role='dialog' aria-labelledby='EnggModalLabel' aria-hidden='true'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' class='exampleModalLabel'>Send Email to Engineer</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'><form><table><tr><td>Email:</td><td><input class='form-control' type='email' id='address' name='email'></td></tr><tr><td>Details:<p class='row_data'>"+child_childSnapshot.val().Status+"<br>"+childSnapshot.key+"<br>"+child_childSnapshot.key+"<br>"+child_childSnapshot.val().GPS_Coordinates+"<br>"+child_childSnapshot.val().RealArea +"</p></td></tr></table></form></div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button><button type='button' id='submit"+i+"' class='btn btn-primary'>Send</button></div></div></div></div>");
				hide(i);
				i += 1;
				
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