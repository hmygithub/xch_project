SET NAMES UTF8;
USE exchange;

create table xch_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32)
);
INSERT INTO xch_user VALUES(NULL,'xiaohu','666666'),
(NULL,'xiaohuang','888888'),
(NULL,'xiaoliu','000000'),
(NULL,'xiaowang','111111');
