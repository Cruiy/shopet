"use strict";$(function(){$(".tsan").hover(function(){$(".tsan img").attr("src","images/txs.jpg")},function(){$(".tsan img").attr("src","images/txx.jpg")}),$(".tec").hover(function(){$(".tdetal1").show(),$(".tdetal1").hover(function(){$(this).show()},function(){$(this).hide()})},function(){$(".tdetal1").hide()}),$(".tsc").hover(function(){$(".tdetal2").show(),$(".tdetal2").hover(function(){$(this).show()},function(){$(this).hide()})},function(){$(".tdetal2").hide()}),$(".tphone").hover(function(){$(".tph").show(),$(".tph").hover(function(){$(this).show()},function(){$(this).hide()})},function(){$(".tph").hide()}),$(".tsan").hover(function(){$("#tlian").show(),$("#tlian").hover(function(){$(this).show()},function(){$(this).hide()})},function(){$("#tlian").hide()}),$("#t_nav li").click(function(){$(this).css("background","white").siblings().css("background","#f6f6f6")}),$(".tshi1 a").click(function(){$(this).addClass("aa").siblings().removeClass("aa").parent().siblings().find("a").removeClass("aa"),$(".tnav_1").text($(this).text()).css("background","#f6f6f6"),$(".tshi1").hide(),$(".tcheng1").show(),$arr=$(this).text(),$(".tsan").text($arr);var o=json[$arr];for(var t in o){var e="<a href='#'>"+t+"</a>";$(".tcheng1").append(e)}$arr=$(this).text(),console.log($arr),$(".tcheng1 a").click(function(){$(this).addClass("aa").siblings().removeClass("aa"),$(".tnav_2").text($(this).text()).css("background","#f6f6f6"),$arr=$(this),$strxian=$(this).text();for(var t=o[$strxian],s=0;s<t.length;s++){var i="<a href='#'>"+t[s]+"</a>";$(".txian1").append(i)}$(".tcheng1").hide(),$(".txian1").show(),$(".txian1 a").click(function(){$(this).addClass("aa").siblings().removeClass("aa"),$(".tnav_3").text($(this).text()).css("background","#f6f6f6"),$(".tcheng1").remove(e)})})}),$(".tnav_1").click(function(){$(".tshi1").show(),$(".tcheng1").hide(),$(".txian1").hide()}),$(".tnav_2").click(function(){$(".tshi1").hide(),$(".tcheng1").show(),$(".txian1").hide()}),$(".tnav_3").click(function(){$(".tshi1").hide(),$(".tcheng1").hide(),$(".txian1").show()}),$(".nav_left1").hover(function(){$(this).css("background","#3e0371"),$(".nav_left2").css("background",""),$("#nav_dog").show(),$("#shop").hide(),$(".nav_left1").mouseover(function(){$(this).find("img").attr("src","../images/navle1.jpg")}),$(".nav_left1").mouseout(function(){$(this).find("img").attr("src","../images/nav_le.gif")})},function(){$("#nav_dog").hide()}),$(".nav_left2").hover(function(){$(this).css("background","#3e0371"),$(".nav_left1").css("background",""),$("#nav_dog").hide(),$("#dog_bac").fadeOut(),$("#shop").show()},function(){$("#shop").hide()}),$("#nav_dog").hover(function(){$("#nav_dog").show(),$("#shop").hide()},function(){$("#nav_dog").hide(),$("#shop").hide()}),$("#shop").hover(function(){$("#nav_dog").hide(),$("#shop").show()},function(){$("#nav_dog").hide(),$("#shop").hide()}),$(".nav_left1").mouseover(function(){$(this).find("img").attr("src","../images/navle1.jpg")}),$(".nav_left1").mouseout(function(){$(this).find("img").attr("src","../images/nav_le.gif")}),$(".nav_left2").mouseover(function(){$(this).find("img").attr("src","../images/navle2.jpg")}),$(".nav_left2").mouseout(function(){$(this).find("img").attr("src","../images/nav_le2.gif")}),$(".nav_n").hover(function(){$(this).css("background","")}),$("#nav_dog .dog ").hover(function(){$("#fish_bac").stop().fadeOut(),$("#cat_bac").stop().fadeOut(),$("#dog_bac").stop().fadeIn(1e3)},function(){$("#dog_bac").stop().fadeOut()}),$("#nav_dog .cat ").hover(function(){$("#dog_bac").stop().fadeOut(),$("#cat_bac").stop().fadeIn(1e3)},function(){$("#cat_bac").stop().fadeOut()}),$("#nav_dog .fish ").hover(function(){$("#dog_bac").stop().fadeOut(),$("#cat_bac").stop().fadeOut(),$("#fish_bac").stop().fadeIn(1e3)},function(){$("#fish_bac").stop().fadeOut()}),$("#shop .shop_d1").hover(function(){$(this).addClass("shop_borderbo").removeClass("shop_borderle").siblings().removeClass("shop_borderbo").addClass("shop_borderle"),$(this).children().css("border","none")},function(){$(this).css("border-bottom","1px dashed #DDDDDD;").removeClass("shop_borderbo").siblings().removeClass("shop_borderle")}),$(".lun_ldiv img").hover(function(){$(this).animate({left:0},200)},function(){$(this).animate({left:13},200)}),$(".foot_d").hover(function(){$(this).animate({top:-10},300),$(this).find("span").css("color","#e62c43")},function(){$(this).animate({top:0},300),$(this).find("span").css("color","black")});var t=0;setInterval(function(){++t==$(".pic li").length&&(t=0),$(".pic li").eq(t).stop().fadeIn().next().stop().show().siblings().fadeOut(),$(".nav li").eq(t).addClass("select").siblings().removeClass("select"),$(".nav li").hover(function(){$(this).stop().addClass("select").siblings().stop().removeClass("select"),$shu=$(this).index(),$(".pic li").eq($shu).stop().fadeIn()})},4e3);$(".miao_list li").hover(function(){$(this).find("img").animate({top:50},400),$(".miao_btn").css("color","white")},function(){$(this).find("img").animate({top:60},400)});var s=["images/1f413625dacd95dde472be1a353cb212.jpg@!200w-c.jpg","images/mp2.jpg","images/mp3.jpg","images/mp4.jpg","images/mp5.jpg","images/mp6.jpg"];$("#miao_nav li").hover(function(){var t=$(this).index();$(this).find("p").css("color","#ed4044"),$(this).find("a").css("color","#ed4044"),$(this).css("border-bottom","2px solid red").css("color","#ed4044").css("font-size","14px").css("font-weight","900").siblings().css("border-bottom","none").css("font-size","12px").css("font-weight","100").find("p").css("color","black"),$(this).siblings().find("a").css("color","black"),$(".miaosha_pic").attr("src",s[t])});var i=$("#loginname").val();$("#inde_name").text(i),$("#lobtn").click(function(){var t=$("#loginname").val(),s=$("#loginword").val();$("#inde_name").text("loginname"),$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:t,password:s},function(t){0==(t=JSON.parse(t))?alert("用户名不存在"):2==t?alert("用户名密码不符"):($.cookie("username",t.userID,{expires:7,path:"/"}),window.location.href="../index.html")})}),$.get("http://datainfo.duapp.com/shopdata/getclass.php",function(t){t=JSON.parse(t);var i="";$.each(t,function(t,s){i+='<a href="html/liebiao.html?classID='+s.classID+'">'+s.className+"</a>"}),$(".maio_jiehshao").html(i),$(".maioa").html(i)});var o=new Date,e=o.getHours(),n=o.getMinutes();e+=.01*n,n<10&&(n="0"+n);for(var a=["10","12","16","22"],l=0;l<a.length;l++){var c=a[l];if(0<e-parseInt(c)&&e-parseInt(c)<1){$("#miao_nav li").eq(l).css("border-bottom","2px solid red").css("color","#ed4044").css({"font-size":"14px",color:"red","font-weight":900}).find("a").css("color","#ed4044").find("p").text("正在秒杀").css("color","#ed4044"),$(".miaosha_pic").attr("src",s[l]);var d=e+":"+n;$(".maio_time").text(d);break}.6<e-a[l]&&$("#miao_nav li").eq(l).find("p").text("秒杀结束")}var h=["images/fp1.jpg","images/fp2.jpg","images/fp3.jpg","images/fp4.jpg","images/fp5.jpg"],r=["images/1.jpg","images/2.jpg","images/3.jpg","images/7.jpg","images/6.jpg"];$(".food_nright li").hover(function(){var t=$(this).index();$(this).css("border-top","2px solid #459d36").css("border-left","2px solid #459d36").css("border-right","1px solid #459d36").css("background","white").siblings().css("border-top","none").css("border-left","none").css("border-right","none").css("background",""),$(".foodpic").attr("src",h[t]),$(".foodpic1").attr("src",r[t])}),$.get("http://datainfo.duapp.com/shopdata/getclass.php",function(t){t=JSON.parse(t);var i="";$.each(t,function(t,s){i='<a href="html/liebiao.html?classID='+s.classID+'">'+s.className+"</a>"}),$(".food_word").html(i)}),$("#phone").blur(function(){var t=$("#phone").val();/^[1-3]\d{10}$/.test(t)?$(".phn_span").css("display","none"):$(".phn_span").css("display","block")});var f=Math.floor(9e3*Math.random())+1e3;$(".yanshu_li").text(f),$(".zu_btn").click(function(){var t=Math.floor(9e3*Math.random())+1e3;$(".yanshu_li").text(t)}),$("#yanz").blur(function(){$("#yanz").val()!=$(".yanshu_li").text()?$("#yanz_span").css("display","block"):$("#yanz_span").css("display","none")}),$("#password").blur(function(){var t=$("#password").val();/^[0-9a-zA-Z_]\w{5,14}$/.test(t)?$("#zupa_span").css("display","none"):$("#zupa_span").css("display","block")}),$("#rep").blur(function(){$("#password").val()!=$("#rep").val()?$("#rep_span").css("display","block"):$("#rep_span").css("display","none")}),$("#zhubtn").click(function(){var t=$("#username").val(),s=$("#password").val();$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"register",userID:t,password:s},function(t){0==t?alert("用户名已存在"):2==t?alert("数据库错误请稍后重试"):window.location.href="login.html"})});var p=location.search.split("=")[1];$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:p},function(t){var i="";$.each(t,function(t,s){i+='<div class="liebiao_mmainr_pind">\n\t\t\t\t\t\t\t<a href="detal.html?id='+s.goodsID+'">\n\t\t\t\t\t\t\t<img class="liebiao_mmainr_pind_img" src="'+s.goodsListImg+'">\n\t\t\t\t\t\t\t<img class="liebiao_mmainr_pind_img_small" src="'+s.goodsListImg+'">\n\t\t\t\t\t\t\t<p class="liebiao_mmainr_pind_js">'+s.goodsName+'</p>\n\t\t\t\t\t\t\t<p class="liebiao_mmainr_pind_jg">'+s.price+"</p>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>"}),$(".liebiao_mmainr_pin").html(i)}),$(".liebiao_main_td1").hover(function(){$(".lie_list1").show()},function(){$(".lie_list1").hide()}),$(".lie_list1").mouseover(function(){$(".lie_list1").show()}),$(".lie_list1 li").hover(function(){$(this).css("background","#DDDDDD")},function(){$(this).css("background","")}),$(".liebiao_main_td2").hover(function(){$(".lie_list2").show()},function(){$(".lie_list2").hide()}),$(".lie_list2").mouseover(function(){$(".lie_list2").show()}),$(".lie_list2 li").hover(function(){$(this).css("background","#DDDDDD")},function(){$(this).css("background","")}),$(".liebiao_main_td3").hover(function(){$(".lie_list3").show()},function(){$(".lie_list3").hide()}),$(".lie_list3").mouseover(function(){$(".lie_list3").show()}),$(".lie_list3").mouseout(function(){$(".lie_list3").hide()}),$(".lie_list2").mouseout(function(){$(".lie_list2").hide()}),$(".lie_list1").mouseout(function(){$(".lie_list1").hide()}),$(".lie_list3 li").hover(function(){$(this).css("background","#DDDDDD")},function(){$(this).css("background","")});var u=location.search.split("=")[1];$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:u},function(s){var t='<p class="detal_main_left_p">'+s[0].goodsName+'</p>\n\t\t\t\t<div class="detal_main_left_jg">\n\t\t\t\t\t<div class="detal_main_left_jgs">市场价：100000￥\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="detal_main_left_jgw">\n\t\t\t\t\t\t\t<span>E宠价：'+s[0].price+'</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<ul class="detal_my">\n\t\t\t\t\t<li>我要</li>\n\t\t\t\t<li class="detal_myli1">-</li>\n\t\t\t\t\t<li class="detal_myli2">1</li>\n\t\t\t\t\t<li class="detal_myli3">+</li>\n\t\t\t\t\t<li>件</li>\n\t\t\t\t</ul>\n\t\t\t<input type="button" name="detal_btn" class="detal_btn" value="加入购物车" />',i='<div class="zoomBox">\n\t\t\t\t\t<div class="midArea">\n\t\t\t\t\t\t<img src="'+s[0].goodsListImg+'">\n\t\t\t\t\t\t<div class="zoom"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="bigArea">\n\t\t\t\t\t\t<img src="'+s[0].goodsListImg+'">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="smallArea"></div>\n\t\t\t\t</div>';$(".detal_main_right").html(t),$(".detal_main_left").html(i);var e=document.getElementsByClassName("zoomBox")[0],n=document.getElementsByClassName("midArea")[0],a=document.getElementsByClassName("zoom")[0],o=document.getElementsByClassName("bigArea")[0],l=o.children[0];n.onmouseover=function(){a.style.display="block",o.style.display="block"},n.onmouseout=function(){a.style.display="none",o.style.display="none"},n.onmousemove=function(t){var s=t||event,i=s.pageX-e.offsetLeft-a.offsetWidth/2,o=s.pageY-e.offsetTop-a.offsetHeight/2;i<=0&&(i=0),i>=n.offsetWidth-a.offsetWidth&&(i=n.offsetWidth-a.offsetWidth),o<=0&&(o=0),o>=n.offsetHeight-a.offsetHeight&&(o=n.offsetHeight-a.offsetHeight),a.style.left=i+"px",a.style.top=o+"px",l.style.left=-a.offsetLeft/n.offsetWidth*l.offsetWidth+"px",l.style.top=-a.offsetTop/n.offsetHeight*l.offsetHeight+"px"},$(".detal_myli1").on("click",function(){var t=$(".detal_myli2").text();t<=0?t=0:t--,$(".detal_myli2").text(t)}),$(".detal_myli3").on("click",function(){var t=$(".detal_myli2").text();t++,$(".detal_myli2").text(t)}),$(".detal_btn").on("click",function(){var t=$(".detal_myli2").text();$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:s[0].goodsID,number:t},function(t){1==t?location.href="goods.html":0==t&&console.log("tianjiashibai")})})})});