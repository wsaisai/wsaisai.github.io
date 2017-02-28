;
(function() {
	//点击button的时候让左侧部分显示出来
	var onoff = true;
	$('.button').on('click', function() {
		if(onoff) {
			$('.button p').eq(0).animate({
				'top': '20px'
			}, 600, function() {
				$('.button p').eq(0).css('opacity', 0)
				$('.button p').eq(1).css({
					'transform': 'rotate(45deg)',
					'transition': '1s'
				})
			})
			$('.button p').eq(3).animate({
				'top': '20px'
			}, 600, function() {
				$('.button p').eq(3).css('opacity', 0)
				$('.button p').eq(2).css({
					'transform': 'rotate(-45deg)',
					'transition': '1s'
				})
			})
			$('#File_content').delay(400).animate({
				left: '200px'
			}, 600);
			$('#File_left').show();
		} else {
			$('.button p').eq(1).css({
				'transform': 'rotate(0deg)',
				'transition': '1s'
			})
			$('.button p').eq(2).css({
				'transform': 'rotate(0deg)',
				'transition': '1s'
			});
			$('.button p').eq(0).delay(1000).animate({
				'opacity': 1,
				'top': '10px'
			}, 600)
			$('.button p').eq(3).delay(1000).animate({
				'opacity': 1,
				'top': '30px'
			}, 600)
			$('#File_content').delay(400).animate({
				left: '0'
			}, 600,function(){
				$('#File_left').hide();
			});
			
		}
		onoff = !onoff;
	})

//生成钟表
	var Timer_clock = document.querySelector('.Timer_clock');
	var str = '';
	for(var i = 0; i <120; i++) {
		if(i % 5 == 0) {
			str += '<div class="div1" style="transform:rotate(' + (i * 3) + 'deg);"></div>';
		} else {
			str += '<div class="div1" style="transform:rotate(' + (i * 3) + 'deg)"></div>';
		}
	}
	str+='<div class="Timer_date"><h2 class="Timer_title">Funny hours</h2><span class="Timer_hours"></span><p class="Timer_s"></p></div>'
	Timer_clock.innerHTML=str;
	var Timer_hours = document.getElementsByClassName("Timer_hours")[0];
	var Timer_s = document.getElementsByClassName("Timer_s")[0];
	setInterval(function() {
		var H = new Date().getHours();
		var M = new Date().getMinutes();
		var S = new Date().getSeconds();
		if(H<10){
			H='0'+H;
		}
		if(M < 10) {
			M = '0' + M
		}
		if(S < 10) {
			S = '0' + S;
		}
		var s = String(S).slice(0,1)
		var a = String(S).slice(1,2)
		Timer_hours.innerHTML = H + ':' + M + ":" + s;
		Timer_s.innerHTML =a;
	}, 1000)

		var divs =Timer_clock.getElementsByClassName('div1')
//小刻度的动画效果
	var Zero = 0;
		setInterval(function() {
				Zero++;
				if(Zero == divs.length) {
					Zero = 0;
				}
				for(var i = 0; i < divs.length; i++) {
					divs[i].style.height = '20px'
				}
				divs[Zero].style.height = '29px';
				if(Zero+ 1 == divs.length) {
					divs[0].style.height = '20px';
				} else {
					divs[Zero+ 1].style.height = '29px';
				}
		},100)
////生成的五个圆圈
var Out = document.getElementsByClassName('Timer_out')[0]
var out = '';
for(var i =0; i<5; i++){
	out+='<div class="out_child"style="transform:rotate(' + (i * 72) + 'deg);"><div class="point_item"><p class="out_title"></p><p class="photo"></p><p class="mask"></p></div></div>'
}
//渲染圆圈
Out.innerHTML = out;
$('.point_item').eq(0).addClass('img_1');
$('.point_item').eq(1).addClass('img_2');
$('.point_item').eq(2).addClass('img_3');
$('.point_item').eq(3).text('sunny');
$('.point_item').eq(4).text('water');
$('.photo').eq(0).addClass("photo_first").prev().text('flower');
$('.photo').eq(1).addClass("photo_secend").prev().text('sakura');
$('.photo').eq(2).addClass("photo_thred").prev().text('lover');

$('.mask').each(function(index,item){
	$(item).on('mouseover',function(){
		$('.mask').eq(index).animate({'width':'0','height':'0','top':'30px','left':'30px'},400)
		$('.photo').eq(index).animate({'width':'100px','height':'100px','left':'-20px','top':'-10px'},600);
		$('.out_title').eq(index).animate({'height':'50px','top':'0','opacity':'1'},800)
	});
	$('.out_title').on('mouseout',function(){
		$('.photo').eq(index).delay(300).animate({'width':'0px','height':'0px','left':'30px','top':'30px'},600);
		$('.mask').eq(index).delay(500).animate({'width':'60px','height':'60px','top':'0px','left':'0px'},400)
		$('.out_title').eq(index).delay(200).animate({'height':'0px','top':'60px','opacity':'0'},800)
	})
})



//生成的小圆点
var point = document.getElementsByClassName("Timer_point")[0];
var  pot ='';
for(var i =0; i<12; i++){
	pot+='<div class="point_child"style="transform:rotate(' + (i * 30) + 'deg)"><p class="point_child_border"></p></div>'
}
point.innerHTML = pot;
//五个圆圈内的样式
var point_item = document.getElementsByClassName('point_item');
for(var i=0;i<point_item.length;i++){
	point_item[i].style.transform = 'rotateZ('+(-72*i)+'deg)';
}
var ponit_child = document.getElementsByClassName('point_child');

var  point_child_border = document.getElementsByClassName('point_child_border');
	for(var i=0; i<point_child_border.length; i++){
		point_child_border[i].style.transform = 'rotateZ('+(-30*i)+'deg)';
	}
	//白圈的闪烁
	var Num =0;
	setInterval(function(){
		Num++;
		if(Num>=ponit_child.length){
			Num=0;
		}
		for(var i=0; i<point_child_border.length;i++){
			point_child_border[i].style.width = '0';
			point_child_border[i].style.height = '0';
			point_child_border[i].style.left = '5px';
			point_child_border[i].style.top = '5px';
		}
		point_child_border[Num].style.width='50px';
		point_child_border[Num].style.height='50px';
		point_child_border[Num].style.left='-20px';
		point_child_border[Num].style.top='-20px';
		point_child_border[Num].style.opacity='0.2';
	},1000)
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
			$('.File_item').show().not(':eq(0)').hide();
		}else if($(this).index() == 1){

			$('.File_item').show().not(':eq(1)').hide();
		}else if($(this).index()==2){
			$('.File_item').show().not(':eq(2)').hide();
		}else if($(this).index()==3){
			$('.File_item').show().not(':eq(3)').hide();
			$('.Ph_cont').animate({'opacity':'0'},400);
			$('.P_first').css({'height':'0'}).stop().animate({'height':'100%'},400)
		}
	})
	//当hover的时候二维码显示出来
	$('.scan').mouseover(function(){
		$('.scan_code').show().animate({'width':'110px','height':'110px','left':'-40px','top':'-75px'},300)
	})
})()

//====================渲染新书上线下面的ul=========================
var Learn_Books = document.querySelector('.Learn_Books');
var LearnB= document.querySelector('.Lb');
var LearnS = document.querySelector('.Learn_sel');
var SRC = Src.file;
var REND = Src.rend;
var CU = Src.Cu;
//渲染热门推荐
Learn_Books.innerHTML = RenderB(SRC);
//渲染新书上线
LearnB.innerHTML = RenderB(REND);
//渲染促销ul
LearnS.innerHTML = RenderB(CU);
function RenderB(Src){
	var str = '';
	for(var i=0;i<Src.length;i++){
		str+=`
			<li>
				<div class="Books_prev">
					<div class="books_mask">
						<p class="B_mask_title">${Src[i].title}</p>
						<p class="B_name">${Src[i].auther}</p>
						<div class="B_star">
							<a href="#"class="fa fa-star"></a>
							<a href="#"class="fa fa-star"></a>
							<a href="#"class="fa fa-star"></a>
							<a href="#"class="fa fa-star"></a>
							<a href="#"class="fa fa-star"></a>
						</div>
						<a href="#"class="B_read">去看看</a>
					</div>
					<img class="books_img"src="${Src[i].img}"/>
				</div>
				<span class="books_title">${Src[i].title}</span>
				<span class="books_money">${Src[i].money}</span>
			</li>
		`;
	}
	return str;
}
//底部出版社的渲染
var press_parent = document.querySelector('.press_parent');
var Componey = Src.componey;
press_parent.innerHTML = CreatePress(Componey);
function CreatePress(Componey){
	var str = '';
	for(var i=0;i<Componey.length;i++){
		str+=`
			<li class="press"><img src="${Componey[i].img}" class="press_banne"><p data-id="${Componey[i].id}"></p></li>
		`;
	}
	return str;
}
$('.press p').on('mouseover',function(ev){
	var target = ev.target;
	id= target.dataset.id;
	var a = Src.file;
	var b =Src.rend;
	var c = a.concat(b);
	var Arr = c.concat(Src.Cu);
	var presscont = PressItem(Arr);//得到pid等于id的搜谱数据
	var press_cont = document.querySelector('.press_cont');
	console.log(presscont)
	press_cont.innerHTML =PressCont(presscont);//渲染右边出版社的书
})
function PressItem(Arr){
	var a = []
	var n=Arr.forEach(function(item,index){
		if(item.pid == id){
			a.push(item)
		}
	})
	return a;
}
//渲染press——cont
function PressCont(presscont){
	var str = '';
	str+=`<p class="press_title"><span class="fa fa-caret-right"></span>${presscont[0].parent}</p>`;
	str+=`<ul class="press_right clearfix">`;
	for(var i=0;i<presscont.length;i++){
		str+=`
			<li class="press_books">
				<img src="${presscont[i].img}" class="press_T"/>
				<p class="press_auther">${presscont[i].title}</p>
			</li>
		`;
	}
	str+=`</ul>`;
	return str;
}
var books_mask = document.getElementsByClassName('books_mask');
var B_name = document.getElementsByClassName('B_name');
var B_star = document.getElementsByClassName('B_star');
var B_read = document.getElementsByClassName('B_read');
var B_mask_title = document.getElementsByClassName('B_mask_title');
for(var i=0;i<books_mask.length;i++){
		Bo(i)
		BB(i)
}
function Bo(i){
	books_mask[i].onmouseover = function(){
		books_mask[i].style.opacity =1;
		B_name[i].style.top='0';
		B_star[i].style.top='0';
		B_read[i].style.top='0';
		B_mask_title[i].style.top= '0';
		B_mask_title[i].style.transition='0.3s';
		B_name[i].style.transition='0.4s';
		B_star[i].style.transition='0.5s';
		B_read[i].style.transition='0.6s';
	}
}
function BB(i){
	books_mask[i].onmouseout=function(){
		books_mask[i].style.opacity =0;
		B_name[i].style.top='200px';
		B_star[i].style.top='210px';
		B_read[i].style.top='220px';
		B_mask_title[i].style.top= '240px';
		B_mask_title[i].style.transition='0.6s';
		B_name[i].style.transition='0.5s';
		B_star[i].style.transition='0.4s';
		B_read[i].style.transition='0.3s';		
	}
}
//手风琴效果
Handpiano()//执行这个函数
function Handpiano(){
		var sm = $("#sm")
		var lis = sm.find("li");
		//一个li
		var oneImgW = 400;
		//总宽度
		var total = 1140;
		//总个数
		var len = lis.length;
		//剩余的6张图片应该占多少宽度
		var otherW = (total - oneImgW) / (len - 1);
		//平分的宽度
		var pingfenW = total / len;
		$(lis[0]).animate({
			width: oneImgW
		})
		lis.each(function(index) {
			if(index >= 1) {
				$(lis[index]).animate({
					width: otherW
				})
			}
		})
		var timer1 = null;
		lis.on("mouseover", function() {
			var _this = this;

			clearInterval(timer1);
			clearInterval(timer2);
			timer1 = setInterval(function() {
				var overOneliW = $(_this).width();
				if(overOneliW >= 400) {
					clearInterval(timer1);
					clearInterval(timer2);
				} else {
					//做运动
					console.log("做运动");
					//计算出其余6张图片走了多少距离  目标位置otherW
					var otherLiTotalW = 0;
					lis.each(function(index) {
						if(_this !== this) { //排除鼠标移入的li
							//其他6张图片每一张如果width大于otherW
							var eachLiW = $(this).width(),
								speed = 0;
							//如果这张图片的宽度大于其余六张平分的宽度，应该让这张图片的宽度到otherW上
							if(eachLiW > otherW) {
								//速度稍稍慢一点
								speed = (eachLiW - otherW) / 10;
								speed = speed <= 0 ? 1 : speed;
								$(this).width(eachLiW - speed)
							}
							//保存的就是其余6张图片运动的总宽度
							otherLiTotalW += (eachLiW - speed);
						}
					})
					//鼠标移入的图片的width
					// console.log(otherLiTotalW);
					var w = total - otherLiTotalW;

					$(_this).width(w);
				}
			}, 16)

		})
		var timer2 = null;
		lis.on("mouseout", function() {
			var _this = this;
			clearInterval(timer1);
			clearInterval(timer2);
			timer2 = setInterval(function() {
				var outLiW = $(_this).width();
				if(outLiW <= pingfenW) {
					clearInterval(timer1);
					clearInterval(timer2);
				} else {
					var otherLiTotalW = 0;
					lis.each(function() {
						if(_this !== this) {
							var eachLiW = $(this).width(),
								speed = 0;
							if(eachLiW < pingfenW) {
								speed = (pingfenW - eachLiW) / 10;
								speed = speed <= 0 ? 1 : speed;
								$(this).width(eachLiW + speed);
							}
							otherLiTotalW += eachLiW + speed;
						}
					})
					$(_this).width(total - otherLiTotalW);
				}
			}, 16)
		})	
	
}
