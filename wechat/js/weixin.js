;(function(){
	$('#box').fullpage({
		menu:true,
		sectionsColor:['#fff','','pink','yellow','green','#fff'],
		anchors:['page1','page2','page3','page4','page5','page6','page7'],
		navigation:true,
		menu:true,
		navigationTooltips:['首页','平台介绍','六大优势','特色功能','核心价值','联系我们','企业入口'],
		scrollingSpeed:1300,
		css:true,
		verticalCentered:false,
		fixdElements:'#nav',
		afterLoad:function(anchorLink, index){
			if(index==1){
				Nav(index)
				firstload()
			}else if(index==2){
				Nav(index)
				secendload()
			}else if(index==3){
				Nav(index)
				Threeload()
			}else if(index==4){
				Nav(index)
				Fourload()
			}else if(index==5){
				Nav(index)
				Fiveload()
			}else if(index==6){
				Nav(index)
				$('.Svg').html(	CreateSvg(' '))
			
			}
		
		},
		onLeave:function(index,nextIndex,direction){
			if(index==1){
				firstend()
			}else if(index==2){
				secendend()
			}else if(index==3){
				 Threeend()
			}else if(index==4){
				Fourend()
			}else if(index==5){
				Fiveend()
			}else if(index==6){
				$('.Svg').html( )
			}
	
		}
		
	})
	//第一屏的效果
	begin()
	function begin(){
		$('.first_L').animate({'left':'0','opacity':'1','top':'80px'},600);
		$('.first_title').animate({'top':'296px','opacity':'1'},700);
		$('.first_begin').animate({'top':'392px','opacity':'1'},800);
		$('.first_ico').animate({'top':'469px','opacity':'1'},700);
		$('.first_bottom').animate({'top':'407px','opacity':'1'},700);
	}
	function firstload(){
		$('.first_L').animate({'left':'0','opacity':'1','top':'80px'},500);
		$('.first_title').animate({'top':'296px','opacity':'1'},500);
		$('.first_begin').animate({'top':'392px','opacity':'1'},500);
		$('.first_ico').animate({'top':'469px','opacity':'1'},700);
		$('.first_bottom').animate({'top':'407px','opacity':'1'},700);
	}
	function firstend(){
		$('.first_L').animate({'left':'-30px','opacity':'0','top':'50px'},300);
		$('.first_title').animate({'top':'270px','opacity':'0'},400)
		$('.first_begin').animate({'top':'410px','opacity':'0'},400)
		$('.first_ico').animate({'top':'500px','opacity':'0'},500);
		$('.first_bottom').animate({'top':'500px','opacity':'0'},700);
	}
	//第二屏
	function secendload(){
		$('.six').css({'transform':'rotate(360deg)','transition':'3s','opacity':'1'});
		$('.secend_G').animate({'opacity':'1','left':'44px','top':'160px'},800);
		$('.secend_star').animate({'left':'110px','opacity':'1'},800);
		$('.secend_s').animate({'left':'44px','top':'442px','opacity':'1'},800);
		$('.shehui').animate({'left':'546px','top':'160px','opacity':'1'},800);
		$('.huodong').animate({'left':'644px','opacity':'1'},800);
		$('.jiang').animate({'left':'546px','top':'442px','opacity':'1'},800)
	}
	function secendend(){
		$('.six').css({'transform':'rotate(0deg)','opacity':'0','transition':'0.6s'});
		$('.secend_G').animate({'opacity':'0','left':'60px','top':'160px'},200);
		$('.secend_star').animate({'opacity':'0','left':'170px'},200)
		$('.secend_s').animate({'left':'100px','top':'400px','opacity':'0'},200)
		$('.shehui').animate({'left':'490px','top':'200px','opacity':'0'},200)
		$('.huodong').animate({'left':'490px','opacity':'0'},200);
		$('.jiang').animate({'left':'390px','top':'360px','opacity':'0'},200)
	}
	//第三屏
	function Threeload(){
		$('.three_photo').animate({'left':'500px','opacity':'1'},700);
		$('.three_R').animate({'left':'443px','opacity':'1'},700);
		$('.three_title').animate({'top':"115px",'opacity':'1'},400);
		$('.three_mails').each(function(index,item){
			var index=$(item).index();
			$(item).delay(index*150).animate({'top':index*23+'px','opacity':'1'},500)
		})
	}
	function Threeend(){
		$('.three_photo').animate({'left':'530px','opacity':'0'},700);
		$('.three_R').animate({'left':'664px','opacity':'0'},700);
		$('.three_title').animate({'top':'800px','opacity':'0'},650)
		$('.three_mails').eq(0).animate({'top':'800px','opacity':'0'},600)
		$('.three_mails').eq(1).animate({'top':'800px','opacity':'0'},500)
		$('.three_mails').eq(2).animate({'top':'800px','opacity':'0'},400)
		$('.three_mails').eq(3).animate({'top':'800px','opacity':'0'},300)
		$('.three_mails').eq(4).animate({'top':'800px','opacity':'0'},200)
		$('.three_mails').eq(5).animate({'top':'800px','opacity':'0'},100)
	}
	//第四屏
	function Fourload(){
		$('.four_s').animate({'left':'479px','opacity':'1'},400);
		$('.four_see').delay(100).animate({'left':'597px','opacity':'1'},400);
		$('.four_line').delay(100).animate({'left':'604px','opacity':'1'},400);
		$('.four_she').delay(200).animate({'left':'763px','opacity':'1'},400)
		$('.four_mobel').delay(200).animate({'left':'783px','opacity':'1'},400);
		$('.four_more').delay(200).animate({'left':'752px','opacity':'1'},400)
	}
	function Fourend(){
		$('.four_s').delay(200).animate({'left':'800px','opacity':'0'},400)
		$('.four_see').delay(100).animate({'left':'900px','opacity':'0'},400);
		$('.four_line').delay(100).animate({'left':'900px','opacity':'0'},400);
		$('.four_she').animate({'left':'1000px','opacity':'0'},400);
		$('.four_mobel').animate({'left':'1000px','opacity':'0'},400);
		$('.four_more').animate({'left':'1000px','opacity':'0'},400)
	}
	//第五屏
	function Fiveload(){
		$('.five_hand').animate({'left':'730px','opacity':'1'},500);
		$('.five_title').fadeIn(600);
		$('.five_G').animate({'top':'79px','opacity':'1'},500);
		$('.five_sel').animate({'top':'252px','opacity':'1'},500);
		$('.five_con').animate({'top':'457px','opacity':'1'},500);
		$('.five_line').animate({'top':'450px','opacity':'1'},500);
		$('.five_one').animate({'top':'218px','opacity':'1'},500);
		$('.five_v').animate({'top':'86px','opacity':'1'},500)
		$('.five_wrap').fadeIn(600)
	}
	function Fiveend(){
		$('.five_hand').animate({'left':'0px','opacity':'0'},500)
		$('.five_title').fadeOut(600);
		$('.five_G').animate({'top':'70px','opacity':'0'},500);
		$('.five_sel').animate({'top':'242px','opacity':'0'},500);
		$('.five_con').animate({'top':'447px','opacity':'0'},500);
		$('.five_line').animate({'top':'440px','opacity':'0'},500);
		$('.five_one').animate({'top':'228px','opacity':'0'},500);
		$('.five_v').animate({'top':'76px','opacity':'0'},500);
		$('.five_wrap').fadeOut(600)
	}
	//导航栏的hove效果
	$('#nav a').eq(0).css({'background':'#29bf25','color':"#fff"});
	$('#nav a').on('click',function(){
		var index = $(this).index();
		$('#nav a').css({'background':'#29bf25','color':'#fff'}).not(':eq('+(index-1)+')').css({'background':'#f9fbfc','color':'#888'})
	})

	//每一屏变幻时导航栏的变换
	function Nav(index){
		$('#nav a').css({'background':'#29bf25','color':'#fff'}).not(':eq('+(index-1)+')').css({'background':'#f9fbfc','color':'#888'})
	}
	
	//生成svg动画
	function CreateSvg(){
		var str=`
			<path class='path'd="M0 60 L0 0 L280 0 L280 60 Z" stroke="#000" stroke-width="4" fill="none" />
		`;
		return str;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})()
