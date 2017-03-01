;
(function() {

	//	document.addEventListener('touchstart',function(event){
	////		render();
	//			var html = `<div class = 'a'></div>`;
	//		var page = document.getElementsByClassName('page')[0]
	//		console.log(page)
	//		page.innerHTML = html;
	//		event.preventDefault()
	//	})
	//	function a(){
	//		alert(1)
	//	}
	//	function render(){
	//		var html = `<div class = 'a'></div>`;
	//		var page = document.getElementsByClassName('page')[0]
	//		console.log(page)
	//		page.innerHTML = html;
	//	}
	////		var page = $('.page');
	//		//在p标签中生成span并且完成运动过程
	$('.dianji').on('touchstart', function() {
		$('.page').show(1000);
		$('.page p').eq(0).html('<span>擅长技能</span>');
		$('.page p').eq(1).html('<span>求职意向</span>');
		$('.page .PI').html('<span>html</span><span>js</span><span>css</span><span>ps</span>')
		$('.page .job').html('<div>职位：前端工程师</div><div>薪资：6k-8k</div>')
		$('.page p span').each(function(index, item) {
				$(item).delay(800).addClass('font-span')
					.animate({
						'opacity': '1',
						'top': '0.1rem',
						'left': '2rem'
					}, 400, function() {
						$(this).css('transform', 'rotateZ(0deg)')
					});
			})
			//在ul中生成圆
		$('.PI span').eq(0).addClass('li_font')
			.delay(600).animate({
				opacity: 1,
				width: '10rem',
				height: '10rem',
				fontSize: '3rem',
				lineHeight: '10rem'
			}, 900);
		$('.PI span').eq(1).addClass('li_font')
			.delay(700).animate({
				opacity: 1,
				width: '7.4rem',
				height: '7.4rem',
				fontSize: '2rem',
				lineHeight: '7.4rem'
			}, 900);
		$('.PI span').eq(2).addClass('li_font')
			.delay(800).animate({
				opacity: 1,
				width: '6.6rem',
				height: '6.6rem',
				fontSize: '2rem',
				lineHeight: '6.6rem'
			}, 800);
		$('.PI span').eq(3).addClass('li_font')
			.delay(900).animate({
				opacity: 1,
				width: '9.4rem',
				height: '9.4rem',
				fontSize: '2rem',
				lineHeight: '9.4rem'
			}, 1000);

		$('.job div').eq(0).delay(1600).animate({
			left: '2.7rem'
		}, 1000)
		$('.job div').eq(1).delay(1600).animate({
			left: '21.1rem'
		}, 1000)
	})

	var Button = $('.button')
	console.log(Button);
	Button.on('touchstart', function() {

			$('.page').hide(1000)
		})
		//	//-------------------------page页面的滑动和点击
		//	var item = document.querySelector('.item');

	//		
	//	var endPos = null;
	//	var startPos = null;
	//	var Top = 0;
	//	
	//	var lis = $('.item li') //获取所有的页面
	//	$('.item li').each(function(index, item) {
	//		$(item).on('touchstart', function(event) {
	//			var touch = event.targetTouches[0]; //获取第一个touch
	//			Top = $(this).offset().top; //最开始的Top定位值
	//			startPos = { //第一个touch的坐标，距离屏幕的xy轴
	//				x: touch.pageX,
	//				y: touch.pageY,
	//				time: +new Date
	//			};
	//			isScrolling = 0;
	//			//move事件
	//			$(item).on('touchmove', function(event) {
	//				//当屏幕上有多个touch事件或者缩放过，就不执行move操作
	//				if(event.targetTouches.length > 1 || event.scale && event.scale !== 1) {
	//					return;
	//				}
	//				var touch = event.targetTouches[0];
	//				endPos = {
	//					x: touch.pageX - startPos.x,
	//					y: touch.pageY - startPos.y
	//				}
	//				isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1 : 0; //这里做判断想x，y坐标的最终值于初始值得绝对值；如果等于1那么是纵向移动0横向
	//				if(isScrolling === 1) {
	//					if(Math.abs(endPos.y) > 10) {
	//						$(this).css({
	//							'top': Top + endPos.y + 'px'
	//						});
	//					
	//						
	//					}
	//					event.preventDefault(); //组织默认事件，滚屏发生
	//				}
	//			});
	//			$(item).on('touchend', function(event) {
	//				var duration = +new Date - startPos.time; //滑动持续的时间
	//				if(isScrolling === 1) {
	//					var Top = $(this).offset().top;
	//				}
	//			})
	//			return false;
	//		});
	//	})
	//	

	//	function fn(){
	//		item.style.transform = "rotateX(360deg)";
	//		item.style.transition = "8s";
	//	}
	//	fn()
	//		

	//	

	//	var endPos = null;
	//	var startPos = null;
	//
	//	var item = document.querySelector('.item');
	//	item.addEventListener('touchstart', function(event) {
	//
	//		var touch = event.targetTouches[0]; //获取第一个touch
	//		startPos = { //第一个touch的坐标，距离屏幕的xy轴
	//			x: touch.pageX,
	//			y: touch.pageY,
	//			time: +new Date
	//		};
	//		isScrolling = 0; //这个参数判断是垂直滚动还是水平滚动
	//		item.addEventListener('touchmove', function(event) {
	//			//当屏幕上有多个touch事件或者缩放过，就不执行move操作
	//			if(event.targetTouches.length > 1 || event.scale && event.scale !== 1) {
	//				return;
	//			}
	//			var touch = event.targetTouches[0];
	//
	//			endPos = {
	//				x: touch.pageX - startPos.x,
	//				y: touch.pageY - startPos.y
	//			}
	//			isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1 : 0; //这里做判断想x，y坐标的最终值于初始值得绝对值；如果等于1那么是纵向移动0横向
	//			if(isScrolling === 1) {
	//				if(Math.abs(endPos.x) > 20) {
	//
	//					this.style.transform = 'rotateX(90deg)';
	//renderPage()
	//				}
	//				if(endPos.y > 0 && Math.abs(endPos.x) > 20) {
	//
	//					this.style.transform = 'rotateX(0deg)';
	//				}
	//			}
	//
	//		});
	//		item.addEventListener('touchend', function() {
	//
	//		})
	//		event.preventDefault();
	//	})

})()