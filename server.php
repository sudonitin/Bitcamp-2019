<?php
session_start();
$db=mysqli_connect('localhost','root','','bitcamp');
echo '<script> var err=[];</script>';
if(isset($_POST['login']))
{
    $username=mysqli_real_escape_string($db,$_POST['username']);
    $password1=mysqli_real_escape_string($db,$_POST['password']);
    $password=md5($password1);
    $data="SELECT * FROM admin WHERE username='$username' AND password='$password1'";
    $result=mysqli_query($db,$data);
    echo mysqli_num_rows($result)==1;
    if(mysqli_num_rows($result)==1)
    {
        $row=mysqli_fetch_array($result,MYSQLI_NUM);
        header('location:ui/pages/officialsPage.html');
        echo '<script>alert("successfully logged in");</script>';
    }
    else
    {
        $invalid = "invalid username/password";
        echo '<script>alert("Invalid username/password");</script>';
    }
}
