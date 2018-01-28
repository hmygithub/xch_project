<?php
header('Content-Type:text/html');

$kw=$_REQUEST['kw'];
if(empty($kw)){
    echo '[]';
    return;
}

$conn=mysqli_connect('127.0.0.1','root','','keyWord');
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql="SELECT view,hotel FROM destination WHERE dest LIKE '%$kw%' OR view LIKE '%$kw%' OR hotel LIKE '%$kw%'";
$result=mysqli_query($conn,$sql);

while(true){
    $row=mysqli_fetch_assoc($result);
    if(!$row){
        break;
    }
    $list=mysqli_fetch_all($result);
	
    for($i=0;$i<count($list);$i++){
        $dest=$list[$i][0];
        echo "<li>$dest</li>";
    }
 }


