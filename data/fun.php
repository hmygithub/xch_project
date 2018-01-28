<?php
/**向客户端输出门票信息列表**/
header('Content-Type: application/json;charset=UTF-8');

//接收客户端提交的数据

//连接数据库
$conn = mysqli_connect('127.0.0.1', 'root','','exchange');

//提交SQL
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);
$sql = "SELECT * FROM fun";
$result = mysqli_query($conn, $sql);

//$row=mysqli_fetch_assoc($result);

//读取所有的附近酒店信息记录
$flist = mysqli_fetch_all($result, MYSQLI_ASSOC);

//把商品数组编码为JSON字符串并输出
echo json_encode($flist);