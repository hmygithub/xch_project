var zoom = {
    moved: 0,//保存左移的li个数
    WIDTH: 85,//保存每个li的宽度
    OFFSET: 20,//保存ul的起始left值
    MAX: 3,//保存可左移的最多li个数
    init: function () {
        //为id为preview下的h1添加单击事件代理，仅a能响应事件，事件处理函数为move
        $("#preview>h1").on(
            "click", "a", this.move.bind(this));
        //为id为icon_list的ul添加鼠标进入事件代理，仅li下的img可响应事件，处理函数为changeImgs
        $("#icon_list").on("mouseover", "li>img", this.changeImgs);
    },

    move: function (e) {//移动一次
        var $target = $(e.target);//获得目标元素$target
        var btnClass = $target.attr("class");
        //如果btnClass中没有disabled
        if (btnClass.indexOf("disabled") == -1) {
            //如果btnClass以forward开头
            //将moved+1
            //否则
            //将moved-1
            this.moved +=
                btnClass.indexOf("forward") != -1 ? 1 : -1;
            //设置id为icon_list的ul的left为-moved*WIDTH+OFFSET
            $("#icon_list").css(
                "left", -this.moved * this.WIDTH + this.OFFSET);
            this.checkA();//检查a的状态:
        }
    },
    checkA: function () {//检查两个a的状态
        //查找class属性以backward开头的a，保存在$back
        var $back = $("a[class^='backward']");
        //查找class属性以forward开头的a，保存在$for
        var $for = $("a[class^='forward']");
        if (this.moved == 0) {//如果moved等于0
            //设置$back的class为backward_disabled
            $back.attr("class", "backward_disabled");
        } else if (this.moved == this.MAX) {
            //否则，如果moved等于MAX
            //设置$for的class为forward_disabled
            $for.attr("class", "forward_disabled");
        } else {//否则
            //$back的class为backward
            $back.attr("class", "backward");
            //$for的class为forward
            $for.attr("class", "forward");
        }
    },
    changeImgs: function (e) {//根据小图片更换中图片
        //获得目标元素的src属性，保存在变量src中
        var src = $(e.target).attr("src");
        //查找src中最后一个.的位置i
        var i = src.lastIndexOf(".");
        //设置id为mImg的元素的src为:
        //src从开头-i 拼上-m  拼上src从i到结尾
        $("#mImg").attr(
            "src", src.slice(0, i - 2) + src.slice(i));
    }
}
zoom.init();
//**功能点3：页面加载完成后，异步请求门票信息列表**/
$.ajax({
    url: 'data/admission.php',
    DataType: 'JSON',
    success: function ($tlist) {
        //e.preventDefault;
        var html = '';
        $.each($tlist, function (i,t) {//t=data[i]类数组对象
            html +=`
            <tr>
            <td class="first">
                <span><b>${t.type}</b><a href="#">${t.detail}></a></span>
            </td>
            <td>
                <span>${t.time}</span>
            </td>
            <td>
                <span><s>${t.marketp}</s></span>
            </td>
            <td>
                <span><b>${t.xchp}</b><br>起</span>
            </td>
            <td>
             <span>
                <a href="#">${t.pay}</a>
                <a class="btn btn-warning">预订</a>
            </span>
            </td>
            </tr>
    `;
        });
        $('#tbl1>tbody').html(html);
    }
});
//**功能点3：页面加载完成后，异步请求玩乐信息列表**/
$.ajax({
    url: 'data/fun.php',
    DataType: 'JSON',
    success: function ($flist) {
        //e.preventDefault;
        var html = '';
        $.each($flist, function (i,f) {//t=data[i]类数组对象
            html +=`
                <tr>
            <td class="first">
            <span><a href="#">${f.detail}</a></span>
            </td>
            <td>
            <span><s>${f.marketp}</s></span>
            </td>
            <td>
            <span><b>${f.xchp}</b>起</span>
            </td>
            <td>
            <span>
            <a class="btn btn-info btn-xs">去看看</a>
            </span>
            </td>
                </tr>
            `;
        });
        $('#tbl2>tbody').html(html);
    }
});
//**功能点3：页面加载完成后，异步请求门票+酒店信息列表**/
$.ajax({
    url:'data/ticket_hotel.php',
    DataType:'JSON',
    success:function($list){
        var html=`
            <div id="panel">
                <b>门票＋周边精选酒店套餐，方便又省钱</b>
                <a href="#" class="rt">更多&gt;&gt;</a>
            </div>
        `;
        $.each($list, function (i,t) {
            html+=`
            <div class="media lf">
            <div class="media-left">
            <img src="${t.img}" class="vertical-middle"/>
            </div>
            <div class="media-body">
            <p>
            <strong>${t.title}</strong><br/>
            <strong>${t.title2}</strong><br/>
            10%旅客喜欢<br>
            酒店距离景点:<b>${t.distance}</b>公里<br>
            <span>&yen;<b>${t.price}</b>起/份</span>
            </p>
            </div>
            </div>
        `;
        });
        $('#t-hotel').html(html);
    }
});
//**功能点3：页面加载完成后，异步请求附近酒店信息列表**/
$.ajax({
    url:'data/nearby_hotel.php',
    DataType:'JSON',
    success:function($list){
        var html=`
        <div id="panel2">
        <b>上海迪士尼度假区附近酒店</b>
        </div>
        `;
        $.each($list, function (i,t) {
            html+=`
            <div class="media lf">
            <div class="media-left">
            <img src="${t.img}" class="vertical-middle"/>
            </div>
            <div class="media-body">
            <h5>${t.title}</h5>
            <h5>${t.title2}</h5>
            <p>
            点评：<b>${t.mark}分</b>/${t.num}人点评<br>
            距离：<b>${t.distance}</b>公里<br>
            <span>&yen;<b>${t.price}</b>起</span>
            </p>
            </div>
            </div>
        `;
        });
        $('#nearby-hotel').html(html);
    }
});
/**功能：页签切换**/
$("#navs>.navs a").click(function(e){
    e.preventDefault();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    var t=$(this).attr("data-toggle");
    /*if($t='tab1'){
        $(".t1").attr("style","height:848px");
    }else if($t='tab2'){
        $(".t1").attr("style","height:907px");
    }else if($t='tab3'){
        $(".t1").attr("style","height:427px");
    }else{
        $(".t1").attr("style","height:427px");
    }*/
    console.log(t);
    console.log($("."+t));

    $("."+t).attr("style","display:block;").siblings().attr("style","display:none");
});
$.ajax({
    url:'data/around_view.php',
    DataType:'JSON',
    success:function($vlist){
        var html=`
            <h4 class="text-center">周边景点</h4>
        `;
        $.each($vlist,function(i,v){
            html+=`
            <div class="thumbnail" style="padding-top: 15px">
            <img src="${v.img}"/>
            <div class="caption">
            <h6>${v.caption}</h6>
            <span style="color: #FF6600">&yen;${v.price}起</span>
            <span class="rt" style="color: #999">距离${v.distance}公里</span>
            </div>
            </div>
            `;
        });
        $('#around-view').html(html);
    }
})
/**功能点4：页面加载完成后，异步请求用户评论列表**/
$(function () {
    loadProductByPage(1);
});

/**功能点5：用户点击分页条中的页号时，实现数据的异步加载**/
$('.pagers').on('click', 'a', function (event) {
    event.preventDefault(); //阻止跳转行为
    //获取要跳转的页号
    var pageNum = $(this).attr('href');
    loadProductByPage(pageNum);
});

//分页加载商品数据，并动态创建分页条
function loadProductByPage(pageNum) {
    $.ajax({
        url: 'data/comment_select.php?pageNum=' + pageNum,
        DataType: 'JSON',
        success: function (pager) {
            console.log('succ');
            //根据返回的分页数据，动态创建分页条内容
            var html = '';
            if (pager.pageNum - 2 > 0) {
                html += `
                <li>
                <a href = "${pager.pageNum-2}" >${pager.pageNum-2}</a>
                </li>
                `;
            }
            if (pager.pageNum - 1 > 0) {
                html += `
                <li>
                    <a href = "${pager.pageNum-1}" >${pager.pageNum-1}</a>
                </li>
                 `;
            }
            html += `
            <li class= "active">
            <a href = "#">${pager.pageNum}</a>
            </li>
            `;
            if (pager.pageNum + 1 <= pager.pageCount) {
                html += `
                <li>
                <a href = "${pager.pageNum+1}" >${pager.pageNum+1}</a>
                </li>
                `;
            }
            if (pager.pageNum + 2 <= pager.pageCount) {
                html += `
                <li >
                <a href = "${pager.pageNum+2}" >${pager.pageNum+2}</a>
                </li>
                `;
            }
            $('.pagers').html(html);
            //遍历读取到分页器对象，拼接HTML，追加到DOM树
            var html =`
            <img src = "Images/ticket/images/user-reviws.jpg" id = "user-reviws"/>
            <p class="first">
                <span><b> 4.6 </b>/5分(共8369人点评)</span>
            </p>
	    `;
            $.each(pager.data, function (i, c) {//c=data[i]类数组对象
                html += `
                <p class="last">
                <span><b>${c.core}</b><img src="${c.img}" style="margin: 0 5px"/>${c.mark}</span><br/>
                <span>${c.content}</span><br/>
                <span>${c.phone}<b>${c.time}</b></span>
                </p>
            `;
            });
            $('#mid-content3').html(html);
        }
    });
}


