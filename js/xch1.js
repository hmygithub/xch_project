/**当鼠标点击类别时异步请求对应的列表**/
$('.type li a').click(function(e){
	e.preventDefault();
	$('div#tab1_content').addClass('disp');
	$(this).parent().addClass('active').siblings('.active').removeClass('active');
	var type=$(this).attr('href');
	$.ajax({
		url:'data/change.php',
		data:{'type':type},
		success:function(list,msg,xhr){
			console.log('开始处理响应数据');
			var html='';
			$.each(list,function(i,schange){
				html+=`
			<dl>
				<a href="#">
				<dt><img data-cid="${schange.cid}" src="${schange.img}">
					<p><img src="Images/unit/un_sprite_tag.png"/><span>特卖</span>
					</p>
					<p class="mb"></p><span>${schange.adver}</span>	
				</dt>
				
				<dd>${schange.guide}</dd>
				<dd class="price">${schange.seat}<span>&yen<b>${schange.price}</b>起</span></dd>
				</a>
			</dl>
				`;
			});
			$('.tab1_content').html(html);
		}
	});
});
/**当鼠标点击类别时异步请求对应的汽车列表**/
$('.type3 li a').click(function(e){
	e.preventDefault();
	$('div#panel').addClass('disp');
	$(this).parent().addClass('active').siblings('.active').removeClass('active');
	var type=$(this).attr('href');
	$.ajax({
		url:'data/rent.php',
		data:{'type':type},
		success:function(list,msg,xhr){
			console.log('开始处理响应数据');
			var html='';
			$.each(list,function(i,rent){
				html+=`
			<dl>
				<a href="#">
				<dt><img data-cid="${rent.cid}" src="${rent.img}"></dt>
				<dd>${rent.city}</dd>
				<dd>${rent.guide}<span>&yen<b>${rent.price}</b>起</span></dd>
				</a>
			</dl>
				`;
			});
			$('.container').html(html);
		}
	});
});
/**当鼠标点击类别时异步请求对应的图片列表**/
$('.type1 li a').click(function(e){
	e.preventDefault();
	$('ul.hotel').addClass('disp');
	$(this).parent().addClass('active').siblings('.active').removeClass('active');
	var guide=$(this).attr('href');
	$.ajax({
		url:'data/hotel.php',
		data:{'guide':guide},
		success:function(list,msg,xhr){
			console.log('开始处理响应数据');
			var html='';
			$.each(list,function(i,hotel){
			html+=`
				<li><a href="#">
					<p></p>
					<p>
						<span>${hotel.city}</span>
						<span>${hotel.count}家酒店</span>
						<span>&yen;<b>${hotel.price}</b>起</span>
					</p>
					<img data-cid="${hotel.hid} src="${hotel.img}" class="front">
				</a></li>
			`;
			});
			$('div#hotel').html(html);
		}
	});
});