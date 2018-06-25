


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




//三级联动
$("#t_nav li").click(function(){
	$(this).css("background","white").siblings().css("background","#f6f6f6")
})

$(".tshi1 a").click(function(){
	$(this).addClass("aa").siblings().removeClass("aa").parent().siblings().find("a").removeClass("aa");
	$(".tnav_1").text($(this).text()).css("background","#f6f6f6")
	$(".tshi1").hide();
	$(".tcheng1").show();
	$arr=$(this).text();
	$(".tsan").text($arr);
	var str1=json[$arr];
	for(var i in str1){
		var strcheng="<a href='#'>"+i+"</a>";
		$(".tcheng1").append(strcheng);
		
	}
	$arr=$(this).text();
	console.log($arr)
	$(".tcheng1 a").click(function(){
	
		
		
		
		
	$(this).addClass("aa").siblings().removeClass("aa");
	$(".tnav_2").text($(this).text()).css("background","#f6f6f6")
	$arr=$(this)
	$strxian=$(this).text();
	let strxian=str1[$strxian];
	for(var j=0;j<strxian.length;j++){
		var strxians="<a href='#'>"+strxian[j]+"</a>"
		$(".txian1").append(strxians);
		
	}
	
	$(".tcheng1").hide();
	$(".txian1").show();
	
	$(".txian1 a").click(function(){
	$(this).addClass("aa").siblings().removeClass("aa");
	$(".tnav_3").text($(this).text()).css("background","#f6f6f6")
	
	$(".tcheng1").remove(strcheng);
	
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
	$("#nav_dog").show()
	$("#shop").hide()
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
	$("#nav_dog").hide()
	$("#dog_bac").fadeOut();
		$("#shop").show()
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

$("#nav_dog .dog ").hover(function(){
	$("#fish_bac").stop().fadeOut();
	$("#cat_bac").stop().fadeOut();
	$("#dog_bac").stop().fadeIn(1000)
},function(){
	$("#dog_bac").stop().fadeOut();
})


$("#nav_dog .cat ").hover(function(){
	$("#dog_bac").stop().fadeOut();
	$("#cat_bac").stop().fadeIn(1000)
},function(){
	$("#cat_bac").stop().fadeOut();
})

$("#nav_dog .fish ").hover(function(){
	$("#dog_bac").stop().fadeOut();
	$("#cat_bac").stop().fadeOut();
	$("#fish_bac").stop().fadeIn(1000)
},function(){
	$("#fish_bac").stop().fadeOut();
})
//商品分类
$("#shop .shop_d1").hover(function(){
	
	$(this).addClass("shop_borderbo").removeClass("shop_borderle").siblings().removeClass("shop_borderbo").addClass("shop_borderle");
	$(this).children().css("border","none");
	
		
},function(){
	$(this).css("border-bottom","1px dashed #DDDDDD;").removeClass("shop_borderbo").siblings().removeClass("shop_borderle");	
})

$(".lun_ldiv img").hover(function(){
	
	$(this).animate({left:0},200)
},function(){
	$(this).animate({left:13},200)
})

//foot tu huaguo
$(".foot_d").hover(function(){
	$(this).animate({top:-10},300)
	$(this).find("span").css("color","#e62c43")
},function(){
	$(this).animate({top:0},300)
	$(this).find("span").css("color","black")
})


var num = 0;
			
				
					
			var timer = setInterval(function(){
				num++;
				if(num==$(".pic li").length){
					num=0;
				}
				$(".pic li")
				.eq(num).stop().fadeIn()
				.next().stop().show()
				.siblings().fadeOut()
				
				
				$(".nav li")
				.eq(num).addClass("select").siblings().removeClass("select");
				$(".nav li").hover(function(){
					$(this).stop()
				.addClass("select").siblings().stop().removeClass("select");
					$shu=$(this).index();
					$(".pic li")
				.eq($shu).stop().fadeIn()
				num=$shu
				console.log($shu)
				})
				
			},4000)
			























})




