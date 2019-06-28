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

function mail(i){
			var status = document.getElementById(i+'stat').innerHTML;
			var time = document.getElementById(i+'time').innerHTML;
			var location = document.getElementById(i+'loc').innerHTML;
			var area = document.getElementById(i+'area').innerHTML;
			var email = document.getElementById(i+'drop').value;
			//var photo = document.getElementById(i+'stat');
			console.log(location);
			if(status == 50){
				Email.send({
				Host : "smtp.gmail.com",
				Port : 587,
				SMTPAuth : true,
				SMTPSecure : 'tls',
				Username : "phpmailer7.0@gmail.com",
				Password : "mailing is a good thing",
				To : email,
				From : "phpmailer7.0@gmail.com",
				Subject : "You have to work according to the details mentioned",
				Body : "The location is " + location + ". This was reported on " + time + ". The estimated area of the pothole is " + area + "."
		}).then(
			message => alert(message)
		);
			
			}
			else{
				alert('unsuccessful')
			}
		}

function test(childSnapshot, child_childSnapshot){
	fireDatabase.ref("Pothole_Reports/").child(childSnapshot).child(child_childSnapshot).update({"Status":70});
}

function popup(childSnapshot, child_childSnapshot){
	if(confirm("Do you want to submit this report?")){
		fireDatabase.ref("Pothole_Reports/").child(childSnapshot).child(child_childSnapshot).update({"Status":80});
		fireDatabase.ref("Users/"+childSnapshot).once('value', function(snapshot){
		var userCredits = snapshot.val().credits;	
		//console.log(userCredits);
		userCredits += 20;
		fireDatabase.ref("Users/").child(childSnapshot).update({"credits":userCredits});
		location.reload();
	});
		
	}
}
var i = 1;

fireDatabase.ref("Pothole_Reports/").once('value', function(snapshot){
	snapshot.forEach(function(childSnapshot){
		//console.log(childSnapshot.key);
		//users.push(childSnapshot.key);
		//console.log(users[count++]);
		childSnapshot.forEach(function(child_childSnapshot){
			//photos.push(child_childSnapshot.key);
			if(child_childSnapshot.val().Status>=50 && child_childSnapshot.val().Status < 80){ 
				//console.log(child_childSnapshot.val().Status+" "+childSnapshot.key+" "+child_childSnapshot.key+" "+child_childSnapshot.val().GPS_Coordinates+" "+child_childSnapshot.val().RealArea);
				console.log(child_childSnapshot.key+" "+childSnapshot.key);
				$("#t_body").append("<tr id="+i+"row><td>"+i+"</td><td id="+i+"stat>"+child_childSnapshot.val().Status+"</td><td id = "+i+"time>"+child_childSnapshot.key+"</td><td id="+i+"loc>"+child_childSnapshot.val().GPS_Coordinates+"</td><td id = "+i+"area>"+child_childSnapshot.val().RealArea+"</td><td><select id='"+i+"drop'><option value='sahun5774@gmail.com'>sahun5774@gmail.com</option><option value='rugvedpk2@gmail.com'>rugvedpk2@gmail.com</option><option value='santiagoreha.r@gmail.com'>santiagoreha.r@gmail.com</option><option value='anantthegreat9@gmail.com'>anantthegreat9@gmail.com</option></select></td><td scope='col'><input id = "+i+ '-eng' + " onclick='mail("+i+");test("+JSON.stringify(childSnapshot.key)+"," +JSON.stringify(child_childSnapshot.key)+");' class='btn btn-primary' type='button' name='engineer' value='send' data-toggle='modal' data-target='#exampleModal'></td><td scope='col'><input id = "+i+'-user'+" onclick='popup("+JSON.stringify(childSnapshot.key)+"," +JSON.stringify(child_childSnapshot.key)+");' class='btn btn-primary' type='button' name='user' value='ack' data-toggle='modal' data-target='#UserModal'></td></tr>");

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
