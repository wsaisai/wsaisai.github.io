;
(function() {
	

//第一屏结构
var first = document.querySelector('.first');
first.innerHTML =renderfirst() 
function renderfirst(){
	var str='<div class="first_bg"></div>';
		
		str+='<img src="img/f45.png" class="F_line"/>';
		str+='<img src="img/f13.png" class="F_title"/>';
		str+='<img src="img/f02.png" class="F_name F" />';
		str+='<ul class="F_fa"><li class="F_fa_l"></li><li class="F_fa_l"></li><li class="F_fa_l"></li><li class="F_fa_r"></li><li class="F_fa_r"></li><li class="F_fa_r"></li><li class="F_fa_R"></li></ul>';
		str+='<ul class="F_c"><li></li><li></li><li></li><li></li></ul>';
		str+='<ul class="F_button"><li>吐槽</li><li>嘲讽</li><li>说教</li><li>攻击</li></ul>';
		str+='<div class="F_mail"><span class="F_mai">妈妈用她修炼几十年的"言击术"</span><span class="F_mailss">打得我们没有还手之力</span></div>';
		str+='<div class="button"><p></p><p></p></div>';
	;
	return str;
}
//第一屏动画
firstpage()
function firstpage(){
	setTimeout(function(){
		$('.F_name').removeClass('F')
	},500);
	
	$('.F_line').animate({'top':'9.5rem'},300);
	$('.F_fa_l').each(function(index,item){
		$(item).delay(200+index*200).animate({'left':'9rem'},300)
	})
	$('.F_fa_r').each(function(index,item){
		$(item).delay(600+index*200).animate({'left':'9rem'},400)
	})
	$('.F_fa_R').delay(1600).animate({'left':'9rem'},400,function(){
		 firstlate()
	});
	$('.F_title').css({'-webkit-transform':'translateZ('+7+'rem)','opacity':'1','-webkit-transition-delay':'3s'})
	//文字部分
	$('.F_mai').delay(3200).animate({'top':'0.8rem'},400);
	$('.F_mailss').delay(3200).animate({'top':'3rem'},500,function(){
		Fbutton()
	});
}
//人影部分为了结构清晰写在一个函数中
function firstlate(){
	$('.F_c li').each(function(index,item){
		$(item).css({'transform':'translateZ('+(index*10+10)+'rem)','transition-delay':index*0.1+'s'}).delay(100).animate({'opacity':'0'},300)
	})
}
//四个圆圈也是为了结构写在自己封的函数中
function Fbutton(){
	$('.F_button li').eq(0).animate({'left':'0.7rem','top':'20.2rem','opacity':'1','width':'5.6rem','height':'5.6rem','font-size':'2.2rem'},400);
	$('.F_button li').eq(1).delay(100).animate({'left':'25.9rem','top':'20.2rem','opacity':'1','width':'5.6rem','height':'5.6rem','font-size':'2.2rem'},400);
	$('.F_button li').eq(2).delay(300).animate({'left':'0.7rem','top':'31rem','opacity':'1','width':'5.6rem','height':'5.6rem','font-size':'2.2rem'},400);
	$('.F_button li').eq(3).delay(300).animate({'left':'25.9rem','top':'31rem','opacity':'1','width':'5.6rem','height':'5.6rem','font-size':'2.2rem'},400);
}






Move()
function Move(){
	var content = $('.content');
	var H = $('.page').eq(0).height();
	//找到所有的page
	var len = $('.page').length;

	content.height(H*len);
	
	Scroll()	
function Scroll(){	
		var endPos = null;
		var startPos = null;
		var Top = 0;
		$('.page').each(function(index, item) {
			$(item).on('touchstart', function(event) {
				var touch = event.targetTouches[0]; //获取第一个touch
				Top = $(this).offset().top; //最开始的Top定位值
				startPos = { //第一个touch的坐标，距离屏幕的xy轴
					x: touch.pageX,
					y: touch.pageY,
					time: +new Date
				};
				isScrolling = 0;
				//move事件
				$(item).on('touchmove', function(event) {
					//当屏幕上有多个touch事件或者缩放过，就不执行move操作
					if(event.targetTouches.length > 1 || event.scale && event.scale !== 1) {
						return;
					}
					var touch = event.targetTouches[0];
					endPos = {
						x: touch.pageX - startPos.x,
						y: touch.pageY - startPos.y
					}
					isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1 : 0; //这里做判断想x，y坐标的最终值于初始值得绝对值；如果等于1那么是纵向移动0横向
					if(isScrolling === 1) {
						//向上滑
						if(endPos.y<0 && endPos.y<-20) {
							if(index==len-1){
								return;
							}
							$('.content').css({'top':-(index*H)+endPos.y+'px'});
						}
						//向下滑
						if(endPos.y>0 && endPos.y>20){
							if(index==0){
								return;
							}
							$('.content').css({'top':(-index*H)+endPos.y+'px'})
						}					
						event.preventDefault(); //组织默认事件，滚屏发生
					}
				});
				$(item).on('touchend', function(event) {
					if(isScrolling == 1) {
						//向上滑
						if(endPos.y<0 && endPos.y<-20){
							if(index==len-1){
								return;
							}	
							$('.content').stop().animate({'top':-(index+1)*H+'px'},400);
							console.log(index)
							if(index==0){
								$('.Secend').html(renderSe())
								Seanimate()
								$('.first').html('')
							}
							if(index ==1){
								$('.Three').html(renderTh());
								Thanimate();
								$('.Secend').html('')
							}
							if(index==2){
								$('.Four').html(renderFor());
									Fouranimate();
								$('.Three').html();	
							}
							if(index==3){
								$('.Five').html(renderFiv());
								Fivanimate()
								$('.Four').html('');
							}
							if(index==4){
								$('.Six').html(renderSix())
								Sixanimate();
								$('.Five').html('');
							}
							if(index==5){
								$('.Seven').html(renderSev());
								Sevanimate();
								$('.Six').html('');
							}
							if(index==6){
								$('.Eight').html(renderEi());
								Eianimate();
								$('.Seven').html('');
							}
							
						}
						//向下滑
						if(endPos.y>0 && endPos.y>20){
							if(index==0){
								return;
							}
							$('.content').stop().animate({'top':-(index-1)*H+'px'},400);
							if(index==1){
								$('.Secend').html('');
								$('.first').html(renderfirst());
								firstpage()
							}
							if(index ==2){
								$('.Three').html('');
								$('.Secend').html(renderSe())
								Seanimate()
							}
							if(index==3){
								$('.Four').html('');
								$('.Three').html(renderTh());
								Thanimate();
							}
							if(index==4){
								$('.Five').html('');
								$('.Four').html(renderFor());
								Fouranimate();
							}
							if(index==5){
								$('.Six').html('');
								$('.Five').html(renderFiv());
								Fivanimate()
							}
							if(index==6){
								$('.Six').html(renderSix())
								Sixanimate();
								$('.Seven').html('');
							}
							if(index==7){
								$('.Seven').html(renderSev());
								Sevanimate();
								$('.Eight').html('');
							}
						}
					}
				})
				return false;
			});
		})
}
	
}

//碟片的播放

Sing()
function Sing(){
	var audio = document.getElementsByTagName('audio')[0];
	var muscle = document.getElementsByClassName('muscle')[0];
	var Media = document.getElementById('Media');
		audio.play();
	//当音乐播放完就停止的时候，自动停止光盘旋转效果；
	audio.addEventListener('ended',function(event){
		muscle.style.animationPlayState = 'paused';
		muscle.style.webkitAnimationPlayState = 'paused';
	},false)
	muscle.addEventListener('touchstart',function(event){
		if(audio.paused){
			audio.play();
			this.style.animationPlayState="running";
			this.style.webkitAnimationPlayState ="running";
		}
		else{
			audio.pause();
			this.style.animationPlayState="paused";
			this.style.webkitAnimationPlayState ="paused";
		}
	},false)
}















})()