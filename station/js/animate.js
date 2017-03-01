;
(function() {
	//手风琴效果
	var item = document.getElementById("item")
	var lis = item.getElementsByTagName('li')
	var last = 0;
	for(var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onclick = function() {
			for(var i = 0; i < lis.length; i++) {
				lis[i].style.left = i * 5.4 + "rem";
				lis[i].style.background = '';
				lis[i].style.width = '5.4rem';
				if(i > this.index) {
					lis[i].style.left = i * 5.4 + 10.6 + 'rem';
					lis[this.index].style.width = '16.2rem';
					lis[this.index].style.background = '#fff';
				}
				if(i == lis.length - 1) {
					lis[i].style.background = '#fff';
					lis[i].style.width = '16.2rem';
				}
			}
		}
		render(i);
	}

	function render(i) {
		lis[0].style.width = '16.2rem';
		lis[i].style.left = i * 5.4 + "rem";
	}
	lis[4].style.width = '16.2rem';
	//点击1的时候page页面出现

	$('#item .H').on('touchstart', function() {
			$('#page').show().animate({
				height: '60rem'
			}, 600);
			$('#page').html('<div class="ico"></div><div class="PI"></div><div class="job"></div><p class="button fa fa-angle-down"></p>');
			$('#page .ico').html('<p><span class= "font-span">擅长技能</span></p>')
			$('#page .PI').html('<span>Js</span><span>Ps</span><span>Html</span><span>css</span>');
			$('#page .job').html('<div>职位：前端工程师</div><div>薪资：....</div>')

			$('#page p span').each(function(index, item) {
					$(item).delay(300).addClass('font-span')
						.animate({
							'opacity': '1',
							'top': '0.1rem',
							'left': '2rem'
						}, 400, function() {
							$(this).css('transform', 'rotateZ(0deg)')
						});
				})
				//给生成的圆圈做动画效果;
			$('.PI span').eq(0).addClass('li_font')
				.delay(500).animate({
					opacity: 1,
					width: '10rem',
					height: '10rem',
					fontSize: '3rem',
					lineHeight: '10rem'
				}, 900);
			$('.PI span').eq(1).addClass('li_font')
				.delay(600).animate({
					opacity: 1,
					width: '7.4rem',
					height: '7.4rem',
					fontSize: '2rem',
					lineHeight: '7.4rem'
				}, 900);
			$('.PI span').eq(2).addClass('li_font')
				.delay(600).animate({
					opacity: 1,
					width: '6.6rem',
					height: '6.6rem',
					fontSize: '2rem',
					lineHeight: '6.6rem'
				}, 800);
			$('.PI span').eq(3).addClass('li_font')
				.delay(800).animate({
					opacity: 1,
					width: '9.4rem',
					height: '9.4rem',
					fontSize: '2rem',
					lineHeight: '9.4rem'
				}, 1000);

			$('.job div').eq(0).delay(1400).animate({
				left: '2.7rem'
			}, 1000)
			$('.job div').eq(1).delay(1400).animate({
				left: '21.1rem'
			}, 1000)

			$('.button').on('touchstart', function() {
				$('#page').animate({
					'height': 0
				}, 600, function() {
					$('#page').html(' ')
				})
			})

		})
		//-----------------------------------------------------------------
	$('#item .C').on('touchstart', function() {
			$('#file').show().animate({
					height: '60rem'
				}, 600)
				//因为每次都要重新渲染 所以在js生成
			$('#file').html('<h3 class = "name">个人简历模板</h3><div class = "file_title"></div><ul class="file_mail"></ul><p class="myfile"></p><p class="button fa fa-angle-down"></p>')
			$('#file .file_title').html('<div class = "resume">个人简历</div><span class="RESUME">RESUME</span><div class = "portrait"><p></p></div>');
			$('#file .file_mail').html('<li>姓名：蒙奇.D.路飞</li><li>专业：航海</li><li>梦想：成为海贼王的男人</li><li>地址：大航海黄金梅里号</li><li>15127857033</li><li>1292466231@qq.com</li><li>口号：燕子不归 紫薇浸月 北方花开 南方花谢</li>');
			$('#file .myfile').html('<span class="font-span">个人信息</span>')

			$('.file_mail').delay(400).animate({
					left: 0
				}, 1000)
				//resume的动画效果
			$('.resume').delay(400).animate({
				top: '3rem'
			}, 900)
			$('.RESUME').delay(400).animate({
					top: '6.5rem'
				}, 1000)
				//头像的动画效果
			$('.portrait').delay(400).animate({
				width: '12.6rem',
				left: '10.7rem',
				height: '12.6rem',
				opacity: '1'
			}, 600)
			$('.portrait p').delay(400).animate({
					width: '12.6rem',
					height: '12.6rem',
					opacity: '1'
				}, 600)
				//复用代码完场动画效果
			FontSize();
			//点击button让file页面的高度为0实现隐藏效果
			$('.button').on('touchstart', function() {
				$('#file').animate({
					'height': 0
				}, 600, function() {
					$('#file').html(' ')
				})
			})
		})
		//-----------------------------------------------
		//点击2的时候weather页面出现

	//这里是公共函数
	function FontSize() {
		$('.font-span').delay(300)
			.animate({
				'opacity': '1',
				'top': '0.1rem',
				'left': '2rem'
			}, 400, function() {
				$(this).css('transform', 'rotateZ(0deg)')
			});

	}
	$('#item .J').on('touchstart', function() {
		$('#weather').show().animate({
			height: '60rem'
		}, 600);

		//生成内容
		$('#weather').html('<h3 class = "name">个人简历模板</h3><p class="myway"></p><p class = "boundary"></p><ul class = "year"></ul><p class="button fa fa-angle-down"></p>')
		$('#weather .myway').html('<span class= "font-span">航海路程</span>');
		$('#weather .boundary').html('<span></span><span></span><span></span><span></span><span></span>')
		$('#weather .year').html('<li><span>汝乃天骄，何不上九霄</span></li><li><span>挑兮狎兮，欲成吾妻。逗乎呢乎，终成吾夫</span></li><li><span>太古滔滔之气，一泄于此</span></li><li><span>阳市之人，未解吾之千千劫也！</span></li><li><span>与子同游，动辄覆舟</span></li>')
			//完成动画效果
		FontSize();
		//li的运动过程
		$('#weather .year li:even').each(function(index, item) {
			$(item).delay(800).animate({
				left: '1.4rem'
			}, 600)
		})
		$('#weather .year li:odd').each(function(index, item) {
				$(item).delay(800).animate({
					left: '21rem'
				}, 600)
			})
			//这里是分界线的效果
		$('#weather .boundary').delay(400).animate({
			top: '11rem'
		}, 1600);
		//小圆点效果
		$('#weather .boundary span').each(function(index, item) {
			$(item).delay(1600 + index * 100).animate({
				width: '1.3rem',
				height: '1.2rem',
				left: '-0.5rem'
			}, 1200 + index * 100)
		});
		//点击关闭weather页面
		$('.button').on('touchstart', function() {
			$('#weather').animate({
				'height': 0
			}, 600, function() {
				$('#weather').html(' ')
			})
		})
	});
	//----------------------------------------------------
	//点击code渲染页面
	$('#item .P').on('touchstart', function() {
			$('#code').show().delay(200).animate({
				height: '60rem'
			}, 800);

			//生成页面的所有元素

			$('#code').html('<h3 class = "name">个人简历模板</h3><p class="thename"></p><div class="threeD"></div><span class ="thanks">THANK YOU</span><div class="twocode"></div><span class = "scan">扫面或者长按二维码联系我</span><p class="button fa fa-angle-down"></p>')
			$('#code .thename').html('<span class="font-span">关于前端</span>')
			$('#code .threeD').html('<div class="word">jQuery是继Prototype之后又一个优秀的JavaScript库，它是一个由Joho Resig创建于2006年1月的开源项目。jQuery凭借简洁的语法和跨平台的兼容性。极大地简化了JavaScript开发人员遍历HTML文档.操作DOM.处理事件.执行动画和开发Ajax。它独特而又优雅的代码风格改变了JavaScript程序员的设计思想和编写程序方式。</div>')
			$('.twocode').html('<img src="img/04.png"/>')
				//动画效果
			$('.thanks').show().delay(600).animate({
				top: '30rem'
			}, 400)
			$('.scan').show().delay(600).animate({
					top: '47rem'
				}, 400)
				//二维码的生成与动画效果
			$('.twocode').show().delay(800).animate({
				left: '12.8rem',
				top: '33rem',
				width: '10.6rem',
				height: '10.6rem'
			}, 900)
			$('.twocode img').show().delay(800).animate({
				left: '12.8rem',
				top: '33rem',
				width: '10.6rem',
				height: '10.6rem'
			}, 900)
			$('.word').addClass('addword')
			FontSize();
			//点击关闭code页面
			$('.button').on('touchstart', function() {
				$('#code').animate({
					'height': 0
				}, 600, function() {
					$('#code').html(' ')
				})
			})
		})
		//===============================
		//第五个页面关于photo的
	$('#item .D').on('touchstart', function() {
		$('#photo').show().animate({
			height: '60rem'
		}, 600);
		$('#photo').html('<h3 class="name">个人简历模板</h3><div class="mask"></div><p class="button fa fa-angle-down"></p>');
		$('#photo .mask').html('<img src="img/v00.png"class="Tocode" /><ul class="mask_mail"></ul>')
		$('.mask_mail').html('<li><img src="img/09.png" /> 手机：15127857033</li><li><img src="img/07.png" /> QQ：1466389822</li><li><img src="img/08.png" /> 微信：1466389822</li>');

		//li的移动效果这里要弹跳效果
		$('.mask li').each(function(index, item) {
			$(item).delay(index * 200 + 900).animate({
				top: 32.5 + index * 5 + 'rem'
			}, 400).animate({
				top: 34 + index * 5 + 'rem'
			}, 100).animate({
				top: 32.5 + index * 5 + 'rem'
			}, 100).animate({
				top: 34 + index * 5 + 'rem'
			}, 100)
		})
		$('.Tocode').show().delay(1800).animate({
			opacity: '1'
		}, 1800)

		$('.button').on('touchstart', function() {
			$('#photo').animate({
				'height': 0
			}, 600, function() {
				$('#photo').html(' ')

			})
		})
	});

	//钟表的生成
	//	var Timer = document.getElementById("Timer");
	//
	//	var box = document.getElementById("box")
	//	var str = '';
	//	for(var i = 0; i < 60; i++) {
	//		if(i % 5 == 0) {
	//			str += '<div class="div1" style="transform:rotate(' + (i * 6) + 'deg);"></div>';
	//		} else {
	//			str += '<div class="div1" style="transform:rotate(' + (i * 6) + 'deg)"></div>';
	//		}
	//		str += '<span id="newDate"></span>';
	//	}
	//	box.innerHTML = str;
	//
	//	var divs = box.getElementsByTagName('div');
	////小刻度的动画效果
	//	var a = 0;
	//		setInterval(function() {
	//				a++;
	//				if(a == divs.length) {
	//					a = 0;
	//				}
	//				for(var i = 0; i < divs.length; i++) {
	//					divs[i].style.height = '1rem'
	//				}
	//				divs[a].style.height = '1.8rem';
	//				if(a + 1 == divs.length) {
	//					divs[0].style.height = '1.4rem';
	//				} else {
	//					divs[a + 1].style.height = '1.4rem';
	//				}
	//			},100)
	//	//=============================
	//	//时钟内部时间的变化??
	//	var newDate = document.getElementById('newDate');
	//	setInterval(function() {
	//		var H = new Date().getHours();
	//		var M = new Date().getMinutes();
	//		var S = new Date().getSeconds();
	//		if(H<10){
	//			H='0'+H;
	//		}
	//		if(M < 10) {
	//			M = '0' + M
	//		}
	//		if(S < 10) {
	//			S = '0' + S;
	//		}
	//		newDate.innerHTML = H + ':' + M + ":" + S;
	//	}, 1000)
	//
	//	var out = document.getElementById('out');
	//
	//	var Str = '';
	//	for(var i = 0; i < 60; i++) {
	//		if(i % 5 == 0) {
	//			Str += '<div class="div2" style="transform:rotate(' + (i * 6) + 'deg)"><p class="bellows"></p></div>';
	//		}
	//	}
	//	out.innerHTML = Str;
	//	//三个圆圈的设置 因为是直接设置的div2所以角度不一样要再次添加一个标签把文字更正
	//	
	//	$('.div2').eq(0).addClass('leter').css({
	//		'left':'10rem',
	//		'top':'-2.5rem'
	//	}).text('lover');
	//	$('.div2').eq(3).addClass('leter').css({
	//		'left':'15rem',
	//		'top':'-2.5rem'
	//	}).html('<p class="ffont">sunshin</p>');
	//	$('.div2 .ffont').css({
	//		'transform':'rotateZ(-78deg)'
	//	})
	//	$('.div2').eq(8).addClass('leter').css({
	//		'left':'11rem',
	//		'top':'2.5rem'
	//	}).html('<p class="font_two">water</p>')
	//	$('.div2 .font_two').css({
	//		'transform':'rotateZ(110deg)'
	//	})

})()