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
		var str = `<span class="check"></span>
					<p class="file_img"></p>
					<p class="file_title_box">
						<span class="file_title">${value.title}</span>
						<span class="file_edtor">
							<input class="edtor" type="text">
						</span>
					</p>`;
		return str;
	}
	//这里单独生成文件夹为新建服务
	function createFileElement() {
		var div = document.createElement('div');
		div.className = "file_item";
		div.innerHTML = FileHtmlFn({});
		return div;
	}
	//渲染导航树形菜单和文件区域,刚开始的时候默认状态
	$('#tree_menu').html(createTreeHtml(-1));
	$('#nav_bread').html(createNavHtml(0));
	$('#File').html(createFileHtml(0))
	$('.bg').hide();
	$('#tree_menu h2').eq(0).addClass('h2_bg');
	//============添加交互事件==================================
	var last = 0;
	//树形菜单的点击事件
	$('#tree_menu').on('click', function(ev) {
		var target = ev.target;
		if(target = t.parent(target, '.Border')) {
			//获得事件对象的自定义id
			var fileid = target.dataset.id;
			//调用交互函数
			render(fileid);
		}
	});
	//导航菜单区域的点击事件
	$('#nav_bread').on('click', function(ev) {
		var target = ev.target;
		if(target.nodeName === 'A') {
			var fileid = target.dataset.id;
			render(fileid);
		}
	});
	//文件区域的点击事件
	$('#File').on('click', function(ev) {
		var target = ev.target;
		if(t.parent(target, '.check')) {
			//当点击的是check选框的时候为他的父极添加背景 子级也添加背景
			target = t.parent(target, '.check');
			$(target).parent().toggleClass('file_item_bg');
			$(target).toggleClass('checked');
			//查看所有的check是不是都有class为checked
			var bl = Array.from($('.check')).every(function(item) {
				return $(item).hasClass('checked')
			});
			//如果每一个都有那么全选添加class
			if(bl) {
				$('#checkAll').addClass('selectAll')
			} else {
				$('#checkAll').removeClass('selectAll')
			}
		} else if(t.parent(target, '.edtor')) {
			return;
		} else if(t.parent(target, '.file_item')) {
			//如果触发点是file-item
			target = t.parent(target, '.file_item');
			var fileid = target.dataset.id;
			render(fileid)
		}

	});
	//	全选点击事件

	$('#checkAll').on('click', function() {
			//如果页面没有文件夹的时候点击全选那么直接return
			var childs = handle.getChildsById(datas, last);
			if(!childs.length) {
				return;
			};
			//点击的时候给自己添加class并且如果自己有class的话 给所有的文件夹添加背景选中
			$('#checkAll').toggleClass('selectAll');
			if($('#checkAll').hasClass('selectAll')) {
				$('.check').addClass('checked');
				$('.file_item').addClass('file_item_bg')
			} else {
				$('.check').removeClass('checked');
				$('.file_item').removeClass('file_item_bg')
			}
		})
		//阻止冒泡
	$('#File').on('mousedown', function(ev) {
			if(t.parent(ev.target, '.edtor')) {
				ev.stopPropagation();
			}
		})
		//=================新建文件夹===============================
	var New = document.querySelector('.New');
	var File = document.getElementById('File')
	$('.New').on('mouseup', function() {
		//up的时候才生成新建的文件夹
		//通过添加数据,在文件区域中重新渲染
		var firstElement = File.firstElementChild;
		//拿来文件结构并且赋给变量这样等我们用的时候直接把不用修改的结构放进渲染区域就行了
		var newFile = createFileElement();
		if(firstElement) {
			File.insertBefore(newFile, firstElement);
		} else {
			File.appendChild(newFile);
		}
		$('.bg').hide();
		//获取文件结构中的每个部分
		$(newFile).find('.file_title').hide();
		$(newFile).find('.file_edtor').show();
		$(newFile).find('.edtor').focus();

		New.isCreate = true; //新建状态
	});
	$(document).on('keyup', function(ev) {
		if(ev.keyCode === 13) {
			creteFile();
		}
	});
	//在document上按下的时候进行创建并且判断在抬起的时候才生成
	$(document).on('mousedown', function() {
		creteFile();
	});
	//====================删除文件夹的交互==========================================
	var Delete = document.querySelector('.Delete');
	//找到返回是勾选状态的file_item文件夹
	function whoSlect() {
		return Array.from(check).filter(function(item) {
			return t.hasClass(item, 'checked')
		}).map(function(item) {
			return t.parent(item, '.file_item')
		})
	}
	//返回哪个是选中的,写的比较简单不知道后面要不要改,直接找的有这个class的parent
	function who() {
		return $('.checked').parent()
	}
	$('.Delete').on('click', function() {
			//点击删除,没有选择文件和选择文件两种情况
			var selectArr = who();
			if(selectArr.length) {
				dialog({
					title: '删除文件',
					content: "<div style ='padding:10px;'>确定删除文件吗?</div>",
					okFn: function() {
						//拿到要删除文件的id,并且通过id找到他的所有子数据
						var idArr = [];
						for(var i = 0; i < selectArr.length; i++) {
							idArr.push(selectArr[i].dataset.id)
						}
						handle.delectChildsAll(datas, idArr);
						//删除之后重新渲染页面,三个区域
						$('#tree_menu').html(createTreeHtml(-1));
						render(last);
						//删除成功后的下拉提示框
						$('#title_tips').css('background', '#6ec21e').animate({
							top: 0
						}, 300).text('删除成功').delay(500).animate({
							top: '-50px'
						});
					}
				})
			} else {
				$('#title_tips').css('background', '#da8814').animate({
					top: 0
				}, 300).text('请选择删除文件').delay(500).animate({
					top: '-50px'
				});
			}
		})
		//======================重命名=============================
	var item = {};
	var agin = document.querySelector(".agin");
	//	console.log(agin)
	$('.agin').on('click', function() {
			//先知道谁被选中,想要给谁重命名,并且只能给单个文件重命名,找到新建的文件,并且知道它下面的子元素
			var selec = who();
			if(selec.length === 1) {
				item.element = selec[0];
				item.fileTitle = item.element.querySelector('.file_title');
				item.fileEdtor = item.element.querySelector('.file_edtor');
				item.edtor = item.element.querySelector('.edtor');
				$(item.fileTitle).hide();
				$(item.fileEdtor).show();
				item.edtor.value = item.fileTitle.innerHTML.trim();
				//点击重命名之后input框中的文字要是蓝色的那种状态sselect()
				$(item.edtor).select();
				agin.isagin = true;
			} else if(selec.length > 1) {
				//当选中多个文件夹的时候提示下拉栏
				$('#title_tips').css('background', '#da8814').animate({
					top: 0
				}, 300).text('只能对单个文件重命名').delay(500).animate({
					top: '-50px'
				});
			} else {
				//如果什么都没选中直接点击重命名
				$('#title_tips').css('background', '#da8814').animate({
					top: 0
				}, 300).text('请选择重命名文件').delay(500).animate({
					top: '-50px'
				});
			}
		})
		//重命名之后点击document会完成重命名事件的成功与否
	$(document).on('mousedown', function() {
			//如果没有重命名在documentdown的时候返回
			if(!agin.isagin) {
				return;
			};
			//重命名之后要判断有没有输入内容;有没有重名,重名提醒,变回以前的名字;
			//不重名的话: 提示命名成功,改为新名字,找到数据,改title,重新渲染树形菜单
			var value = item.edtor.value.trim();
			if(value) {
				//查看是不是重名了
				var isExist = handle.isTitleExist(datas, value, last);
				if(value === item.fileTitle.innerHTML.trim()) {

				} else if(isExist) {
					//下拉小提示效果
					$('#title_tips').css('background', '#da8814').animate({
						top: 0
					}, 300).text('重名了').delay(500).animate({
						top: '-50px'
					});
				} else {
					$('#title_tips').css('background', '#6ec21e').animate({
						top: 0
					}, 300).text('重命名成功').delay(500).animate({
						top: '-50px'
					});
					//重命名成功后 把我们输入的内容替换掉原本的内容并且改变数据的title
					item.fileTitle.innerHTML = value;
					var self = handle.getSelfById(datas, item.element.dataset.id);
					//在data数据中找到重命名那个file——item的自定义id数据,并且改变他的title
					self.title = value;
					//重新渲染
					$('#tree_menu').html(createTreeHtml(-1));
					$('#file_cross ul').html(createCrossFile(0));

				}
			}
			//最后去除选中所有效果,并且改变重命名状态
			$(item.element).removeClass('file_item_bg');
			$(item.element).find('.check').removeClass('checked');
			$(item.fileTitle).show();
			$(item.fileEdtor).hide();
			agin.isagin = false;
		})
		//==============================移动交互===============================
	$('.move').on('click', function() {
		var selec = who(); //先知道谁被选中了
		var moveStatus = true; //默认为trun,没选任何一个目录,点确定不能关闭弹窗
		var fileid = null;
		//如果有选中就弹出弹框
		if(selec.length) {
			dialog({
				title: '移动到',
				content: "<div class='tree_move'style='heihgt:420px'>" + createTreeHtml(-1) + "</div>",
				okFn: function() {
					//是否关闭弹框
					if(moveStatus) {
						return true;
					} else {

						//可以关闭弹框,说明可以移动了,fileid移动的目录,移动的数据
						var onoff = false;
						for(var i = 0; i < selecIdArr.length; i++) {
							//找到选中id对应的数据
							var self = handle.getSelfById(datas, selecIdArr[i]);;
							//判断self.title是不是已经存在fileid下的字数据中
							var isExist = handle.isTitleExist(datas, self.title, fileid);

							if(!isExist) {
								self.pid = fileid;
								File.removeChild(selec[i]);
								if(!$('.file_item')) {
									$(".bg").show();
									$("#checkAll").removeClass('checked')
								}
							} else {
								//只要onoff为true,说明有一个移动失败,因为重名了
								onoff = true;
							}
						}
						if(onoff) {
							$('#title_tips').css('background', '#da8814').animate({
								top: 0
							}, 300).text('移动失败,重名了').delay(500).animate({
								top: '-50px'
							});
						}
						$('#tree_menu').html(createTreeHtml(-1));
						$('#file_cross ul').html(createCrossFile(0));
					}
				}
			});
			var selecIdArr = []; //保存选中数据的自定义id;
			for(var i = 0; i < selec.length; i++) {
				selecIdArr.push(selec[i].dataset.id);
			}
			//通过selecIdArr找到数组中的每一项的下面的所有子孙数据
			var selectData = handle.getChildsAllByIdarr(datas, selecIdArr);
			//弹出的树形菜单的样式以及结构
			var tree_move = document.querySelector('.tree_move')
			var firstbg = tree_move.querySelectorAll('.Border')[0];
			console.log(tree_move)
			t.addClass(firstbg, 'h2_bg');
			var currentElement = firstbg;
			$('.tree_move').on('click', function(ev) {
				var target = ev.target;
				if(target = t.parent(target, '.Border')) {
					//添加去除出class背景色
					t.removeClass(currentElement, 'h2_bg');
					t.addClass(target, 'h2_bg');
					currentElement = target;
					fileid = target.dataset.id;
					//通过dileid找到对应的数据
					var oneData = handle.getSelfById(datas, fileid);
					var selfData = handle.getSelfById(datas, selecIdArr[0]);
					if(fileid == selfData.pid) {
						$('.error').text('该文件已经存在');
						moveStatus = true; //不能关闭弹框
						return;
					}
					//					判断一下oneData,是否存在selectData中
					var onoff = false;

					for(var i = 0; i < selectData.length; i++) {
						if(oneData.id === selectData[i].id) {
							onoff = true;
							break;
						}
					}
					//等selectData中的每一项比较完成之后,猜得到结构
					if(onoff) {
						$('.error').text('不能移动到自身或者子孙下');
						moveStatus = true;
					} else {
						$('.error').html('');
						moveStatus = false;
					}
				}
			})
		} else {
			$('#title_tips').css('background', '#da8814').animate({
				top: 0
			}, 300).text('请选择文件').delay(500).animate({
				top: '-50px'
			});
		}
	})

	//===================碰撞检测函数===================================
	function peng(obj1, obj2) { //返回结果如果为true，说明碰到
		var pos1 = obj1.getBoundingClientRect();
		var pos2 = obj2.getBoundingClientRect();
		return pos1.right > pos2.left && pos1.left < pos2.right && pos1.bottom > pos2.top && pos1.top < pos2.bottom;
	}
	//文件区域的容器
	var File = document.getElementById('File');
	var file_item = document.getElementsByClassName('file_item');
	var check = document.getElementsByClassName('check');

	var div = null,
		disX = null,
		sketchDiv = null, //剪影
		imposterDiv = null, //伪装者小红点
		isHitElement = null;
	//在文件区域按下的时候如果不是右键那么返回
	$('#File').on('mousedown', function(ev) {
			if(ev.which !== 1) {
				return;
			}
			var target = ev.target;
			var isChecked = false;
			//当file-item时选中的时候 return
			if($(target).hasClass('file_item') || $(target).parents().hasClass('file_item')) {
				//让元素可以作为判断条件加个状态让在有选中的文件夹下拖动可以有小文件缩影
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

						//存的是选中的文件夹,在我们拖动的时候文件剪影下会有一共拖动了几个文件夹,这里的数组的长度,就是数量啦
						var selectArr = who();
						//如果移动的剪影不存在,我们便创建它,并且给他加上样式,结构,放在我们拖动时target的下面

						if(!sketchDiv) {
							console.log(ev.clientX)
							sketchDiv = document.createElement('div');

							sketchDiv.className = 'drag_helper';
							sketchDiv.innerHTML = `<div class="drag_File"><i class="drag_Img"></i><span class="drag_Ico">${selectArr.length}</span></div>`;
							document.body.appendChild(sketchDiv);
							//生成一个div,目的是在同一个文件down有up的时候,不至于进到这个文件的下一级
							imposterDiv = document.createElement('div');
							imposterDiv.style.cssText = `width:10px;height:10px;background:red;position:absolute;left:0;top:0;opacity:0`;
							document.body.appendChild(imposterDiv);
						}
						//然后把这个imposterDiv放在sketchDiv下

						sketchDiv.style.left = ev.clientX + 15 + "px";

						sketchDiv.style.top = ev.clientY + 15 + "px";
						//当鼠标up的时候遮住file——item防止跳转
						imposterDiv.style.left = ev.clientX - 5 + "px";

						imposterDiv.style.top = ev.clientY - 5 + "px";
						isHitElement = null;
						//伪装者和哪个file——item碰上了,就给这个file——item加上样式
						//selectArr为选中的那些项
						for(var i = 0; i < file_item.length; i++) {
							//在for循环里面申明变量,并且如果选中的数组中的某一个与页面上的某一个重合时,就跳过这次循环
							var onoff = false;
							for(var j = 0; j < selectArr.length; j++) {
								if(selectArr[j] == file_item[i]) {
									onoff = true;
								}
							};
							if(onoff) {
								continue;
							};
							//如果碰到了就改变背景
							if(peng(imposterDiv, file_item[i])) {
								t.addClass(file_item[i], 'file_item_bg');
								//								t.addClass(check[i], 'checked');
								isHitElement = file_item[i];
							} else {
								t.removeClass(file_item[i], 'file_item_bg');
								//								t.removeClass(check[i], 'checked');
							};

						}
						return;

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
						//如果生成的框和文件夹碰撞上了那么就给文件夹添加背景样式,并且在离开之后把状态改回来;
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
			document.onmouseup = function(ev) {
				//museup的时候事件解绑,并且移除生成的框,变量设置为空,下次再用
				$('#File').off('mousemove');
				document.onmouseup = null;

				if(div) {
					$('#div2').remove()
					div = null;
				}
				//如果剪影存在那么也要移除,下次再声称
				if(sketchDiv) {
					document.body.removeChild(sketchDiv);
					document.body.removeChild(imposterDiv);
					sketchDiv = null;
					imposterDiv = null;
				}
				//判断是否有碰撞元素
				//				console.log(isHitElement)
				if(isHitElement) {

					var onoff = false;
					var selectArr = whoSlect();
					//找到选中的那些文件夹的自定义id
					var selectIdArr = selectArr.map(function(item) {
						return item.dataset.id;
					});
					//					console.log(selectIdArr)
					var fileid = isHitElement.dataset.id;
					for(var i = 0; i < selectIdArr.length; i++) {
						//找到选中的id对应的数据
						var self = handle.getSelfById(datas, selectIdArr[i]);
						//判断一下self.title是否已经在fileid的子数据中
						var isExist = handle.isTitleExist(datas, self.title, fileid);
						//如果不存在不改pid
						if(!isExist) {
							//如果没有重复那么就把文件放入我们up时起的那个文件夹内,并且改变数据的pid指向,File区域进行重新渲染 ,移除拖动的文件夹
							self.pid = fileid;
							File.removeChild(selectArr[i]);

						} else {
							//只要onoff为true,说明有一个移动失败了,因为重名
							onoff = true;
						}

					}
					//重名后的提示,并且重新渲染树形菜单
					if(onoff) {
						$('#title_tips').css('background', '#da8814').animate({
							top: 0
						}, 300).text('名字重复').delay(500).animate({
							top: '-50px'
						});
					}
					//当所有拖动up完成后重新渲染树形菜单区域,并且改变文件夹的状态
					$('.file_item').removeClass('file_item_bg')
					$('#tree_menu').html(createTreeHtml(-1));
					$('#file_cross ul').html(createCrossFile(0))
					isHitElement = null;
				}
			}
			ev.preventDefault(); //阻止默认事件
		})
		//=================公共函数当点击的时候树形菜单和导航栏,文件区域的交互效果=====================================
	var tree_menu = document.getElementById('tree_menu');
	//找到我们输入的那条自定义id的h2;
	function getTreeById(id) {
		t.removeClass(checkAll, "selectAll")
		var h2s = tree_menu.getElementsByTagName("h2");
		for(var i = 0; i < h2s.length; i++) {
			if(h2s[i].dataset.id == id) {
				return h2s[i];
			}
		}
	}
	//树形菜单 导航栏以及file区域的公共交互函数
	function render(fileid) {
		$(getTreeById(last)).removeClass('h2_bg')
		$(getTreeById(fileid)).addClass("h2_bg");
		$('#nav_bread').html(createNavHtml(fileid));
		$('#File').html(createFileHtml(fileid));
		$('#file_cross ul').html(createCrossFile(fileid))
			//查看点击的fileid下面是否有子级
		var childs = handle.getChildsById(datas, fileid);
		if(childs.length) {
			$('.bg').hide();
		} else {
			$('.cross_title').hide();
			$('.bg').show();
		}
		last = fileid;
	}
	//新建时down下去时的函数,具体判断是不是重名或者有没有输入,
	function creteFile() {

		//如果不是新建状态，不在继续执行
		//抬起时是true按下时在最后才声明为false,所以当第二次点击时true则绕过进行下面的判断,false就返回了,防止生成多个文件
		if(!New.isCreate) {
			return;
		}
		//先要找到新建的第一个元素
		var firstElement = File.firstElementChild;
		var fileTitle = firstElement.querySelector(".file_title");
		var fileEdtor = firstElement.querySelector(".file_edtor");
		var edtor = firstElement.querySelector(".edtor");
		//通过value值判断是否要新建
		var value = edtor.value.trim();

		if(value) {
			//新建
			//不能有重复的
			//判断新建的文件的文字在同级是否存在
			var isExist = handle.isTitleExist(datas, value, last);
			if(isExist) {
				//如果重名就删除
				File.removeChild(firstElement);
				//重名后的提示效果
				$('#title_tips').css('background', '#da8814').animate({
					top: 0
				}, 300).text('名字重复').delay(500).animate({
					top: '-50px'
				});
			} else {
				fileTitle.style.display = "block";
				fileEdtor.style.display = "none";

				fileTitle.innerHTML = value;
				var id = Math.random();
				datas.unshift({
					id: id,
					pid: last,
					title: value,
					type: "文件夹",
					Date:Da()
				});
				firstElement.setAttribute("data-id", id);
				tree_menu.innerHTML = createTreeHtml(-1);
				$('#file_cross ul').html(createCrossFile(0))
					//文件创建成功后的提示 我们这里就用实现准备好的标签改变一下样式再用动画完成提示效果
				$('#title_tips').css('background', '#6ec21e').animate({
					top: 0
				}, 300).text('创建成功').delay(500).animate({
					top: '-50px'
				});
			}
		} else {
			//如果我们什么都不输出,那么在我们点击document的时候应该move掉新建的这个文件夹
			File.removeChild(firstElement);
			var childs = handle.getChildsById(datas, last);
			if(!childs.length) {
				$('.bg').show()
			}
		}
		//最后让create的状态转为false,下次点击时可以用来判断能不能进行新建
		New.isCreate = false;

		$('#checkAll').removeClass('selectAll') //在这里是创建成功了 所以全选要去掉
	};
	//=========================树形菜单最初的开合状态========================================
	
	$('.sort_cross').on('click', function() {
		$('#File').hide();
		$('#file_cross').show();
		$(this).css({'background-color':'#3b93ff','color':'#fff'});
		$('.sort_plane').css({'background-color':'#fff','color':'#000'});
	})
	$('.sort_plane').on('click', function() {
		$('#File').show();
		$(this).css({'background-color':'#3b93ff','color':'#fff'});
		$('.sort_cross').css({'background-color':'#fff','color':'#000'});
	})
	//文件区域的另一种排列形式
	function createCrossFile(id) {
		//找到我们传入的id下面的子数据
		var fileChilds = handle.getChildsById(datas, id);
		var fileHtml = '';
		fileHtml = `<div class="cross_title">
			<span>名称</span>
			<span>修改日期</span>
			<a href="#"></a>
			<span>文件类型</span>
			<span>大小</span>
		</div>`;
		fileChilds.forEach(function(value) {
			fileHtml += `<li class="cross_file"data-id="${value.id}">
					<i  class="cross_img"></i>
					<span class="cross_name">${value.title}</span>
					<p class="cross_data">${value.Date}</p>
					<span class="cross_type">${value.type}</span>
					
				</li>`;
		})
		fileHtml += `<div class="bg"></div>`;
		return fileHtml;
	}
	$('#file_cross ul').html(createCrossFile(0));
	$('.sort_plane').css({'background-color':'#3b93ff','color':'#fff'});
	//日期的函数
	function Da(){
		var a = new Date();
		var M = a.getMonth();
		var D = a.getDate();
		var H = a.getHours();
		var m = a.getMinutes();
		function Get(item){
		 if(item<10){
			return	item = '0'+item
		 }else{
		 	return item
		 }
		}
		return a.getFullYear()+'-'+(Get(M))+'-'+Get(D)+' '+Get(H)+':'+Get(m)
	}
})()