<?php
/**��ͻ��������Ʊ��Ϣ�б�**/
header('Content-Type: application/json;charset=UTF-8');

//���տͻ����ύ������

//�������ݿ�
$conn = mysqli_connect('127.0.0.1', 'root','','exchange');

//�ύSQL
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);
$sql = "SELECT * FROM fun";
$result = mysqli_query($conn, $sql);

//$row=mysqli_fetch_assoc($result);

//��ȡ���еĸ����Ƶ���Ϣ��¼
$flist = mysqli_fetch_all($result, MYSQLI_ASSOC);

//����Ʒ�������ΪJSON�ַ��������
echo json_encode($flist);