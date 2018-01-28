<?php
/**接受客户端提交的汽车类别，名称，图片，价格等**/
header('Content-Type:application/json;charset=UTF-8');

$type=$_GET['type'];
$conn=mysqli_connect('127.0.0.1','root','','rentcar');

//SQL1
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
//SQL2
$sql="SELECT cid,img,city,guide,price FROM rent WHERE type='$type'";
$result=mysqli_query($conn,$sql);
/*$row=mysqli_fetch_array($result);
var_dump($row);*/
//读取查询到的所有记录
$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
//以JSON格式输出
echo json_encode($list);
