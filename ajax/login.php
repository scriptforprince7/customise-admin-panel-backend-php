<?php
sleep(1);
include('../db/config.php');


$email_id=$_POST['email_id'];
$password=$_POST['password'];


$query=mysqli_query($conn,"select * from tbl_login where email_id='$email_id' and password='".md5($password)."' and is_active=1");

$record=mysqli_fetch_array($query);
$login_user=mysqli_fetch_array(mysqli_query($conn,"select * from tbl_login_type where login_type_id=".$record['login_type'].""));

$count=mysqli_num_rows($query);

if($count==1)
{
	$_SESSION['email_id']=$record['email_id'];
	$_SESSION['username']=$record['username'];
	$_SESSION['designation']=$login_user['login_type_name'];
	$attr=array('status'=>'success','msg'=>'Login Successfull !');
}
else
{
	$attr=array('status'=>'error','msg'=>'Enter a valid Email ID or Password');
	
}


echo json_encode($attr);
