<?php
header('Content-Type:application/json;charset=UTF-8');

$guide=$_GET['guide'];/*[]()*/
$conn=mysqli_connect('127.0.0.1','root','','overhotel');

//SQL1
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
//SQL2
$sql="SELECT hid,img,city,count,price,guide from hotel WHERE guide='$guide'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_array($result);
var_dump($row);

$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($list);

