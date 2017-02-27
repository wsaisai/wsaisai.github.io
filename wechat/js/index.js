;
(function() {
	//	console.log($('#box'));
	$('#box').fullpage({
		'menu': true,
		navigation:true,
		'anchors': ['page1', 'page2'],
		'css3': true,
		'scrollingSpeed': 700,
		navigationTooltips:['1','2','3'],
		'resize': true,
		navigationPosition:'left',
		navigationTooltips:['2','2','3'],
		'sectionsColor': ['red', '#000','pink'],
		slideColor:['red','#000'],
		'navigation': true,
		afterLoad:function(anchorLink, index){
			var loadedSection = $(this);
			if(index==2){
				$('.se').animate({'left':'600px'},600)
			}
		},
		
		onLeave: function(index, nextIndex, direction){
			if(index==2){
				$('.se').animate({'left':'0px'},300)
			}
		}
		
		
	})

	function S(){
		$('.se').animate({'left':'600px'},600)
	}
	
})()