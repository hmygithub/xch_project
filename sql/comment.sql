SET NAMES UTF8;
USE exchange;

create table comment(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	core VARCHAR(128),
	img VARCHAR(128),
	mark VARCHAR(8),
	content VARCHAR(256),
	phone VARCHAR(32),
	time VARCHAR(32)
);
insert into comment VALUES(NULL,'还是蛮灵的','Images/ticket/tr-05.png','5分','还是蛮灵的啊 就是吃饭不咋地啊 玩得很好 以后有机会再带娃们过来玩一玩 小孩子会很喜欢','*******839 ','2016-10-30 21:20'),
(NULL,'值得一去，上海迪斯尼 ','Images/ticket/tr-05.png',' 5分','值得一去，进门很远，走了很多路，但还是蛮好玩的、人多，玩了五个左右项目，吃了一顿汉堡餐，蛮好吃的！总的来说，还是可圈可点的。','*******996','2016-10-31 18:44'),
(NULL,'好玩但很累','Images/ticket/tr-05.png','5分','东西还可以，就是基本都要排队，好心累！园内东西都好贵的，味道一般，不值得花得那份钱','******819','2016-10-31 18:26'),
(NULL,'方便快捷','Images/ticket/tr-05.png','5分','虽然累但是很开心，除了一个项目排队久点，其他平均20分钟，一共玩了8个项目，可惜晚上天气不好，小孩不能等了，没看到烟花。','*******746','2016-10-31 17:53'),
(NULL,'创急速、加勒比海盗、飞跃地平线，三个玩一遍就很值了，就是排队排的比较久','Images/ticket/tr-05.png','5分','创急速、加勒比海盗、飞跃地平线，三个玩一遍就很值了，就是排队排的比较久，下次还会来','*******363',' 2016-10-31 15:16'),
(NULL,'上海迪士尼','Images/ticket/tr-05.png','5分','物超所值，门票贵有贵的道理，除了人太多以外没有其他槽点，一天刷完所有热门项目，tron和飞跃地平线强推，一进门就冲过去领fp，一会就发完了，只领到了两张，花车看得很激动，烟火很棒，完美！','*******193','2016-10-31 15:12'),
(NULL,'总体印象好。玩的开心。','Images/ticket/tr-05.png','5分','带亲戚一起去玩的，携程的票票好用，方便。乐园总体感觉挺好，假期人太多，排队有些长。假期票价太贵了，性价比有点低了。','******566','2016-10-31 14:57'),
(NULL,'123','Images/ticket/tr-04.png','4分','相当的ddssssdcghhhdssxuvvdbfsbbdshhdsbgsdbndsvvffgfddvgfdcvhdaghhfdshjgd。 ddvhf','******226','2016-10-31 14:55'),
(NULL,'迪士尼游园','Images/ticket/tr-04.png','4分','就这些跟儿子去集市你有缘的嗯原来以前对儿子的承诺嗯等级感受还是不错的嗯去旅行娱乐性的一姐姐的景观都是不错的嗯说的不如基础嗯就是里面的嗯票价和你面谈演艺界演习的价格有点高','******998','2016-10-31 14:47'),
(NULL,'就是个大卖场。','Images/ticket/tr-04.png','4分','园区内没有向导工作人员，商店太多，迪斯尼里还有卖ugg，人太多，应该控制票量，晚上的烟火没有固定观看区域，没有人维持秩序。','******699','2016-10-31 13:29'),
(NULL,'家属一日游','Images/ticket/tr-05.png','5分','订票方便，很顺利就进去了。迪斯很不错但是和心里预期还是有差距。可能是自己长大了。','*******216','2016-10-31 13:26'),
(NULL,'不错','Images/ticket/tr-05.png','5分','天气有点冷，项目挺多，适合小朋友玩的项目挺多，里面吃的东西很贵的，可以去小镇吃，虽然贵一点但是量还是蛮多的。一定要做好攻略，否则排队要很长时间。如果你是一个人，可以走单身通道，比正常排队的要省很多时间的','*******878','2016-10-31 12:45'),
(NULL,'主题乐园','Images/ticket/tr-05.png','5分','总体来说还是很不错的 游戏挺好玩的 特别是加勒比海盗和雷鸣山漂流 超给力的 其他的主题也很赞 主要是晚上的烟火秀简直不能再棒 20分钟 太漂亮了！值得一看','*******225',' 2016-10-31 12:34'),
(NULL,'挺好玩的','Images/ticket/tr-04.png','4分','开园那么久还是第一次去迪斯尼，一天时间差不多够了，里面的东西比较贵，但是很值得去一趟','*******048',' 2016-10-31 11:11'),
(NULL,'性价比超值的游玩必去之处','Images/ticket/tr-05.png','5分','当你踏进迪士尼大门的一刻，你已经走进一座童话世界里，你可以放下一切,去纯真的去享乐！','*******131','2016-10-31 10:59'),
(NULL,'比香港迪士尼大很多','Images/ticket/tr-04.png','4分','虽然园区大，但总感觉比香港迪士尼少了什么，很多细节和服务稍差些。硬件设施很好，物价还好。','*******970','2016-10-31 10:53'),
(NULL,'爱丽丝梦游仙境，','Images/ticket/tr-05.png','5分','迷宫真好玩，里面有趣的镜子，太搞笑了，呵呵呵呵呵呵呵呵呵呵呵呵，还有皇后，呵呵呵呵','*******534','2016-10-31 10:45'),
(NULL,'周末去的人真多','Images/ticket/tr-05.png','5分','早上7点出门，开车到达大概8点半左右，停车场离入口有一段距离(p6)，大概在8点50分到入口，9点开门，但已经排了好多人在安检这里了。然后大概排到9点20分左右才进去。带孩子的关系，第一个直奔小飞象，排了50分钟，还好后来找到了快速通行证的领取点，后面几个就省时间了。最大的感受是人多，但孩子喜欢，以后还会再带孩子来玩的!','*******970','2016-10-31 10:35'),
(NULL,'好','Images/ticket/tr-05.png','5分','总体来说还算可以，我们觉得挺好的，有一些网上的喷子说不好，并未觉得，可能是时间差吧，景点有所改变','*******800','2016-10-31 10:34'),
(NULL,'难忘','Images/ticket/tr-05.png','5分','这是一次很特别的旅行，是我一个人带着俩小孩去的，还不错，小孩子玩的很开心，希望下次还可以带他们去','*******548','2016-10-31 10:21'),
(NULL,'说走就走','Images/ticket/tr-05.png','5分','玩的项目还行，可能去的时候才开园不久，人很多，排队排好久，去的时候带二个小孩子去的，有很多项目没玩，下次有机会一定再去玩','*******548','2016-10-31 10:19'),
(NULL,'嗯嗯','Images/ticket/tr-04.png','4分','人多！！东西贵！！！！！！！！！！！！！！！！！！！！！！！','*******722','2016-10-31 09:12'),
(NULL,'里面环境什么都市很好的，就是玩项目排队比较长。','Images/ticket/tr-05.png','5分','里面环境什么都市很好的，就是玩项目排队比较长。进园那票先去预约热门的项目，然后再去排队玩其他的项目。','*******670','2016-10-31 09:12'),
(NULL,'还不错 带亲戚过去的','Images/ticket/tr-05.png','5分','还不错 在携程上买的 比较方便 带亲戚的小孩过去的 就是那天实在太热了 下午两点多就结束了','*******084','2016-10-31 00:13'),
(NULL,'惊喜连连迪士尼','Images/ticket/tr-05.png','5分','上海迪士尼很大，一天根本玩不完。海盗主题是一大特色和亮点，其中的超高清环形大屏幕实在是太酷了，真人演出的舞台剧既幽默又精彩，还有很多小品点缀其中。不足之处，首推餐饮小食，没有香港迪士尼做的好，价高质次。','*******930','2016-10-30 23:41'),
(NULL,'没想象的好','Images/ticket/tr-04.png','4分','并没有想象的好玩，人多拥挤排队时间过长，里面的餐饮价格挺好，花车巡游就2辆车10几个卡通人物','*******959','2016-10-30 23:13'),
(NULL,'值得一去，比日本香港的好，算亚洲最好的','Images/ticket/tr-05.png','5分','值得一去，比日本香港的好，算亚洲最好的，有很多独有项目，火鸡腿很好吃，值得一去，比日本香港的好，算亚洲最好的，有很多独有项目，火鸡腿很好吃','*******950','2016-10-30 22:17'),
(NULL,'还是蛮灵的','Images/ticket/tr-05.png','5分','还是蛮灵的啊 就是吃饭不咋地啊 玩得很好 以后有机会再带娃们过来玩一玩 小孩子会很喜欢','*******959','2016-10-30 21:14'),
(NULL,'不好 ','Images/ticket/tr-03.png','3分','不是很好，服务一般，酒店设施很差，性价比很低，，和广州长隆比不了的服务。非常不满意，很不值这个价钱','*******839','2016-10-30 21:14'),
(NULL,'人多','Images/ticket/tr-05.png','5分','人太多，人太多，人太多！重要的是说三遍！不过还是很好玩的，里面的剧场演出也很精彩！','*******016','2016-10-30 21:11');