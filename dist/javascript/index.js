


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








































})