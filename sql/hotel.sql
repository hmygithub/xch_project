SET NAMES UTF8;
DROP DATABASE IF  EXISTS overhotel;
CREATE DATABASE overhotel CHARSET=UTF8;
USE overhotel;

CREATE TABLE hotel(
	hid INT PRIMARY KEY auto_increment,
	img VARCHAR(128),
	city VARCHAR(32),
	count INT,
	price INT,
	guide VARCHAR(32)
);
INSERT INTO hotel VALUES(NULL,'Images/overhotel/singapore.jpg','�¼���',1633,70,'���ų���'),
(NULL,'Images/overhotel/seoul.jpg','�׶�',4253,62,'���ų���'),
(NULL,'Images/overhotel/bangkok.jpg','����',5508,18,'���ų���'),
(NULL,'Images/overhotel/tokyo.jpg','����',3562,121,'���ų���'),
(NULL,'Images/overhotel/kualalumpur.jpg','��¡��',2681,27,'���ų���'),
(NULL,'Images/overhotel/osaka.jpg','����',2938,44,'���ų���'),
(NULL,'Images/overhotel/singapore.jpg','�¼���',1633,70,'���й���'),
(NULL,'Images/overhotel/seoul.jpg','�׶�',4253,62,'���й���'),
(NULL,'Images/overhotel/bangkok.jpg','����',5508,18,'���й���'),
(NULL,'Images/overhotel/tokyo.jpg','����',3562,121,'���й���'),
(NULL,'Images/overhotel/kualalumpur.jpg','��¡��',2681,27,'���й���'),
(NULL,'Images/overhotel/paris192-3.jpg','����',8596,237,'���й���'),
(NULL,'Images/overhotel/phuket725-3.jpg','�ռ���',5680,28,'��������'),
(NULL,'Images/overhotel/bali723-3.jpg','���嵺',10444,53,'��������'),
(NULL,'Images/overhotel/kotakinabalu1393-3.jpg','���',588,35,'��������'),
(NULL,'Images/overhotel/jeju737-3.jpg','���ݵ�',1658,75,'��������'),
(NULL,'Images/overhotel/langkawi1225-3.jpg','������',677,49,'��������'),
(NULL,'Images/overhotel/bty_256x256.jpg','�ŵ���',3521,48,'��������'),
(NULL,'Images/overhotel/chiangmai623-3.jpg','����',2792,18,'����ʤ��'),
(NULL,'Images/overhotel/hochiminhcity301-3.jpg','��־����',2041,27,'����ʤ��'),
(NULL,'Images/overhotel/siemreap1369-3.jpg','����',1797,15,'����ʤ��'),
(NULL,'Images/overhotel/kyoto734-3.jpg','����',1926,99,'����ʤ��'),
(NULL,'Images/overhotel/melbourne358-3.jpg','ī����',1427,137,'����ʤ��'),
(NULL,'Images/overhotel/msk_256x256.jpg','Ī˹��',4114,67,'����ʤ��');


	