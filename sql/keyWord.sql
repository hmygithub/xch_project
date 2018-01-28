SET NAMES UTF8;
DROP DATABASE IF EXISTS keyWord;
CREATE DATABASE keyWord CHARSET=UTF8;
USE keyWord;

CREATE TABLE destination(
  id INT PRIMARY KEY AUTO_INCREMENT,
  dest VARCHAR(8),
  view VARCHAR(32),
  hotel VARCHAR(32)
);
INSERT INTO destination VALUES(NULL,'南京','南京中山陵','南京汉庭酒店'),
(NULL,'南京','南京夫子庙秦淮河','南京格林豪泰酒店'),
(NULL,'南京','南京总统府','南京七天连锁酒店'),
(NULL,'南京','南京玄武湖','南京如家酒店'),
(NULL,'南京','南京明孝陵','南京桔子酒店'),
(NULL,'南京','南京鸡鸣寺','南京威斯汀大酒店'),
(NULL,'南京','南京博物院','南京快捷酒店'),

(NULL,'苏州','苏州拙政园','苏州汉庭酒店'),
(NULL,'苏州','苏州博物馆','苏州格林豪泰酒店'),
(NULL,'苏州','苏州周庄','苏州如家酒店'),
(NULL,'苏州','苏州狮子林','苏州桔子酒店'),
(NULL,'苏州','苏州同里古镇','苏州威斯汀大酒店'),
(NULL,'苏州','苏州虎丘','苏州七天连锁酒店'),
(NULL,'苏州','苏州留园','苏州快捷酒店'),
(NULL,'苏州','苏州山塘街','苏州锦江之星'),

(NULL,'上海','上海城隍庙','上海锦江之星'),
(NULL,'上海','上海外滩','上海外滩花园酒店'),
(NULL,'上海','上海陆家嘴','上海格林豪泰酒店'),
(NULL,'上海','上海崇明岛','上海如家酒店'),
(NULL,'上海','上海田子坊','上海汉庭酒店')