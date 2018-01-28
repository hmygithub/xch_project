$("#panel").delegate("dt", "mouseover", function (e) {
  var $target= $(e.target);
  $target.find("#trail").attr("position","absolute");
  $target.find("#trail").css("visibility", "visible")
    .css("top","event.clientX+10")
    .css("left","event.clientY")
    .css("color", "#e4393c");
  console.log($("#trail"));

});
$("#panel").delegate("dt", "mouseout", function (e) {
  var $target= $(e.target);
  $target.find("#trail").css("visibility","hidden");
});
//为页面主导航实现页签切换
$("#nav_items>li>a").mouseenter(function(e){
  e.preventDefault();
  var v=$(this).attr("data-v");
  console.log(v);
  $(".content"+v).attr("style","display:block;").siblings("ul").removeAttr("style");
});
$("#nav_items>li>a").mouseout(function(e){
  e.preventDefault();
  $(".content1").attr("style","display:block;").siblings("ul").removeAttr("style");
});
//为轮播上的右侧实现页签切换
$("#banner #tab1_container>.u1>li").click(function(e){
  var value=$(this).attr("value");
  console.log(value);
  $("#form"+value).attr("style","display:block;").siblings().removeAttr("style");
  $(this).css("border-bottom","2px solid #0066CC");
  $(this).siblings().removeAttr("style");
  $(this).find("b").css("display","block");
  $(this).siblings().find("b").css("display","none");
});
$("#banner #tab_bar>li").click(function(e){
  e.preventDefault();
  var c=$(this).attr("id");
  //console.log(c);
  console.log($("#"+c+"_container"));
  $("."+c+"_container").attr("style","display:block");
  $("."+c+"_container").siblings("div.rt").attr("style","display:none");
  $(this).css("background-color","#fff");
  $(this).siblings().css("background-color","#2577E3");
  $(this).children("a").css("color","#2577E3");
  $(this).siblings().children().css("color","#fff");
});
//功能1 ：对每个用户输入进行验证
$('#uname').focus(function(){
});
$('#uname').blur(function(){});
$('#upwd').focus(function(){
});
$('#upwd').blur(function(){
});
//功能2：实现异步的提交注册信息
$('bt-register').click(function(){
  //表单序列化，获得所有的用户输入
  var data=$('#form-register').serialize();
  //表单序列化的结果：'uname=xxx&upwd=xxx&age=xxx'
//  异步提交请求数据
  $.ajax({
    type:'POST',
    url:'data/xch_login.php',
    success:function(result){
      console.log('开始处理服务器端的注册结果');
      if(result.msg=='succ'){
        alert('注册成功');
        location.href='xch_login.html';
      }else{
        alert('注册失败！');
      }
    }
  });
})
//功能3：发起异步请求，获取包含当前关键字的搜索建议
/*$("#kw").change(function(){
	var k=$(this).value;
	if(!k){
		$("#suggest").attr("style","display:none");
		return;
	}
	$.ajax({
		url:'data/getbykw.php?kw='+k,
		success:function($dest){
			$("#suggest").attr("style","display:block");
			$("#suggest").children().innerHTML="<li>$dest</li>";
		}
	});
})*/
 //当用户输入敲击键盘弹起时，获得当前输入框中的内容
    kw.onkeyup = function(){
      var k = this.value;
      if(!k){ //用户没有任何输入
        suggest.style.display = 'none';
        return; 
      }
      /**发起异步请求，获取包含当前关键字的产品名称**/
      //1
      var xhr = new XMLHttpRequest();
      //2
      xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
          if(xhr.status===200){
            doResponse(xhr);
          }else {
            alert('响应完成但有问题');
          }
        }
      }
      //3
      xhr.open('GET','data/getbykw.php?kw='+k, true);
      //4
      xhr.send(null);

      function doResponse(xhr){
        console.log('开始处理响应数据');
        //console.log(xhr);
        suggest.style.display = 'block';
        var ul = document.querySelector('#suggest ul');
        ul.innerHTML = xhr.responseText;
		//var btn=document.querySelector('#search_box #btn');
		btn.style.background='#0076E1';
		
      }
    }
