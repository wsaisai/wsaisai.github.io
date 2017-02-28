;(function(){
	//最下面的三角
	$('.arrow').on('mouseover',function(){
		$('.arrow span').eq(0).css({'transform':'rotate(30deg)','margin-right':"-5px",'background':'#d0416d'});
		$('.arrow span').eq(1).css({'transform':'rotate(-30deg)','margin-left':"-5px",'background':'#d0416d'});
	})
	.on('mouseout',function(){
		$('.arrow span').eq(0).css({'transform':'rotate(45deg)','margin-right':"-7px",'background':'#c5c5c5'});
		$('.arrow span').eq(1).css({'transform':'rotate(-45deg)','margin-left':"-7px",'background':'#c5c5c5'});
	})
	var Teroff = true;
	var Ter=setInterval(function(){
		if(Teroff){
			$('.arrow span').eq(0).css({'background':'#fff'})
			$('.arrow span').eq(1).css({'background':'#fff'})
		}else{
			$('.arrow span').eq(0).css({'background':'#d0416d'})
			$('.arrow span').eq(1).css({'background':'#d0416d'})
		}
		Teroff = !Teroff;
	},1000)
	//左上角的×
	$('.P_btn').on('mouseover',function(){
		$(this).css({'background':'#fff'});
		$(this).children().css('background','#2c2c2c')
	})
	.on('mouseout',function(){
		$(this).css({'background':'#2c2c2c'});
		$(this).children().css('background','#fff')
	})
	
	var PMlis = document.getElementsByClassName('PMlis');
	var P_mask = document.querySelector('.P_mask')
//页面的背景颜色的变化与定时器
	var a =0;
	var PM_hover = 20;
	PMlis[0].style.background='#d0416d';
	var Bgcolor = ['#fff','#9e9e9e','#cccccc','#131c25','#1c1132'];
	var BGimg = ['img/PH02.jpg','img/PH02.jpg','img/PH02.jpg','img/PH02.jpg','img/PH02.jpg']
	var settimer = setInterval(function(){
			a++;
			PM_hover=PM_hover-10;
			if(PM_hover <= -30){
				PM_hover=20;
			}
			if(a>=PMlis.length){
				a=0;
			}
			for(var i=0;i<PMlis.length;i++){
				PMlis[i].style.background='#ebebeb';
			}
			$('.P_mask').css({'background-color':Bgcolor[a]});
			PMlis[a].style.background='#d0416d';
			$('.PM_befor').css({'transform':'scale(1.1, 1) skew(0deg, '+PM_hover+'deg)','transition':'2s'})
		},5000)
	
	$('.PMlis').on('mouseover',function(){
		var index = $(this).index();
		clearInterval(settimer);
		$('.PMlis').css('background','#d0416d').not(':eq('+index+')').css('background','#ebebeb');
		$('.P_mask').css({'background':Bgcolor[index]})	
	})
	.on('mouseout',function(){
		a = $(this).index();
			settimer = setInterval(function(){
			a++;
			if(a>=PMlis.length){
				a=0;
			}
			for(var i=0;i<PMlis.length;i++){
				PMlis[i].style.background='#ebebeb';
			}
			$('.P_mask').css({'background-color':Bgcolor[a]});
			PMlis[a].style.background='#d0416d';
		},5000)
	})
	
$('.PM_word').on('mouseover',function(){
	$(this).children().css({'transform':'rotateY(-10deg)'})
}).on('mouseout',function(){
	$(this).children('.PM_after').css({'transform':'rotateY(-40deg)'})
	$(this).children('.PM_befor').css({'transform':'scale(1.1, 1) skew(0deg, 20deg)'})
})
//p_mask的上拉效果	
$('.arrow').on('click',function(){
	$('.Ph_title').html(Cr());
	$('.P_first').animate({
		'height':'0'
	},400)
	$(".Ph_cont").delay(400).animate({'opacity':'1'},400,function(){
		var Acolor = document.getElementsByClassName('Acolor');
		Acolor[0].style.background='#fff';
		var Se = setTimeout(function(){
			animeteFirst()
		})
		var a = 0;
		var NG = 0;
		var tot = setInterval(function(){
			NG++;
			for(var i=0;i<Acolor.length;i++){
				Acolor[i].style.background = '';	
			}
			if(NG>=3){
				NG = 0;
			}
			Acolor[NG].style.background = '#fff';
			a++;
			if(a >=3){
				a =1
			}
			if(a ==1){
				animateSecend()
			}else if(a==2){
				animatethree()	
			}else if(a ==3){
				animeteFirst()
			}
		},6000)
		//点击P_btnd的时候要清除定时器 和 清空页面
		$(".PC_head .P_btn").on('click',function(){
			clearInterval(tot);
			clearTimeout(Se)
			$('.Ph_title').html('');
			
			$('.Ph_cont').animate({'opacity':'0'},400)
			$('.P_first').stop().animate({'height':'100%'},500)
		})
		//不但是P_btn的点击要消除定时器和清空Ph_title 左边的菜单也要清除和清空
		var lis = $('#list_nav li') 
		lis.on('click',function(){
			clearInterval(tot);
			clearTimeout(Se)
			$('.Ph_title').html('');
		})
	})

})
//将生成的所有图片放进Ph-wrap中
$('.Ph_wrap').html(Cretawrap());

$('.Ph_item').on('mouseover',function(){
	$(this).children('.Ph_mails').css({'background':'#d0416d','color':'#fff'});
	$(this).find('.Ph_imgs').css({'transform':'translateZ(100px)'});
	$(this).find('.Ph_mask').css({'opacity':'1'});
	$(this).find('.Ph_center').css({'transform':'translateZ(0px)'})
}).on('mouseout',function(){
	$(this).children('.Ph_mails').css({'background':'#ededee','color':'#666'});
	$(this).find('.Ph_imgs').css({'transform':'translateZ(0px)'});
	$(this).find('.Ph_mask').css({'opacity':'0'});
	$(this).find('.Ph_center').css({'transform':'translateZ(18px)'})	
})

//这里是蓝色Ph_title的部分
function setphcot(){
	var Acolor = document.getElementsByClassName('Acolor')
	var PING = 0;
	var NG = 0;
	animeteFirst();
	Acolor[0].style.background='#fff';
	setInterval(function(){
		PING++;
		NG++;
		for(var i=0;i<Acolor.length;i++){
			Acolor[i].style.background = '';	
		}
		if(NG>=3){
			NG = 0;
		}
		Acolor[NG].style.background = '#fff';
		if(PING>=4){
			PING = 1;			
		}
		if(PING == 1){
			animateSecend()
		}else if(PING == 2){
			animatethree()		
		}else if( PING ==3){
			animeteFirst()			
		}		
	},6000)
}
	//第一屏开始
	function animeteFirst(){
		$('.chair_L').animate({'top':'0','opacity':'1'},500).delay(4000).animate({'top':'480px','opacity':'0'},500);
		$('.chair_R').delay(200).animate({'top':'0','opacity':'1'},500).delay(4200).animate({'top':'480px','opacity':'0'},500);
		$('.chair_title').animate({'height':'82px','top':'132px','opacity':'1'},600).delay(4000).animate({'height':'0px','top':'56px','opacity':'0'},600);
		$('.chair_wrap').delay(200).animate({'top':'213px','opacity':'1'},600).delay(4200).animate({'top':'250px','opacity':'0'},600);
		$('.Svg').html(Creatsvg());
		$('Svg path').addClass('path');
		$('.chair_run').show().delay(2000).animate({'width':'230px'},800,function(){
			$('.chair_run p').animate({'opacity':'1'},600,function(){
				$('.Svg').html('');
				setTimeout(function(){			
					$('.chair_run').animate({'left':'400px','top':'326px','width':'0'},700)
					$('.chair_run p').animate({'opacity':'0'},400);
					$('.high_ipad').animate({'width':'0px','height':'0','left':'836px','top':'227px','opacity':'0'},600);
				},800)
			})
		});
	}
	//第二屏开始
	function animateSecend(){
		$('.iphone_pid').animate({'top':'160px'},300).delay(4500).animate({'top':'500px'},400);
		$('.iphone_hand').animate({'left':'270px','opacity':'1'},400).delay(4500).animate({'left':'100px','opacity':'0'},400)
		$('.iphone_i').delay(100).animate({'top':'324px'},400).delay(4500).animate({'top':'500px'},300);
		$('.iphone_mouse').animate({'left':'769px','opacity':'1'},300).delay(4500).animate({'left':'900px','opacity':'0'},400)
		$('.iphone_title').animate({'top':'43px','opacity':'1'},500).animate({'top':'35'},100).animate({'top':'43px'},100).animate({'top':'35px'},100).delay(4500).animate({'top':'10px','opacity':'0'},400)
		$('.iphone_mail').animate({'top':'96px','opacity':'1'},500).animate({'top':'91'},100).animate({'top':'96px'},100).animate({'top':'91px'},100).delay(4500).animate({'top':'60px','opacity':'0'},500)
	}
	//第三屏开始
	function animatethree(){
		$('.high_font').animate({'top':'74px','opacity':'1'},600).delay(3000).animate({'top':'40px','opacity':'0'},400);
		$('.high_s').animate({'top':'150px','opacity':'1'},600).delay(3000).animate({'top':'80px','opacity':'0'},600);
		$('.high_word').animate({'top':'230px','opacity':'1'},500).delay(3000).animate({'top':'300px','opacity':'0'},500)
		$('.high_ipad').animate({'width':'430px','height':"455px",'left':'621px','top':'0','opacity':'1'},600)
		
		$('.high_key').animate({'top':'441px'},400).delay(3000).animate({'top':'500px'},400);
		$('.high_mouse').animate({'top':'452px'},400).delay(3000).animate({'top':'500px'},400);
		$('.Svg').html(Creatsvg());
		$('Svg path').addClass('path')
		$('.chair_run').show().delay(2000).animate({'width':'230px'},800,function(){
			$('.chair_run p').animate({'opacity':'1'},600,function(){
				$('.Svg').html('');
				setTimeout(function(){			
					$('.chair_run').animate({'left':'400px','top':'326px','width':'0'},700)
					$('.chair_run p').animate({'opacity':'0'},400);
					$('.high_ipad').animate({'width':'0px','height':'0','left':'836px','top':'227px','opacity':'0'},600);
				},800)
			})
		});
	}
	function Creatsvg(){
		var str=`	
			<path d="M0 30 L0 0 L230 0 L230 30 Z" stroke="#fff" stroke-width="2" fill="none" />
		`;
		return str;
	}	
	function Cretawrap(){
	var photos = Cphoto.photo;	
	var str = '';
	for(var i =0;i<photos.length;i++){
		str+=`
			<div class="Ph_item">
				<div class="Ph_pa">
					<div class="Ph_mask">
						<span class="Ph_center">VIEW MORE</p>
					</div>
					<img class="Ph_imgs"src="${photos[i].img}" />
				</div>
				<div class="Ph_mails">
					<p class="Ph_web"><span>${photos[i].title}</span></p>
					<p class="Ph_com"><span>${photos[i].font}</span></p>
					<p class="Ph_name"><span>${Cphoto.name}</span></p>
				</div>
			</div>
		`;
	}
	return str;
}

function Cr(){
	var str=`
	<div class="toothed">
						<span class='fa fa-cog '></span>
					</div>
					
					
					<img src="img/s01.png" class="chair_L"/>
					<img src="img/s02.png" class="chair_R"/>
					<div class="chair_title">our Life's Work</div>
					<div class="chair_wrap">
						<p>We Put Our Hearts and Souls into Making Every Project.</p>
						<p>We Undertake the Very Best It Can Possibly Be</p>
					</div>
						<svg class="Svg" width="230" height="30" version="1.1"xmlns="http://www.w3.org/2000/svg">
						</svg>
					<div class="chair_run"><p>I LIKE IT! PURCHASE</p></div>
					
					<div class="iphone_title">Better Websites for All</div>
					<div class= "iphone_mail">We Created Beautifully-Crafted Websites that Stand out from the Crowd</div>
					<img src="img/s07.png" class="iphone_pid"/>
					<img src="img/s04.png" class="iphone_hand"/>
					<img src="img/s05.png" class="iphone_i"/>
					<img src="img/s08.png" class="iphone_mouse"/>
					
					
					<img src="img/s03.png" class="high_ipad"/>
					<img src="img/s06.png" class="high_key"/>
					<img src="img/s09.png" class="high_mouse"/>
					<p class="high_font">High</p>
					<p class="high_s">Standards</p>
					<div class="high_word">Our Success is not Only Due to the Quality of Our Work. It's Down to Attitude, Our Approach and the Way We Treat Our Clients</div>
					<div class="chair_B">
						<a class="Acolor" href="#"></a>
						<a class="Acolor"href="#"></a>
						<a class="Acolor"href="#"></a>
					</div>
	`;
	return str;
}
	
	
	
})()
