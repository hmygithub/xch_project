SET NAMES UTF8;
DROP DATABASE IF EXISTS rentcar;
CREATE DATABASE rentcar CHARSET=UTF8;
use rentcar;

CREATE TABLE rent(
	cid INT PRIMARY KEY auto_increment,
	img VARCHAR(64),
	city VARCHAR(32),
	guide VARCHAR(32),
	price INT,
	type VARCHAR(32)
);
INSERT INTO rent VALUES(NULL,'Images/rentcar/Chevrolet_Aveo.jpg','美国洛杉矶','自驾梦幻1号公路',142,'小型轿车'),
	(NULL,'Images/rentcar/Toyota_Yaris.jpg','加拿大温哥华','环游如画温哥华岛',163,'小型轿车'),
	(NULL,'Images/rentcar/Versa.jpg','澳大利亚墨尔本','大洋路绝美海岸线',189,'小型轿车'),
	(NULL,'Images/rentcar/VW_Polo.jpg','德国慕尼黑','啤酒之城驾车狂欢',189,'小型轿车'),

	(NULL,'Images/rentcar/Toyota_Corolla.jpg','美国旧金山','自驾梦幻1号公路',163,'中型轿车'),
	(NULL,'Images/rentcar/Renault_twingo.jpg','法国巴黎','行驶于最浪漫城市',219,'中型轿车'),
	(NULL,'Images/rentcar/Opel_Astra.jpg','西班牙巴塞罗纳','驾车穿梭童话之城',139,'中型轿车'),
	(NULL,'Images/rentcar/VW_Golf.jpg','意大利罗马','文艺之都不可错过',320,'中型轿车'),

	(NULL,'Images/rentcar/VW_Passat_Variant (1).jpg','德国法兰克福','自家莱茵河畔城堡间',240,'大型轿车'),
	(NULL,'Images/rentcar/Toyota_Camry (1).jpg','美国洛杉矶','自驾梦幻一号公路',228,'大型轿车'),
	(NULL,'Images/rentcar/Holden_Commodore (1).jpg','澳大利亚墨尔本','大洋路绝美海岸线',249,'大型轿车'),
	(NULL,'Images/rentcar/Opel_Insignia.jpg','英国伦敦','驾车穿梭古老都市',365,'大型轿车'),

	(NULL,'Images/rentcar/Chrysler_300c(1).jpg','加拿大温哥华','环游如画温哥华岛',272,'高档轿车'),
	(NULL,'Images/rentcar/Buick_Lacrosse(1).jpg','美国拉斯维加斯','豪车穿梭华丽赌城',319,'高档轿车'),
	(NULL,'Images/rentcar/Holden_SV6(1).jpg','澳大利亚悉尼','南半球风光始于此',301,'高档轿车'),
	(NULL,'Images/rentcar/Toyota_Camry(1).jpg','泰国普吉岛','低价体验海岛自驾',393,'高档轿车'),
	

	(NULL,'Images/rentcar/Dacia_Sandero.jpg','澳大利亚悉尼','南半球风光始于此',264,'中型SUV'),
	(NULL,'Images/rentcar/Toyota_Rav4.jpg','美国洛杉矶','自驾梦幻一号公路',249,'中型SUV'),
	(NULL,'Images/rentcar/grp-p-intermed-4wd-toyota-rav4.jpg','新西兰惠灵顿','北岛环线毛利风情',428,'中型SUV'),
	(NULL,'Images/rentcar/Toyota_Rav4(1).jpg','美国芝加哥','穿越传奇66号公路',361,'中型SUV'),
	

	(NULL,'Images/rentcar/Honda_CRV.jpg','泰国曼谷','不一样的城市环游',396,'标准SUV'),
	(NULL,'Images/rentcar/Ford_Explorer.jpg','加拿大卡尔加里','驰骋壮美冰原大道',346,'标准SUV'),
	(NULL,'Images/rentcar/Nissan_Qashqai_fr.jpg','法国尼斯','一路开向蔚蓝海岸',459,'标准SUV'),
	(NULL,'Images/rentcar/Honda_CRV(1).jpg','泰国普吉岛','低价体验海岛自驾',395,'标准SUV'),
	
	(NULL,'Images/rentcar/grp-w-large-4wd-toyota-prado.jpg','新西兰惠灵顿','北岛环线毛利风情',670,'全尺寸SUV'),
	(NULL,'Images/rentcar/Chevrolet_Tahoe.jpg','美国洛杉矶','自驾梦幻一号公路',355,'全尺寸SUV'),
	(NULL,'Images/rentcar/Chevrolet_Suburban.jpg','加拿大温哥华','环游如画温哥华岛',516,'全尺寸SUV'),
	(NULL,'Images/rentcar/Jeep_Commander.jpg','美国芝加哥','穿越传奇66号公路',458,'全尺寸SUV');




select * from rent;