<?php
header('Content-Type:application/json;charset=UTF-8');

$type=$_GET['type'];/*[]()*/
$conn=mysqli_connect('127.0.0.1','root','','exchange');

//SQL1
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
//SQL2
$sql="SELECT cid,img,adver,guide,seat,price,type from schange WHERE type='$type'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_array($result);
var_dump($row);

$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($list);

