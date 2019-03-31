<?php include('server.php'); ?>
<html>
<head>
  <title>Login Page</title>
  <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body style="background-image:linear-gradient(to bottom,rgb(222,57,246),rgb(91,200,221))">

  <div class="loginbox">
        <h1>Login</h1>
        <form action="" method="post">
            <input type="text" placeholder="Username" id="username" name="username" required="required">
            <input type="password" placeholder="Password" id="password" name="password" required="required">
            <input type="submit" name="login" value="Login" onclick="display_errors()">
        </form>
        
    </div>


</body>
</html>