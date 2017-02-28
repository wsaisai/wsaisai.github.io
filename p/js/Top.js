;
(function() {
	//渲染出所有的图片
	var datacolor = Colors.file
	$('.home_list').html(CreateCmack(datacolor))
	//hover效果
	var home_lis = $('.home_lis');
	var C_mask = $('.C_mask');
	var Mask = new sHover('home_lis', 'C_mask');
	Mask.set({ 
		SlideSpeeds:9,
		opacityChange: false,
		opacity: 90

	})
//导航栏的hover效果
	function CreateCmack(a) {
		var str = '';
		for(var i = 0; i <12; i++) {
			str += `
			<li class="home_lis">
				<img src="${a[i].img}"/>
				<div class="C_mask">
					<div class="C_mtitle">${a[i].title}</div>
					<div class="C_mfoot">
						<span class="C_mouse"><span></span>6个月前</span>
						<span class="C_eyes"><span></span>7344</span>
						<span class="C_heart"><span></span>39</span>
						
					</div>
				</div>
			</li>
		`
		}
		return str;
	}

})()