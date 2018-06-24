


$(function(){
$(".tsan").hover(function(){
	$(".tsan img").attr("src","images/txs.jpg")
},function(){
	$(".tsan img").attr("src","images/txx.jpg")
})
	
$(".tec").hover(function(){
	$(".tdetal1").show()
	$(".tdetal1").hover(function(){
		$(this).show()
	},function(){
		$(this).hide()
	})
},function(){
	$(".tdetal1").hide()
})

$(".tsc").hover(function(){
	$(".tdetal2").show()
	$(".tdetal2").hover(function(){
		$(this).show()
	},function(){
		$(this).hide()
	})
},function(){
	$(".tdetal2").hide()
})
$(".tphone").hover(function(){
	$(".tph").show()
	$(".tph").hover(function(){
		$(this).show()
	},function(){
		$(this).hide()
	})
},function(){
	$(".tph").hide()
})
//地址三级联动--待完成
$(".tsan").hover(function(){
	$("#tlian").show()
	$("#tlian").hover(function(){
		$(this).show()
	},function(){
		$(this).hide()
	})
},function(){
	$("#tlian").hide()
})


$("#t_nav li").click(function(){
	$(this).css("background","white").siblings().css("background","#f6f6f6")
})

$(".tshi1 a").click(function(){
	$(this).addClass("aa").siblings().removeClass("aa").parent().siblings().find("a").removeClass("aa");
	$(".tnav_1").text($(this).text()).css("background","#f6f6f6")
	$(".tshi1").hide();
	$(".tcheng1").show();
	$arr=$(this).text();
	console.log($arr)
	$(".tcheng1 a").click(function(){
	$(this).addClass("aa").siblings().removeClass("aa");
	$(".tnav_2").text($(this).text()).css("background","#f6f6f6")
	$(".tcheng1").hide();
	$(".txian1").show();
	
	$(".txian1 a").click(function(){
	$(this).addClass("aa").siblings().removeClass("aa");
	$(".tnav_3").text($(this).text()).css("background","#f6f6f6")
	$(".tsan").text($arr);
})
})
})


$(".tnav_1").click(function(){
	$(".tshi1").show();
	$(".tcheng1").hide();
	$(".txian1").hide();
})

$(".tnav_2").click(function(){
	$(".tshi1").hide();
	$(".tcheng1").show();
	$(".txian1").hide();
})
$(".tnav_3").click(function(){
	$(".tshi1").hide();
	$(".tcheng1").hide();
	$(".txian1").show();
})

//nav左侧边框

$(".nav_left1").hover(function(){
	$(this).css("background","#3e0371");
	$(".nav_left2").css("background","")
	$(".nav_left1").mouseover(function(){
		$(this).find("img").attr("src","../images/navle1.jpg")
})

$(".nav_left1").mouseout(function(){
		$(this).find("img").attr("src","../images/nav_le.gif")
})
})
$(".nav_left2").hover(function(){
	$(this).css("background","#3e0371");
	$(".nav_left1").css("background","")
})



$(".nav_left1").mouseover(function(){
		$(this).find("img").attr("src","../images/navle1.jpg")
})

$(".nav_left1").mouseout(function(){
		$(this).find("img").attr("src","../images/nav_le.gif")
})
$(".nav_left2").mouseover(function(){
		$(this).find("img").attr("src","../images/navle2.jpg")
})

$(".nav_left2").mouseout(function(){
		$(this).find("img").attr("src","../images/nav_le2.gif")
})


//nav_zj
$(".nav_n").hover(function(){
	$(this).css("background","");
	
})

//商品分类
$("#shop .shop_d1").hover(function(){
	$index=$(this).index();
	$(this).addClass("shop_borderbo").removeClass("shop_borderle").siblings().removeClass("shop_borderbo").addClass("shop_borderle");
	$(this).children().css("border","none");
	if($index!=0){
		$index=$index-1;
		$(this).eq($index).children().css("border-bottom","none");
		
	}
	
	
},function(){
	$(this).children().css("border-bottom","1px dashed #DDDDDD;")
	
	
	
})






























})