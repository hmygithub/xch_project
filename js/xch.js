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
//Ϊҳ��������ʵ��ҳǩ�л�
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
//Ϊ�ֲ��ϵ��Ҳ�ʵ��ҳǩ�л�
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
//����1 ����ÿ���û����������֤
$('#uname').focus(function(){
});
$('#uname').blur(function(){});
$('#upwd').focus(function(){
});
$('#upwd').blur(function(){
});
//����2��ʵ���첽���ύע����Ϣ
$('bt-register').click(function(){
  //�����л���������е��û�����
  var data=$('#form-register').serialize();
  //�����л��Ľ����'uname=xxx&upwd=xxx&age=xxx'
//  �첽�ύ��������
  $.ajax({
    type:'POST',
    url:'data/xch_login.php',
    success:function(result){
      console.log('��ʼ����������˵�ע����');
      if(result.msg=='succ'){
        alert('ע��ɹ�');
        location.href='xch_login.html';
      }else{
        alert('ע��ʧ�ܣ�');
      }
    }
  });
})
//����3�������첽���󣬻�ȡ������ǰ�ؼ��ֵ���������
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
 //���û������û����̵���ʱ����õ�ǰ������е�����
    kw.onkeyup = function(){
      var k = this.value;
      if(!k){ //�û�û���κ�����
        suggest.style.display = 'none';
        return; 
      }
      /**�����첽���󣬻�ȡ������ǰ�ؼ��ֵĲ�Ʒ����**/
      //1
      var xhr = new XMLHttpRequest();
      //2
      xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
          if(xhr.status===200){
            doResponse(xhr);
          }else {
            alert('��Ӧ��ɵ�������');
          }
        }
      }
      //3
      xhr.open('GET','data/getbykw.php?kw='+k, true);
      //4
      xhr.send(null);

      function doResponse(xhr){
        console.log('��ʼ������Ӧ����');
        //console.log(xhr);
        suggest.style.display = 'block';
        var ul = document.querySelector('#suggest ul');
        ul.innerHTML = xhr.responseText;
		//var btn=document.querySelector('#search_box #btn');
		btn.style.background='#0076E1';
		
      }
    }
