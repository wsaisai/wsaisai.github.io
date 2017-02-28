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
//	var a = 0;
//		setInterval(function() {
//				a++;
//				if(a == divs.length) {
//					a = 0;
//				}
//				for(var i = 0; i < divs.length; i++) {
//					divs[i].style.height = '20px'
//				}
//				divs[a].style.height = '29px';
//				if(a + 1 == divs.length) {
//					divs[0].style.height = '20px';
//				} else {
//					divs[a + 1].style.height = '29px';
//				}
//			},100)
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
//		$('.mask').eq(index).delay(100).animate({'width':'0','height':'0','top':'30px','left':'30px'},400)
//		$('.photo').eq(index).delay(100).animate({'width':'100px','height':'100px','left':'-20px','top':'-10px'},600);
//		$('.out_title').eq(index).delay(100).animate({'height':'50px','top':'0','opacity':'1'},800)
//	});
//	$('.out_title').on('mouseout',function(){
//		$('.photo').eq(index).delay(300).animate({'width':'0px','height':'0px','left':'30px','top':'30px'},600);
//		$('.mask').eq(index).delay(500).animate({'width':'60px','height':'60px','top':'0px','left':'0px'},400)
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
//		if($(this).index() == 0){
//			$('#File_content').hide().animate({'opacity':'0'},400);
//			$('.File_word').hide().animate({'opacity':'0'},400);
//			$('.File_top').show().animate({'opacity':'1'},400);
//		}else if($(this).index() == 1){
//			$('#File_content').hide().animate({'opacity':'0'},400);
//			$('.File_word').show().animate({'opacity':'1'},400,function(){Word()});
//			$('.File_top').hide().animate({'opacity':'0'},400);
//		}
	})
	//当hover的时候二维码显示出来
	$('.scan').mouseover(function(){
		$('.scan_code').show().animate({'width':'110px','height':'110px','left':'-40px','top':'-75px'},300)
	})
//======================================================
//ul word_list的生成这里是File_word的页面
//var data = datas.file;
//function createList(){
//	var word_item = document.querySelector('.word_item');
//	var str='';
//	str+='<ul id="word_list">'
//	for(var i=0;i<data.length; i++ ){
//		str+='<li><a href="#"><img src='+data[i].src+'/></a><div class="word_img_mask"><span class="fa '+data[i].fa+'"></span><p class="fa_mail">'+data[i].title+'</p></div></li>'
//	}
//	str+='</ul>'
//	word_item.innerHTML = str;
//}
//createList()
////图片的hover效果
//$('#word_list li')
//.on('mouseover',function(){
//	$(this).find('.word_img_mask').css({'transform-origin':'center','transition':'0.9s','transform':'rotateY(-180deg)'}).stop().animate({'width':'300px','height':'250px','left':0,'top':0,'opacity':'0.6'},90)
//	$(this).find('span').css({'transform-origin':'center','transition':'0.6s','transform':'rotateY(-180deg)','font-size':'42px'});
//	$(this).find('.fa_mail').css({'transform-origin':'center','transition':'0.6s','transform':'rotateY(-180deg)','font-size':'42px','margin-top':'40px'})
//})
//
//$('#word_list li')
//.on('mouseout',function(){
//	$(this).find('.word_img_mask').css({'transform-origin':'center','transition':'0.9s','transform':'rotateY(0deg)'}).stop().animate({'width':'200px','height':'150px','left':'50px','top':'50px','opacity':0},90);
//	$(this).find('span').css({'transform-origin':'center','transition':'0.6s','transform':'rotateY(0deg)','font-size':'22px'});
//	$(this).find('.fa_mail').css({'transform-origin':'center','transition':'0.6s','transform':'rotateY(0deg)','font-size':'22px','margin-top':'30px'});
//});
////word——mail下的spanhover效果
//$('.word_border')
//.on('mouseover',function(){
//	$(this).find('.D').stop().animate({'height':'28px'},350);
//	$(this).find('.B').stop().animate({'top':'28px'},350);
//})
//.on('mouseout',function(){
//	$(this).find('.D').stop().animate({'height':'0px'},350);
//	$(this).find('.B').stop().animate({'top':'0px'},350);
//})

//================File_top页面================================
function Topanimate(){
	$('.top_item').each(function(index,item){
		$(item).delay(index*300+800).animate({'opacity':'1','top':'0'},2000)
	})
	
}
//.top_item的mouseover事件
$('.top_item').on('mouseover',function(){
	
	$(this).find('img').css({'transform':'translateZ(-100px)','transition':'0.9s'})
}).on('mouseout',function(){
	$(this).find('img').css({'transform':'translateZ(0px)','transition':'0.9s'})
})
$(document).on('click',function(){
	Topanimate()
})

//=====================豆瓣读书========================================
//请求数据

//	//搜索的关键字
//	var searchStr = '爱的物理学';
//	//一页显示的条数
//	var prePage = 9;
//		//总页数
//	var pages = 10;
//	// 当前显示的页码
//	var currentPage = 1;
//		function jsonp(){
//			var script = $("<script><\/script>");
//			var start = (currentPage-1)*prePage; 
//			//当前页数-1 乘上一页的显示条数;
//			
//			script.attr(
//					"src",
//					'https://api.douban.com/v2/book/search?callback=fna&q='+searchStr+'&count='+prePage+'&start='+start
//			);
//			$("body").append(script);
//		}
//	




//	jsonp();
	
	
})()




//	function fna(data){
//		var Learn_l = document.querySelector('.Learn_L');
//		var Learn_R = document.querySelector('.Learn_R');
//		Learn_l.innerHTML = renderBook(data);
//		Learn_R.innerHTML = renderBook(data);
//			console.log(data.books)
//			
//	}
//	
//	function renderBook(data){
//		var str ='';
//		for(var i=0; i<data.books.length;i++){
//			str+='<li><img src="'+data.books[i].images.small+'"/></li>'
//		}
//		return str;
//	}


//====================渲染新书上线下面的ul=========================





$('.books_mask').on('mouseover',function(){
//	$(this).css('opacity',1)
	$(this).find('.B_mask_title').stop().animate({'top':'0'},600);
	$(this).find('.B_name').stop().animate({'top':'0'},700)
	$(this).find('.B_star').stop().animate({'top':'0'},800)
	$(this).find('.B_read').stop().animate({'top':'0'},900)
}).on('mouseout',function(){
//	$(this).animate({'opacity':'0'},200)
	$(this).delay(100).find('.B_mask_title').stop().animate({'top':'200px'},800);
	$(this).find('.B_name').stop().animate({'top':'242px'},700)
	$(this).find('.B_star').stop().animate({'top':'264px'},600)
	$(this).find('.B_read').stop().animate({'top':'300px'},200)
})
