var status = 60;
if (status > 60) {
	function addRow() {
	$("#t_body").append("<tr><td>"+i+"</td><td>"+t_stamp+"</td><td><a href="+d_url+">"+text+"</a></td><td>"+gps+
				                "</td><td>"+rh+"</td><td>"+rw+
				                "</td><td id='td"+i+"'></td><td><center><input type='button' onclick='alert("+JSON.stringify(key)+")' id='first"+i+"' class='btn btn-primary'>&nbsp<input type='button' class='btn btn-primary'  id='second"+i+"' data-toggle='modal' data-target='#myModal' onclick='rowdata("+i+")'>&nbsp<input type='button' id='third"+i+"' class='btn btn-primary'></center></td></tr>");
	}

	addRow();
	
}
  
