

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

})