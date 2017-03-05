
	//第二屏结构

	function renderSe(){
		var str='<div class="Se_bg"></div>';
		str+='<img src="img/f43.png" class="Se_word"/>';
		str+='<img src="img/f15.png"class="Se_color" />';
		str+='<img src="img/f18.png"class="Se_sun" />';
		str+='<img src="img/f33.png" class="Se_hand"/>';
		str+='<img src="img/f39.png"class="Se_mother">';
		str+='<img src="img/Fqf41.png"class="Se_da"/>';
		str+='<p class="Se_mails">第一式--看你安静的呆着就是不顺眼</p>';
		str+='<div class="button"><p></p><p></p></div>';
		return str;
	}
	//第二屏动画
	function Seanimate(){
		$('.Se_bg').delay(300).animate({'top':'6.4rem'},300)
		$('.Se_mother').delay(300).animate({'left':'9rem'},300,function(){
			$('.Se_sun').show().animate({'left':'0.2rem'},50).animate({'left':'1.4rem'},50).animate({'left':'0.2rem'},50).animate({'left':'1.4rem'},50);
			$('.Se_hand').show().animate({'left':'5.4rem'},50).animate({'left':'5rem'},50)
			$('.Se_color').show().animate({'top':'14rem'},50);
		})
		$('.Se_da').delay(300).animate({'left':'20rem'},300);
		$('.Se_word').delay(700).animate({'top':'4.4rem'},100).animate({'top':'4.1rem'},100).animate({'top':'4.4rem'},100);
		$('.Se_mails').delay(900).animate({'left':'0rem'},100).animate({'left':'-2rem'},100).animate({'left':'0'},100)
		
	}
	//第三屏结构
	
	function renderTh(){
		var str='<div class="Th_bg"></div>';
		str+='<img src="img/f44.png"class="Th_name"/>';
		str+='<img src="img/f10.png" class="Th_foot"/><img src= "img/f12.png" class="Th_last"/>';
		str+='<img src="img/f38.png" class="Th_sister"/><img src="img/f11.png" class="Th_mother"/>';
		str+='<img src="img/f14.png" class="Th_git"/><img src="img/f49.png" class="Th_point"/>';
		str+='<img src="img/f.png" class="Th_tr"/><p class="Th_mails">第二式--在妈的眼里你永远吃不饱</p>';
		str+='<div class="button"><p></p><p></p></div>';
		return str;
	}
	//第三屏动画
	
	function Thanimate(){
		$('.Th_sister').delay(300).animate({'left':'6rem'},100).animate({'left':'6.8rem'},100).animate({'left':'6rem'},100,function(){
		$('.Th_point').show();
		});
		$('.Th_foot').delay(400).animate({'left':'17rem'},300);
		$('.Th_last').delay(400).animate({'left':'5rem'},300,function(){
			$('.Th_mother').animate({'left':'-6rem'},100).animate({'left':'-5.4rem'},100).animate({'left':'-6rem'},100)
		})
		$('.Th_git').delay(1300).animate({'opacity':'1'},400,function(){
			$('.Th_tr').show()
		})
		$('.Th_name').delay(1400).animate({'top':'1.5rem'},100).animate({'top':'1.3rem'},100).animate({'top':'1.5rem'},100)
		$('.Th_mails').delay(900).animate({'left':'0rem'},100).animate({'left':'-2rem'},100).animate({'left':'0'},100)
	}
	//第四屏结构
	
	function renderFor(){
		var str='<div class="For_bg"></div>';
		str+='<img src="img/f57.png"class="For_B" /><img src="img/f53.png"class="For_mother" />';
		str+='<img src="img/f06.png"class="For_sun" /><img src="img/f01.png" class="For_up"/>';
		str+='<img src= "img/f10.png" class="For_point"/><img src="img/f46.png"class="For_title" />';
		str+="<p class='For_mails'>第三式--这一招借刀杀人叫做'别人家的孩子'</p>";
		str+='<div class="button"><p></p><p></p></div>';
		return str;
	}
	//第四屏动画

	function Fouranimate(){
		$('.For_bg').delay(300).animate({'top':'27.8rem'},200).animate({'top':'27.3rem'},100);
		$('.For_mother').delay(500).animate({'left':'-5.3rem'},100);
		$('.For_B').delay(500).animate({'left':'2rem'},100);
		$(".For_sun").delay(500).animate({'left':'10.8rem'},100).animate({'left':'10rem'},100,function(){
			$('.For_up').show();
		})
		$('.For_point').delay(500).animate({'left':'18.8rem'},100).animate({'left':'18rem'},100);
		$('.For_title').delay(750).animate({'top':'5.5rem'},100).animate({'top':'6rem'},100);
		$('.For_mails').delay(800).animate({'left':'0rem'},100).animate({'left':'-2rem'},100).animate({'left':'0'},100)
	}
	//第五屏结构
	
	function renderFiv(){
		var str='<div class="Fi_bg"></div>';
		str+='<img src="img/f26.png" class="Fi_mother"/><img src="img/f34.png" class="Fi_word"/>';
		str+='<img src="img/f24.png" class="Fi_like"/><img src="img/f27.png" class="Fi_icon" />';
		str+='<img src="img/f20.png"class="Fi_sun" /><img src="img/f36.png" class="Fi_line" />';
		str+='<img src="img/f48.png" class="Fi_title"/>';
		str+='<p class="Fi_mails">第四式--不去找个对象和一条咸鱼有什么区别</p>';
		str+='<div class="button"><p></p><p></p></div>';
		return str;
	}
	//第五屏动画
	
	function Fivanimate(){
		$('.Fi_bg').delay(300).animate({'top':'16.2rem'},200).animate({'top':'17rem'},100)
		$('.Fi_mother').delay(400).animate({'left':'-2rem'},100,function(){
			$('.Fi_like').animate({'left':'7.4rem'},100);
			$('.Fi_icon').animate({'left':'2rem'},100)
			$('.Fi_sun').animate({'left':'-8rem'},100,function(){
				$(this).addClass('Fiv_sun');
			});
			$('.Fi_line').fadeIn(700)
			$('.Fi_word').animate({'top':'20rem','opacity':'1'},500)
		});
		$('.Fi_title').delay(1000).animate({'top':'4.6rem'},100).animate({'top':'4rem'},100)
		$('.Fi_mails').delay(1200).animate({'left':'0rem'},100).animate({'left':'-2rem'},100).animate({'left':'0'},100)
	}
	//第六屏结构
	
	function renderSix(){
		var str='<div class="Six_bg"></div><img src="img/f47.png"class="Six_air"/>';
		str+='<img src="img/f09.png"class="Six_cloud" /><img src="img/f61.png"class="Six_mother"/>';
		str+='<img src="img/f57.png"class="Six_B"/><img src="img/f30.png"class="Six_title" />';
		str+='<img src="img/f60.png" class="Six_star"/><img src="img/f05.png" class="Six_name"/>';
		str+='<span class="Six_word">妈妈</span><p class="Six_mails">究极式--你自己看吧,说的很明白了</p>';
		str+='<div class="button"><p></p><p></p></div>';
		return str;
	}
	//第六屏动画
	
	function Sixanimate(){
		$('.Six_bg').delay(300).animate({'top':'11rem'},100).animate({'top':'10.4rem'},100);
		$('.Six_mother').delay(400).animate({'top':'39rem'},100).animate({'top':'39.6rem'},100).animate({'top':'39rem'},100,function(){
			$('.Six_air').fadeIn(400);
			$('.Six_cloud').fadeIn(500)
		});
		$('.Six_B').delay(800).animate({'top':'34rem','opacity':'1'},400)
		$('.Six_title').delay(1100).animate({'top':'9rem'},100).animate({'top':'10rem'},100).animate({'top':'9rem'},100,function(){
			$('.Six_mails').delay(800).animate({'left':'0rem'},100).animate({'left':'-2rem'},100).animate({'left':'0'},100);
			$('.Six_star').fadeIn();
			$('.Six_name').fadeIn();
			$('.Six_word').fadeIn();
		});
		
	}
	//第七屏结构
	
	function renderSev(){
		var str='<div class="Sev_bg"><span class="Sev_word">在老妈眼里我没救了。。。</span></div>';
		str+='<img src="img/f19.png"class="Sev_sister" /><img src="img/f54.png"class="Sev_color" />';
		str+='<img src="img/f63.png" class="Sev_title"/><img src="img/f17.png"class="Sev_hand" />';
		str+='<div class="button"><p></p><p></p></div>';
		return str;
	}
	//第七屏动画
	
	function Sevanimate(){
		$('.Sev_word').delay(300).animate({'left':'1.4rem'},100).animate({'left':'0.4rem'},100);
		$('.Sev_sister').delay(300).animate({'left':'16rem'},100).animate({'left':'17rem'},100);
		$('.Sev_color').delay(500).animate({'top':'0'},700);
		$('.Sev_hand').delay(800).animate({'left':'24rem'},400,function(){
			$('.Sev_title').fadeIn();
		})
		
	}
	//第八屏
	
	function renderEi(){
		var str='<img src="img/f13.png"class="Ei_title" /><img src="img/f32.png" class="Ei_bg"/>';
		return str;
	}
	
	function Eianimate(){
		$('.Ei_bg').fadeIn(800);
		$('.Ei_title').fadeIn(900);
	}
