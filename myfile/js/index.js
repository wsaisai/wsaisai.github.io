;
(function() {
	//点击button的时候让左侧部分显示出来
//	var onoff = true;
//	$('.button').on('click', function() {
//		if(onoff) {
//			$('.button p').eq(0).animate({
//				'top': '20px'
//			}, 600, function() {
//				$('.button p').eq(0).css('opacity', 0)
//				$('.button p').eq(1).css({
//					'transform': 'rotate(45deg)',
//					'transition': '1s'
//				})
//			})
//			$('.button p').eq(3).animate({
//				'top': '20px'
//			}, 600, function() {
//				$('.button p').eq(3).css('opacity', 0)
//				$('.button p').eq(2).css({
//					'transform': 'rotate(-45deg)',
//					'transition': '1s'
//				})
//			})
//			$('#File_content').delay(400).animate({
//				left: '200px'
//			}, 600);
//		} else {
//			$('.button p').eq(1).css({
//				'transform': 'rotate(0deg)',
//				'transition': '1s'
//			})
//			$('.button p').eq(2).css({
//				'transform': 'rotate(0deg)',
//				'transition': '1s'
//			});
//			$('.button p').eq(0).delay(1000).animate({
//				'opacity': 1,
//				'top': '10px'
//			}, 600)
//			$('.button p').eq(3).delay(1000).animate({
//				'opacity': 1,
//				'top': '30px'
//			}, 600)
//			$('#File_content').delay(400).animate({
//				left: '0'
//			}, 600);
//		}
//		onoff = !onoff;
//	})
//
////	$('.Next').on('click', function() {
//////		$('#File_content').addClass('Transform');
//////		
//////		$('.File_top').addClass('Transform_top');
////		$('#File_content').animate({'opacity':'0'},400,function(){$('#File_content').hide()})
////		$('.File_top').show(400).animate({'opacity':'1'},400)
////	})
////	
////	
////	$('#B').on('click',function(){
////		$('#File_content').show(400).animate({'opacity':'1'},400)
////		$('.File_top').animate({'opacity':'0'},400,function(){$('.File_top').hide()})
////		
////	})
////生成钟表
//	var Timer_clock = document.querySelector('.Timer_clock');
//	var str = '';
//	for(var i = 0; i <120; i++) {
//		if(i % 5 == 0) {
//			str += '<div class="div1" style="transform:rotate(' + (i * 3) + 'deg);"></div>';
//		} else {
//			str += '<div class="div1" style="transform:rotate(' + (i * 3) + 'deg)"></div>';
//		}
//	}
//	str+='<div class="Timer_date"><h2 class="Timer_title">Funny hours</h2><span class="Timer_hours"></span><p class="Timer_s"></p></div>'
//	Timer_clock.innerHTML=str;
//	var Timer_hours = document.getElementsByClassName("Timer_hours")[0];
//	var Timer_s = document.getElementsByClassName("Timer_s")[0];
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
//		var s = String(S).slice(0,1)
//		var a = String(S).slice(1,2)
//		Timer_hours.innerHTML = H + ':' + M + ":" + s;
//		Timer_s.innerHTML =a;
//	}, 1000)
//
//		var divs =Timer_clock.getElementsByClassName('div1')
////小刻度的动画效果
////	var a = 0;
////		setInterval(function() {
////				a++;
////				if(a == divs.length) {
////					a = 0;
////				}
////				for(var i = 0; i < divs.length; i++) {
////					divs[i].style.height = '20px'
////				}
////				divs[a].style.height = '29px';
////				if(a + 1 == divs.length) {
////					divs[0].style.height = '20px';
////				} else {
////					divs[a + 1].style.height = '29px';
////				}
////			},100)
////生成的五个圆圈
//var Out = document.getElementsByClassName('Timer_out')[0]
//var out = '';
//for(var i =0; i<5; i++){
//	out+='<div class="out_child"style="transform:rotate(' + (i * 72) + 'deg);"><div class="point_item"><p class="out_title"></p><p class="photo"></p><p class="mask"></p></div></div>'
//}
////渲染圆圈
//Out.innerHTML = out;
//$('.point_item').eq(0).addClass('img_1');
//$('.point_item').eq(1).addClass('img_2');
//$('.point_item').eq(2).addClass('img_3');
//$('.point_item').eq(3).text('sunny');
//$('.point_item').eq(4).text('water');
//$('.photo').eq(0).addClass("photo_first").prev().text('flower');
//$('.photo').eq(1).addClass("photo_secend").prev().text('sakura');
//$('.photo').eq(2).addClass("photo_thred").prev().text('lover');
//
//$('.mask').each(function(index,item){
//	$(item).on('mouseover',function(){
//		$('.mask').eq(index).delay(200).animate({'width':'0','height':'0','top':'30px','left':'30px'},400)
//		$('.photo').eq(index).delay(200).animate({'width':'100px','height':'100px','left':'-20px','top':'-10px'},600);
//		$('.out_title').eq(index).delay(100).animate({'height':'50px','top':'0','opacity':'1'},800)
//	});
//	$('.out_title').on('mouseout',function(){
//		$('.photo').eq(index).delay(300).animate({'width':'0px','height':'0px','left':'30px','top':'30px'},600);
//		$('.mask').eq(index).delay(600).animate({'width':'60px','height':'60px','top':'0px','left':'0px'},400)
//		$('.out_title').eq(index).delay(200).animate({'height':'0px','top':'60px','opacity':'0'},800)
//	})
//})
//
//
//
////生成的小圆点
//var point = document.getElementsByClassName("Timer_point")[0];
//var  pot ='';
//for(var i =0; i<12; i++){
//	pot+='<div class="point_child"style="transform:rotate(' + (i * 30) + 'deg)"><p class="point_child_border"></p></div>'
//}
//point.innerHTML = pot;
////$('.point_child').eq(0).text('00');
////$('.point_child').eq(6).text('90');
////五个圆圈内的样式
//var point_item = document.getElementsByClassName('point_item');
//for(var i=0;i<point_item.length;i++){
//	point_item[i].style.transform = 'rotateZ('+(-72*i)+'deg)';
//}
//var ponit_child = document.getElementsByClassName('point_child');
//
//
//var  point_child_border = document.getElementsByClassName('point_child_border');
//	for(var i=0; i<point_child_border.length; i++){
//		point_child_border[i].style.transform = 'rotateZ('+(-30*i)+'deg)';
//	}
//	//白圈的闪烁
//	var Num = Math.ceil((new Date().getSeconds())/5)+1;
//setInterval(function(){
//	if(Num>=ponit_child.length){
//		Num=0;
//	}
//	for(var i=0; i<point_child_border.length;i++){
//		point_child_border[i].style.width = '0';
//		point_child_border[i].style.height = '0';
//		point_child_border[i].style.left = '5px';
//		point_child_border[i].style.top = '5px';
//	}
//	$('.point_child_border').not().eq(Num)
//	.animate({'width':'50px','height':'50px','left':'-20px','top':'-20px','opacity':'0.2'},1000);
//	;
//	if(Num>=ponit_child.length){
//		Num=0;
//	}
//	Num++;
//},1000);




//菜单ul中的li的hover效果

	var lis = $('#list_nav li') 
	lis
	.mouseover(function(ev){
		$(this).find('.plant_nav').stop().animate({'left':'-200px'},600);
		ev.stopPropagation()
	})
	.mouseout(function(ev){
		$(this).find('.plant_nav').stop().animate({'left':'0px'},600);
		ev.stopPropagation()
	})
	.click(function(){
		if($(this).index() == 0){
			$('#File_content').hide().animate({'opacity':'0'},400);
			$('.File_word').hide().animate({'opacity':'0'},400);
			$('.File_top').show().animate({'opacity':'1'},400);
		}else if($(this).index() == 1){
			$('#File_content').hide().animate({'opacity':'0'},400);
			$('.File_word').show().animate({'opacity':'1'},400,function(){Word()});
			$('.File_top').hide().animate({'opacity':'0'},400);
		}
	})
	//当hover的时候二维码显示出来
	$('.scan').mouseover(function(){
		$('.scan_code').show().animate({'width':'110px','height':'110px','left':'-40px','top':'-75px'},300)
	})
//======================================================

$('.Bon').on('click',function(){

	$('.sing_first span').each(function(index,item){
		if($(item).text()=='s'){
			$(item).css({'position':'absolute','color':'#000'}).animate({'left':'408px','top':'420px'},4000);
		}
		if($(item).text()=='u'){
			$(item).css({'position':'absolute','color':'#000'}).animate({'left':'414px','top':'420px'},4000);
		}
		if($(item).text()=='n'){
			$(item).css({'position':'absolute','color':'#000'}).animate({'left':'423px','top':'420px'},4000);
		}
		if($(item).text()=='d'){
			$(item).css({'position':'absolute','color':'#000'}).animate({'left':'432px','top':'420px'},4000);
		}
		if($(item).text()=='y'){
			$(item).css({'position':'absolute','color':'#000'}).animate({'left':'441px','top':'420px'},4000);
		}
		if($(item).text()=='w'){
			$(item).css({'position':'absolute','color':'#000'}).animate({'left':'708px','top':'420px'},4000);
		}
		if($(item).text()=='a'){
			$(item).css({'position':'absolute','color':'#000'}).animate({'left':'720px','top':'420px'},4000);
		}
		if($(item).text()=='t'){
			$(item).css({'position':'absolute','color':'#000'}).animate({'left':'728px','top':'420px'},4000);
		}
		if($(item).text()=='e'){
			$(item).css({'position':'absolute','color':'#000'}).animate({'left':'733px','top':'420px'},4000);
		}
		if($(item).text()=='r'){
			$(item).css({'position':'absolute','color':'#000'}).animate({'left':'741px','top':'420px'},4000);
		}
	})
})
function Word(){
	//生成的文字
var arr = ['Amazing grace! How sweet the sound!','That savd(saved) a wretch like me!','I once was lost, but now i am found','Was blind, but now I see.','T was grace that taught my heart to fear',
'And grace my fears reliev‘d(relieved);','How precious did that grace appear'//,'The hour I first believ’d(believed)!','Through many dangers, toils and snares,','I have already come;','Tis(It is) grace has brought me safe thus far',
//'And grace will lead us home.','The Lord has promis d(promised) good to me,','His word my hope secures;','He will my shield and portion be,','As long as life endures.'
]
var sing = document.querySelector('.sing_first');
var str='';
for(var i=0;i<arr.length; i++){
	str+='<li>'
	for(var j=0;j<arr[i].length; j++){
		str+='<span style="opacity:0">'+arr[i][j]+'</span>';
	}
	str+='</li>'
}
sing.innerHTML = str;
	$('.sing_first span').each(function(index,item){
		$(item).delay(index*100).animate({'opacity':'1'},400)
	})	
}
//==============植物图片的hover效果=======================
var word_img = document.querySelector('.word_img');
var Img = document.getElementsByClassName('Img')[0]
	word_img.onmouseover = function(){
		
		Img.style.transform = 'translateZ(200px)'
	}
})()