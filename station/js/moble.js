;(function(){
	var lis = $('#item li');
	var h = lis.eq(0).height();
	var H = lis.length;
	
	lis.each(function(index,item){
		var index = $(this).index();
		$(this).css('top',index*54+'rem')
	})

	lis.on('touchstart',function(){
	
		
		var index = $(this).index()
//		lis.show().not(":eq("+index+"),:eq("+(index+1)+"),:eq("+(index+1)+")").hide();
		lis.show().not(":eq("+index+"),:eq("+(index+1)+")").hide(1000);
		
		lis.removeClass('TransformBottom').eq(index+1).addClass('TransformBottom');
//		lis.removeClass('TransformTop').eq(index-1).addClass('TransformTop');
		
			$('#item').delay(1100).addClass('itemlate')	
	
	})


})()
