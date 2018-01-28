<?php
/**向客户端输出产品列表**/
header('Content-Type: application/json;charset=UTF-8');

//接收客户端提交的数据

//连接数据库
include('0_config.php'); //包含指定文件的内容在当前位置
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);

//提交SQL
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);
$sql = "SELECT * FROM comment";
$result = mysqli_query($conn, $sql);
$row=mysqli_fetch_assoc($result);

//读取所有的评论记录
$clist = mysqli_fetch_all($result, MYSQLI_ASSOC);

//把商品数组编码为JSON字符串并输出
echo json_encode($clist);
