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
INSERT INTO hotel VALUES(NULL,'Images/overhotel/singapore.jpg','新加坡',1633,70,'热门城市'),
(NULL,'Images/overhotel/seoul.jpg','首尔',4253,62,'热门城市'),
(NULL,'Images/overhotel/bangkok.jpg','曼谷',5508,18,'热门城市'),
(NULL,'Images/overhotel/tokyo.jpg','东京',3562,121,'热门城市'),
(NULL,'Images/overhotel/kualalumpur.jpg','吉隆坡',2681,27,'热门城市'),
(NULL,'Images/overhotel/osaka.jpg','大阪',2938,44,'热门城市'),
(NULL,'Images/overhotel/singapore.jpg','新加坡',1633,70,'都市购物'),
(NULL,'Images/overhotel/seoul.jpg','首尔',4253,62,'都市购物'),
(NULL,'Images/overhotel/bangkok.jpg','曼谷',5508,18,'都市购物'),
(NULL,'Images/overhotel/tokyo.jpg','东京',3562,121,'都市购物'),
(NULL,'Images/overhotel/kualalumpur.jpg','吉隆坡',2681,27,'都市购物'),
(NULL,'Images/overhotel/paris192-3.jpg','巴黎',8596,237,'都市购物'),
(NULL,'Images/overhotel/phuket725-3.jpg','普吉岛',5680,28,'海岛休闲'),
(NULL,'Images/overhotel/bali723-3.jpg','巴厘岛',10444,53,'海岛休闲'),
(NULL,'Images/overhotel/kotakinabalu1393-3.jpg','哥打京',588,35,'海岛休闲'),
(NULL,'Images/overhotel/jeju737-3.jpg','济州岛',1658,75,'海岛休闲'),
(NULL,'Images/overhotel/langkawi1225-3.jpg','兰卡威',677,49,'海岛休闲'),
(NULL,'Images/overhotel/bty_256x256.jpg','芭堤雅',3521,48,'海岛休闲'),
(NULL,'Images/overhotel/chiangmai623-3.jpg','清迈',2792,18,'旅游胜地'),
(NULL,'Images/overhotel/hochiminhcity301-3.jpg','胡志明市',2041,27,'旅游胜地'),
(NULL,'Images/overhotel/siemreap1369-3.jpg','米兰',1797,15,'旅游胜地'),
(NULL,'Images/overhotel/kyoto734-3.jpg','京都',1926,99,'旅游胜地'),
(NULL,'Images/overhotel/melbourne358-3.jpg','墨尔本',1427,137,'旅游胜地'),
(NULL,'Images/overhotel/msk_256x256.jpg','莫斯科',4114,67,'旅游胜地');


	