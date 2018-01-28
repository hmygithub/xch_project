/*var i=-350;
 var c=0;
 var intHide;
 var speed=3;
 var img=document.getElementById("activei");
 img.click=function show_hide_menu(){
 if(c=0){
 c=1;
 clearInterval(intHide);
 intShow=setInterval("show()",10)
 }
 else{
 c=0;
 clearInterval(intShow)("hide()",10)
 }
 }
 function show(){
 if(i<-12){
 i=i+speed;
 document.getElementById('activei').style.left=i;
 }
 }
 function hide(){
 if(i>-135){
 i=i-speed;
 document.getElementById('activei').style.left=i;
 }
 }*/
/*var left = -450;
 var leftMove = 1;
 var div = document.getElementById("lastI");
 div.onclick = function show_hide_img() {
 var timer = setInterval(function () {
 left += 5 * leftMove;
 div.setAttribute("position", "absolute");
 div.setAttribute("left", left);
 div.setAttribute("bottom", 0);
 console.log(div);
 if (left > 480) {
 leftMove = -1;
 } else if (left < -450) {
 leftMove = 1;
 }
 }, 1000);
 }*/

var i = -450;
var c = 0;
var intHide;
var speed = 3;
var div = document.getElementById("lastI");
div.onclick = function show_hide_img() {
    if (c == 0) {
        c = 1;
        clearInterval(intHide);
        intShow = setInterval("show()", 10);
    }
    else {
        c = 0;
        clearInterval(intShow);
        intHide = setInterval("hide()", 10);
    }
}
function show() {
    if (i < -450) {
        i = i + speed;
        document.getElementById("lastI").style.left = i;
    }
}
function hide() {
    if (i > 450) {
        i = i - speed;
        document.getElementById("lastI").style.left = i;
    }
}
