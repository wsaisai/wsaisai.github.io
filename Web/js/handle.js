var handle ={
	//自己封一个函数，通过这个函数我们可以找到和我们传入数据id一样的那条数据
	getSelfById(data,id){
		return data.find(function(value){
			return value.id == id;
		})
	},
	//通过这个函数可以找到指定data数据中我们传入id的子级filter本身就是操作数据这里就是过滤出每一数据中的
	//pid等于我们传入的那个id的数据
	getChildsById(data,id){
		return data.filter(function(value){
			return value.pid == id;
		})
	},
	//找到指定id所有的父数据(每一条)，包括自己
	getParentsAllById(data,id){
		var arr=[];
		var self = handle.getSelfById(data,id);
		if(self){
			arr.push(self);
			//这里完成递归，通过我们传入的id先找到这条数据，如果这条数据存在那么把它放到数组arr中，
			//并且通过我们找到的这条数据再次递归找他的pid也就是父数据，然后函数会再次运行递归，一直到self不存在
			//就把arr整个数组返回
			arr = arr.concat(handle.getParentsAllById(data,self.pid))
		}
		return arr;
	},
		//在指定id的所有的子数据中，是否存在摸一个title
	//不存在就是false -1
	isTitleExist(data,value,id){
		var childs = handle.getChildsById(data,id);
		return childs.findIndex( function(item){
			return item.title === value;
		})!==-1;
	},
	//通过指定id，找到这个id的所有子孙数据，放在数组中
	getChildsAll(data,id){
		var arr = [];
		var self = handle.getSelfById(data,id);
		arr.push(self);
		//在子数据
		var childs = handle.getChildsById(data,self.id);
		
		childs.forEach( function (value){
			arr = arr.concat(handle.getChildsAll(data,value.id));
		})
		return arr;
	},
	//多个id 点击选中多个id的情况下 要找到他下面所有的子孙id
	getChildsAllByIdarr(data,idArr){
		var arr = [];
		idArr.forEach(function (value){
			arr = arr.concat(handle.getChildsAll(data,value));
		})
		return arr;
	},
	delectChildsAll(data,idArr){
		var childsArr = handle.getChildsAllByIdarr(data,idArr);
		for( var i =0; i<data.length; i++){
			for(var j=0; j<childsArr.length; j++){
				if( data[i] === childsArr[j]){
					data.splice(i,1);
					i--;
					break;
				}
			}
		}
	}
	
}
