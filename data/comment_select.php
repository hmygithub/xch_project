<?php
/**���ݿͻ����ύ��ҳ���ţ���ͻ��˷�ҳ��������б���JSON��ʽ��{ ... }**/
header('Content-Type: application/json;charset=UTF-8');

//���տͻ����ύ������
$pageNum = $_REQUEST['pageNum'];

/***��Ҫ��ͻ�������ķ�ҳ����****/
$pager = [
	'recordCount'=>0,	//�ܼ�¼��
	'pageSize'=>10,		//ҳ���С
	'pageCount'=>0,		//��ҳ��
	'pageNum'=>intval($pageNum),//��ǰҳ��
	'data'=>null
];
/*********************************/
//�������ݿ�
$conn = mysqli_connect('127.0.0.1', 'root','','exchange');

//SQL1�����ñ��뷽ʽ
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

//SQL2����ȡ�ܼ�¼������������ҳ��
$sql = "SELECT COUNT(cid) FROM comment";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
//if($row){
	// echo 'succ';
//}else{
	//echo 'no';
//}
$pager['recordCount'] = intval($row['COUNT(cid)']);//���ַ�������Ϊ����
$pager['pageCount'] = ceil(($pager['recordCount'])/($pager['pageSize']));  //������ҳ��

//SQL3����ȡ��ǰָ��ҳ�еļ�¼
$start = ($pager['pageNum']-1)*$pager['pageSize']; //����һ�п�ʼ��ȡ��¼
$count = $pager['pageSize']; //��ȡ������
$sql = "SELECT * FROM comment LIMIT $start,$count";
$result = mysqli_query($conn, $sql);

//��ȡ���еĲ�Ʒ��¼
$pager['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);


//�ѷ�ҳ�������ΪJSON�ַ��������
echo json_encode($pager);
