window.onload=function(){
// 轮播图
	var slide=document.getElementById('slide');
	var oul1=slide.getElementsByTagName('ul')[0];
	var oul2=slide.getElementsByTagName('ul')[1];
	var ali1=oul1.getElementsByTagName('li');
	var ali2=oul2.getElementsByTagName('li');
	var num=0;
	var timer=null;

	for(num=0;num<ali1.length;num++){
		ali2[num].index=num;
		ali2[num].onmouseover=function(){
			clearInterval(timer);
			for(var i=0;i<ali1.length;i++){
				ali1[i].className=''
			}
			ali1[this.index].className='active'
		};
		ali2[num].onmouseout=function(){
			num=this.index;
			clearInterval(timer);
			timer=setInterval(function(){
				for(var i=0;i<ali1.length;i++){
					ali1[i].className=''
				}
				ali1[(num+1)%ali1.length].className='active';
				num++
			},10000)
		}
	}

	timer=setInterval(function(){
		for(var i=0;i<ali1.length;i++){
			ali1[i].className=''
		}
		ali1[(num+1)%ali1.length].className='active';
		num++
	},10000);

// 移动端主菜单按钮
	var mainicon=document.getElementsByClassName('glyphicon-th-list')[0];
	var headernav=document.getElementById('headernav');
	var aheadernavli=document.getElementById('headernav').children;
	var onoff=true;
	var headernavheight=0;

	for(var d=0;d<aheadernavli.length;d++){
		headernavheight=headernavheight+aheadernavli[d].offsetHeight
	}
	mainicon.onmouseover=function(){
		if(onoff){
			headernav.style.height=headernavheight+'px';
			onoff=!onoff
		}
		else{
			headernav.style.height='0';
			onoff=!onoff
		}
	};
//移动端子菜单展开折叠
	var f=0;
	for(var f=0;f<aheadernavli.length;f++){
		aheadernavli[f].onmouseover=function(){
			this.getElementsByTagName('ul')[0].style.display='block';
			var headernavheight=0;
			for(var d=0;d<aheadernavli.length;d++){
				headernavheight=headernavheight+aheadernavli[d].offsetHeight
			}
			headernav.style.height=headernavheight+'px'
		};
		aheadernavli[f].onmouseout=function(){

			this.getElementsByTagName('ul')[0].style.display='none';
			var headernavheight=0;
			for(var d=0;d<aheadernavli.length;d++){
				headernavheight=headernavheight+aheadernavli[d].offsetHeight
			}
			headernav.style.height=headernavheight+'px'
		}
	}

	
// 回到顶部动态效果
	var toTop = document.getElementById("toTop");
	var height;
	window.onscroll = function(){
		//height :滚动条距离顶部的高度
		//通过document.body.scrollTop（网页版被卷起的高度），
		// 或者document.documentElement.scrollTop（垂直方向上滚动值）来获取。
		height = document.body.scrollTop||document.documentElement.scrollTop;
		if(height>300){
			toTop.className = "return-top active";
		}else{
			toTop.className = "return-top";
		}
	};

	toTop.onclick = function(){
		var termId = setInterval(function(){
			height-=50;
			if(height<=0){

				clearInterval(termId);
			}
			window.scrollTo(0,height);
		},1);
	}










};