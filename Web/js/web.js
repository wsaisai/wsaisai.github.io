;
(function() {
	//屏幕的自适应屏幕的可视区减去head头部的距离就是content的内容区
	var content = document.querySelector('#content');
	var head = document.querySelector('#head');

	function resize() {
		var clientH = document.documentElement.clientHeight;
		content.style.height = clientH - head.offsetHeight + "px";
	}
	window.onresize = resize; //
	resize();
	//===================准备数据======================
	var datas = data.files; //我们自己写的数据
	//这里我们用字符串方法生成所有的内容然后通过jq调用这个函数完成渲染
	function createTreeHtml(id) {
		//获取我们传入的id的子数据
		var childs = handle.getChildsById(datas, id);
		//如果没有子级那么就return
		if(!childs.length) {
			return '';
		}
		//构成结构
		var html = '<ul>';
		childs.forEach(function(value) {
			var pidlength = handle.getParentsAllById(datas, value.id).length;
			var childlength = handle.getChildsById(datas, value.id).length;
			html += '<li><h2 class="Border"style=" padding-left:' + pidlength * 12 + 'px"data-id=' + value.id + '>';
			if(childlength) {
				html += '<i class="closeicon"style="margin-right:' + 6 + 'px"></i><i class="openfile" style="margin-right:' + 6 + 'px"></i>' + value.title + '</h2>';
			} else {
				html += '<i class="closeicon" style="margin-right:' + 6 + 'px;opacity:0"></i><i class="openfile"style="margin-right:' + 6 + 'px"></i>' + value.title + '</h2>';
			}
			html += createTreeHtml(value.id) //递归找到所有子级；
			html += '</li>';
		})
		html += '</ul>';
		return html;
	}

	//=========================这里是导航区域的函数 同样我们用这个函数直接生成 待会直接放进jq中=====================================
	function createNavHtml(id) {
		//这里我们通过传入的id找到他的所有父数据,并且因为是是从上层到下所以我们将他颠倒
		var parents = handle.getParentsAllById(datas, id).reverse();
		var len = parents.length;
		//渲染下标从0到length-1
		var navHtml = '';
		for(var i = 0; i < len - 1; i++) {
			navHtml += '<li><a href ="#" data-id = "' + parents[i].id + '"style = "z-index:' + (len - i) + ';">' + parents[i].title + '</a><i class="ico_right"></i></li>';
		}
		navHtml += '<li><span class="nav_span"style="z-index:0">' + parents[len - 1].title + '</span></li>';
		return navHtml;
	}

	//=============================这里是文件夹区域的函数=========================================
	//文件区域的内容这里我们用超级字符串 因为内容比较多所以拆分长两部分 文件夹的具体结构在另外一个函数中生成
	function createFileHtml(id) {
		var fileChilds = handle.getChildsById(datas, id);
		var fileHtml = '';
		fileChilds.forEach(function(value) {
			fileHtml += `<div class="file_item"data-id="${value.id}">
				${FileHtmlFn(value)}
			</div>`
		})
		fileHtml += `<div class="bg"></div>`
		return fileHtml;
	}
	//这里就是小文件夹的具体结构了 同样也用超级字符串生成 
	function FileHtmlFn(value) {
		var str = `<span num="span" class="check"></span>
					<p class="file_img"data-id="${value.id}"></p>
					<p class="file_title_box" data-id="${value.id}">
						<span class="file_title"data-id="${value.id}">${value.title}</span>
						<span class="file_edtor">
							<input class="edtor" type="text">
						</span>
					</p>
		`;
		return str;
	}
	//这里单独生成文件夹为新建服务
	function createFileElement(){
		var div = document.createElement('div');
		div.className = "file_item";
		div.innerHTML = FileHtmlFn({});
		return div;
	}
	//jq部分来了
	//点击交互区域的公共函数,下面所有的点击交互都用到这个函数
	var fileid = 0; //利用这个变量来渲染树形菜单.导航.文件内容区域
	var isfileid = '';

	function renderHtml(fileid) {
		//调用函数时重新渲染导航栏
		$('#nav_bread').html(createNavHtml(fileid));
		//文件内容区域
		$('#File').html(createFileHtml(fileid));
		//移除所有h2的背景class另外给给自定义id和我们传入fileid一致的h2加上class
		$('#tree_menu h2').removeClass('h2_bg');
		$('#tree_menu').find('h2[data-id=' + fileid + ']').addClass('h2_bg');
		//去除全选
		$('#checkAll').removeClass('selectAll');
		last = fileid;
	}

	$(function() { //加载完后的状态
		$('.bg').hide();
		$('#tree_menu').html(createTreeHtml(-1))
		$('#nav_bread').html(createNavHtml(0))
		$('#File').html(createFileHtml(0));
		$('#tree_menu h2').eq(0).addClass('h2_bg');
		//树形菜单的点击事件
		$('#tree_menu').on('click', function(ev) {
				var target = ev.target;
				//点击时target的自定义id
				//因为点击的时候可能会点击到i标签小文件夹,所以将target指向h2这个拥有自定义id的
				if(!target.dataset.id) {
					target = target.parentElement;
				}
				isfileid = target.dataset.id;
				if(isfileid) {
					fileid = isfileid;
					renderHtml(fileid);
					//如果点击的数据下没有子级那么就让bg显示出来;
					var fileChilds = handle.getChildsById(datas, isfileid);
					if(!fileChilds.length) {
						$('.bg').show();
					}
				}

			})
			//点击导航栏时的交互效果
		$('#wrap_nav').on('click', function(ev) {
			var target = ev.target;
			isfileid = target.dataset.id;
			if(isfileid) {
				fileid = isfileid;
				renderHtml(fileid)
			}
		});
		//点击右侧内容文件区域 
		$('#File').on('click', function(ev) {
				var target = ev.target;
				isfileid = target.dataset.id;
				//找到所有有自定义id的元素
				if(isfileid) {
					fileid = isfileid;
					renderHtml(fileid);
					//如果点击的数据下没有子级那么就让bg显示出来;
					var fileChilds = handle.getChildsById(datas, isfileid);
					if(!fileChilds.length) {
						$('.bg').show();
					}
				}
				if($(target).attr('num')) {
					//点击时选框中的对号
					$(target).toggleClass('checked');
					$(target).parent().toggleClass('file_item_bg');
					//看每一个check是否有class checked如果每个都有就给checkAll也添加全选对号
					var bl = Array.from($('.check')).every(function(item) {
						return $(item).hasClass('checked')
					})
					if(bl) {
						$('#checkAll').addClass('selectAll')
					} else {
						$('#checkAll').removeClass('selectAll')
					}
				}
			})
			//全选的点击事件
		$('#checkAll').on('click', function(ev) {
				$('#checkAll').toggleClass('selectAll');
				if($('#checkAll').hasClass('selectAll')) {
					$('.check').addClass('checked');
					$('.file_item').addClass('file_item_bg')
				} else {
					$('.check').removeClass('checked');
					$('.file_item').removeClass('file_item_bg')
				}
			})
			//===================碰撞检测函数===================================
		function peng(obj1, obj2) { //返回结果如果为true，说明碰到
			var pos1 = obj1.getBoundingClientRect();
			var pos2 = obj2.getBoundingClientRect();
			return pos1.right > pos2.left && pos1.left < pos2.right && pos1.bottom > pos2.top && pos1.top < pos2.bottom;
		}
		var File = document.getElementById('File');

		var div = null,
			disX = null,
			sketchDiv = null, //剪影
			imposterDiv = null, //伪装者小红点
			isHitElement = null;
		$('#File').on('mousedown', function(ev) {
			if(ev.which !== 1) {
				return;
			}
			var target = ev.target;
			var isChecked = false;
			//当file-item时选中的时候 return
			if($(target).hasClass('file_item') || $(target).parents().hasClass('file_item')) {
				isChecked = !!$('.file_item').children().hasClass('checked')
			};
			disX = ev.clientX;
			disY = ev.clientY;

			$('#File').on('mousemove', function(ev) {
					if(isChecked) {
						//不能在选中的file——item上面再次拖拽 
						if(Math.abs(ev.clientX - disX) < 5 && Math.abs(ev.clientY - disY) < 5) {
							return;
						}
					};
					//=================生成的框==================================
					if(Math.abs(ev.clientX - disX) > 15 || Math.abs(ev.clientY - disY) > 15) {
						if(!div) {
							div = document.createElement('div');
							div.id = 'div2';
							File.appendChild(div);
						}
						div.style.width = Math.abs(ev.clientX - disX) + "px";
						div.style.height = Math.abs(ev.clientY - disY) + "px";
						div.style.left = Math.min(ev.clientX - 394, disX - 394) + "px";
						div.style.top = Math.min(ev.clientY - 160, disY - 160) + "px";
						//检测碰撞
						var Item = document.getElementsByClassName('file_item');

						for(var i = 0; i < $('.file_item').length; i++) {
							if(peng(div, $('.file_item')[i])) {
								$('.file_item').eq(i).addClass('file_item_bg')
								$('.file_item .check').eq(i).addClass('checked');
							} else {
								$('.file_item').eq(i).removeClass('file_item_bg');
								$('.file_item .check').eq(i).removeClass('checked');
							}
						}
						//全选
						var bl = Array.from($('.check')).every(function(item) {
							return $(item).hasClass('checked')
						})
						if(bl) {
							$('#checkAll').addClass('selectAll')
						} else {
							$('#checkAll').removeClass('selectAll')
						}
					}

				})
				//鼠标up的时候事件解绑
			document.onmouseup = function() {
				$('#File').off('mousemove');
				document.onmouseup = null;
				$('#div2').remove();
				div = null;
			}
			ev.preventDefault(); //阻止默认事件
		})

		//======================新建删除移动重命名========================================??
		var New = document.querySelector('.New')
		$('.New').on('mouseup',function(){
		//1. 通过添加数据，在文件区域中重新渲染
		//2. 直接添加结构	
		var firstElement = File.firstElementChild;
			var newFile = createFileElement();
		
			if(firstElement){
				File.insertBefore(newFile, firstElement);
			}else{
				File.appendChild(newFile)
			}
			$('.bg').hide();
			$(newFile).find('input').eq(0).parent().css('display', 'block');
			$('#File').find('input').eq(0).focus();
			New.isCreate = true;//新建状态
			
		})
		$(document).on('keyup',function(ev){
			if(ev.keyCode === 13){
				
			}
		});
		//给document绑定mousedown,目的是判断是否创建成功
		//为新建服务
		$(document).on('mousedown',function(){
			
			createFile();
		})
		
		function createFile(){
//			console.log(New.isCreate )
			if(!New.isCreate){
				return;
			}
				var firstElement = File.firstElementChild;
				var fileTitle = firstElement.querySelector(".file_title");
				var fileEdtor = firstElement.querySelector(".file_edtor");
				var edtor = firstElement.querySelector(".edtor");
				
				//通过value值判断是否需要新建
				var Value = edtor.value.trim();
				
				if(Value){
					//新建 不能有重复的 判断新建的文件的title在同级是否存在
					console.log(fileid)
					var isExist = handle.isTitleExist(datas,Value,fileid);
					console.log(isExist)
					if(isExist){
					
						File.removeChild(firstElement);
						
					}else{
						fileTitle.style.display = "block";
						fileEdtor.style.display = "none";
						fileTitle.innerHTML = Value;
						var id = Math.random();
						datas.unshift({
							id:id,
							pid:fileid,
							title:Value,
							type:'file'
						});
						firstElement.setAttribute('data-id',id);
						
						$('#tree_menu').html(createTreeHtml(-1))
					}
				}else{
					File.removeChild(firstElement);
					var childs = handle.getChildsById(datas, fileid);
					if(!childs.length){
						$('.bg').show()
					}
				}
				New.isCreate = false;
		}
		
		
		
		
		
		


	})

})()