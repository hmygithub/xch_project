SET NAMES UTF8;
DROP DATABASE IF EXISTS jd;
CREATE DATABASE jd CHARSET=UTF8;
USE jd;

CREATE TABLE product (
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(32),
  price FLOAT(10,2),  #99999999.99
  pic VARCHAR(64),
  birthday BIGINT
);
INSERT INTO product VALUES(
  NULL,'可口可乐', '3.50','img/1.jpg','12133242432343'
);
INSERT INTO product VALUES(
  NULL,'百事可乐', '3.60','img/2.jpg','14233242432344'
);
INSERT INTO product VALUES(
  NULL,'非常可乐', '3.70','img/3.jpg','16333242432345'
);
INSERT INTO product VALUES(
  NULL,'冰红茶', '3.70','img/3.jpg','16333242432345'
);
INSERT INTO product VALUES(
  NULL,'绿茶', '3.70','img/3.jpg','16333242432345'
);
INSERT INTO product VALUES(
  NULL,'茉莉花茶', '3.70','img/3.jpg','16333242432345'
);
INSERT INTO product VALUES(
  NULL,'茉莉蜜茶', '3.70','img/3.jpg','16333242432345'
);
INSERT INTO product VALUES(
  NULL,'茉莉花', '3.70','img/3.jpg','16333242432345'
);
INSERT INTO product VALUES(
  NULL,'阿萨姆奶茶', '3.70','img/3.jpg','16333242432345'
);
INSERT INTO product VALUES(
  NULL,'香飘飘奶茶', '3.70','img/3.jpg','16333242432345'
);
INSERT INTO product VALUES(
  NULL,'农夫奶茶', '3.70','img/3.jpg','16333242432345'
);
INSERT INTO product VALUES(
  NULL,'珍珠奶茶', '3.70','img/3.jpg','16333242432345'
);
INSERT INTO product VALUES(
  NULL,'纯甄酸奶', '3.70','img/3.jpg','16333242432345'
);
INSERT INTO product VALUES(
  NULL,'蒙牛奶', '3.70','img/3.jpg','16333242432345'
);
SELECT * FROM product;