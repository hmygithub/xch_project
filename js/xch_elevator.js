var elevator={
	FHEIGHT:0,//保存楼层高度
	UPLEVEL:0,//保存量等区域上边界距离文档显示区顶部的距离
	DOWNLEVEL:0,
	DURATION:1000,
	init:function(){/**html对应282行**/
		this.FHEIGHT=parseFloat($("#content").css("height"))
			+parseFloat($("header").css("height"))+
			parseFloat($("header").css("marginTop"));//#f1的高+#f1的margin-bottom
		this.UPLEVEL=(innerHeight-this.FHEIGHT)/2;
		this.DOWNLEVEL=this.UPLEVEL+this.FHEIGHT;
		//为document绑定scroll事件为scroll方法
		$(document).scroll(this.scroll.bind(this));
		//为#elevator下的ul添加mouseover事件代理,只有li才能响应事件
		$("#elevator>ul").on("mouseover","li",function(e){
			var $target=$(e.target);//获得目标元素$target
			if(e.target.nodeName=="A"){//如果target是a就换成父元素li
				 $target=$target.parent();
			}
			//$target中显示第二个a,隐藏第一个a
			$target.children(":first").hide();
			$target.children(":last").show();
		});
		//为#elevator下的ul添加mouseout事件代理,只有li才能响应事件
		$("#elevator>ul").on("mouseout","li",function(e){
			var $target=$(e.target);//获得目标元素$target
			if(e.target.nodeName=="A"){//如果target是a就换成父元素
				 $target=$target.parent();
			}
			//获得$target在ul下的下标i
			var i=$target.index("#elevator>ul>li");
			//查找.floor下的header下的span取第i个
			var	$first=$(".floor>header>ul>li:first-child>a:eq("+i+")");
			if(!$first.hasClass("hover")){
				//$target中显示第一个a,隐藏第二个a
				$target.children(":first").show();
				$target.children(":last").hide();
			}
		});
		//为#elevator下的ul添加click事件代理,只有li下class为etitle的a才能响应事件
		$("#elevator>ul").on("click","li>a.etitle",function(e){
			$("body").stop(true);//停止body上的动画,清空队列
			var $li=$(e.target).parent();//获得目标元素的父元素$li
			//获得$li在所有li中的下标i
			var i=$li.index("#elevator>ul>li");
			//查找.floor下的header下的span中第i个$span
			var $first=$(".floor>header>ul>li:first-child>a:eq("+i+")");
			//启动动画,让body在duration时间内,滚动到$span距页面顶部的总距离-UPLEVEL
			$("body").animate(
				{scrollTop:
					$first.offset().top-this.UPLEVEL
				},this.DURATION
			);

		}.bind(this)
		);
	},
	scroll:function(){//响应document的scroll事件
		//查找.floor下的header下的span,对每个元素执行:
		$(".floor>header>ul>li:first-child>a").each(function(i,elem){//事件代理尽量不用this,用elem
			//function(i,elem){i:下标,elem:自动获得当前DOM元素}
			//获取当前元素距页面顶部的总距离totalTop
			var totalTop=$(elem).offset().top;
			//获取页面滚动过得距离scrollTop
			var scrollTop=$("body").scrollTop();
			//用totalTop-scrollTop,保存在innerTop
			var innerTop=totalTop-scrollTop;
			//如果innerTop>UPLEVEL且<=DOWNLEVEL
			if(innerTop>this.UPLEVEL
					&&innerTop<=this.DOWNLEVEL){
				//设置当前元素的class为hover
				$(elem).addClass("hover");
				$("#elevator>ul>li:eq("+i+")>a:first").hide();
				$("#elevator>ul>li:eq("+i+")>a:last").show();
			}else{//否则
				//移除当前元素的hover类
				$(elem).removeClass("hover");
				//对应的li显示第一个a,隐藏第二个a
				$("#elevator>ul>li:eq("+i+")>a:first").show();
				$("#elevator>ul>li:eq("+i+")>a:last").hide();
			}
		}.bind(this));
		//查找.floor下的header下的span中class为hover的,
		//如果找到,就设置#elevator下的ul显示,否则隐藏
		$(".floor>header>ul>li:first-child>a.hover").length>0?
				$("#elevator").show():
				$("#elevator").hide();
	}
}
elevator.init();