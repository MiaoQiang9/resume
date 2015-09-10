window.onload = function(){
	judgeBrowser();	//判断浏览器确定是否隐藏
	mq();	//点击导航事件
	navSlide();		//导航滑动
	countNav();		//计算滑动导航位置和大小
	sizeChange();	//当窗口大小变化是调整元素大小
	music();		//音乐符号旋转以及开关
	mouseWheel();	//鼠标滚轮
	initPlayNav();	//初始化碰撞导航位置和大小
	navMove();		//导航全屏移动
	navClick();		//碰撞导航点击事件
	selectNav()	;	//选择导航样式
	initdownward();	//初始化向下箭头位置
	downWard();		//向下箭头点击事件
	changeDownwardBackground();	////向下箭头背景变换
	skillHover();	//技能鼠标悬停事件
	proClickMouseover();	//项目click,mouseover事件
	
}

//判断浏览器确定是否隐藏
function judgeBrowser(){
	var browserName = navigator.appName;
	if(browserName == "Netscape"){
		$(".curtain").css("display","none");
	}
}

//项目click,mouseover事件
function proClickMouseover(){
	$(".title").bind("mouseover",function(){
		$(".borderTop").addClass("borderTopHover");
		$(".borderRight").addClass("borderRightHover");
		$(".borderBottom").addClass("borderBottomHover");
		$(".borderLeft").addClass("borderLeftHover");

		$(".title").addClass("titleHover");
		$("#proTitle").css("color","red");
	});

	$(".title").bind("mouseout",function(){
		$(".borderTop").removeClass("borderTopHover");
		$(".borderRight").removeClass("borderRightHover");
		$(".borderBottom").removeClass("borderBottomHover");
		$(".borderLeft").removeClass("borderLeftHover");

		$(".title").removeClass("titleHover");
		$("#proTitle").css("color","white");
	});

	//项目点击事件
	$(".title").bind("click",function(){
		$(".proBackgroudn").css("display","block");
		$(".proContent").animate({width:"80%"},2000);
		$(".proContent").addClass("proContentHover");
	});
}

//生成火车烟雾
function creatSmoke(){
	var smoke = document.createElement("div");
	smoke = $(smoke);
	var left = parseInt($("#train").css("left")) + 1114 + "px";
	smoke.css("left",left);
	smoke.addClass("smoke");
	smoke.appendTo($("#page-2"));
}

//技能鼠标悬停事件
function skillHover(){

	//html悬停
	var skillHtml = ge("html");
	skillHtml.onmouseover = function(event){
		var content = ge("contentAll");
		content.style.left = 0 + "px";
	}

	//css悬停
	var skillHtml = ge("css");
	skillHtml.onmouseover = function(event){
		var content = ge("contentAll");
		content.style.left = -612 + "px";
	}

	//js悬停
	var skillHtml = ge("js");
	skillHtml.onmouseover = function(event){
		var content = ge("contentAll");
		content.style.left = -1220 + "px";
	}

	//jsp悬停
	var skillHtml = ge("jsp");
	skillHtml.onmouseover = function(event){
		var content = ge("contentAll");
		content.style.left = -1815 + "px";
	}

	//db悬停
	var skillHtml = ge("db");
	skillHtml.onmouseover = function(event){
		var content = ge("contentAll");
		content.style.left = -2425 + "px";
	}
}

//火车向右移动
function trainRightMove(){

	//火车轮添加旋转样式
	var wheel = $(".wheel");
	wheel.addClass("rotate");

	var train = $("#train");
	var smokeLeft = parseInt(train.css("left"));
	var trainM = setInterval(function(){
		train.css("left",parseInt(train.css("left")) + 5 + "px"); 
		//alert(train.css("left"));

		//添加火车烟雾
		smokeLeft = parseInt(train.css("left"));
		if(smokeLeft%80 == 0){
			//alert(smokeLeft);
			creatSmoke();
		}

		if(parseInt(train.css("left")) >= 0){
			//alert("aaaaaaaa");
			//creatSmoke();
			wheel.removeClass("rotate");
			clearInterval(trainM);
			train.css("left","0px");
		}

	},40);
}

//显示隐藏向下箭头
function showDown(){
	var downward = ge("downward");
	var scroll = ge("scroll");
	if(parseInt(scroll.style.top) <= -300){
		downward.style.display = "none";
	}
	else if(parseInt(scroll.style.top) > -300){
		downward.style.display = "block";
	}
}

//向下箭头点击事件
function downWard(){
	var downward = ge("downward");
	downward.onclick = function(){
		var scroll = ge("scroll");
		//alert(scroll.style.top);
		if(parseInt(scroll.style.top) > -300){
			var top = (parseInt(scroll.style.top) - 100) + "%";
			scroll.style.top = top;

			//火车想右移动
			if(parseInt(scroll.style.top) <= -100){
				trainRightMove();
			}

			//隐藏向下箭头
			if(parseInt(scroll.style.top) <= -300){
				downward.style.display = "none";
			}
		}
	}
}

//向下箭头背景变换
function changeDownwardBackground(){
	//改变箭头颜色
	var id1  = 1;
	var id2 = 2;
	var id3 = 3;

	//down1背景变换
	function changeImage1(){
		//alert("aaa");
		id1 = id1 % 3 + 1;
		var url = "url(image/down" + id1 + ".png)";
		//alert(url);
		var dwon1 = ge("down1");
		down1.style.backgroundImage = url;
	}

	//down2背景变换
	function changeImage2(){
		id2 = id2 % 3 + 1;
		var url = "url(image/down" + id2 + ".png)";
		var dwon2 = ge("down2");
		down2.style.backgroundImage = url;
	}

	//down3背景变换
	function changeImage3(){
		id3 = id3 % 3 + 1;
		var url = "url(image/down" + id3 + ".png)";
		var dwon3 = ge("down3");
		down3.style.backgroundImage = url;
	}

	var change1 = setInterval(function(){
		changeImage1();
	},200);
	var change2 = setInterval(function(){
		changeImage2();
	},200);
	var change3 = setInterval(function(){
		changeImage3();
	},200);
}

//初始化向下箭头位置
function initdownward(){
	//初始化向下箭头位置
	var bodyWidth = document.documentElement.clientWidth;
	var bodyHeight = document.documentElement.clientHeight;

	var downward = $("#downward");
	downward.css("left",(bodyWidth - parseInt(downward.css("width"))) / 2 + "px");
	downward.css("top",(bodyHeight - parseInt(downward.css("height")) - 3) + "px");
}

//选择导航样式
function selectNav(){
	var select = ge("selectNav");
	var state = "on";
	select.onclick = function(){
		var navs = $(".playNav");
		if(state == "on"){
			state = "off";
			//隐藏碰撞导航
			navs.each(function(){
				$(this).css("display","none");
			});

			select.style.backgroundImage = "url(image/clear.png)";

			//显示滑动导航
			ge("nav").style.display = "block";
		}
		else if(state == "off"){
			state = "on";

			//显示碰撞导航
			navs.each(function(){
				$(this).css("display","block");
			});

			select.style.backgroundImage = "url(image/move.png)";

			//隐藏滑动导航
			ge("nav").style.display = "none";
		}
	}
}

//碰撞导航点击事件
function navClick(){
	//导航1点击事件
	var nav1 = ge("playnav-panel-1");
	nav1.onclick = function(){
		var scroll = $(".scroll");
		scroll.css({"top":"0px"});
		showDown();	//显示向下箭头
	}

	//导航2点击事件
	var nav2 = ge("playnav-panel-2");
	nav2.onclick = function(){
		var scroll = $(".scroll");
		scroll.css({"top":"-100%"});
		showDown();	//显示向下箭头
		trainRightMove();	//火车向右移动
	}

	//导航3点击事件
	var nav3 = ge("playnav-panel-3");
	nav3.onclick = function(){
		var scroll = $(".scroll");
		scroll.css({"top":"-200%"});
		showDown();	//显示向下箭头
	}

	//导航4点击事件
	var nav4 = ge("playnav-panel-4");
	nav4.onclick = function(){
		var scroll = $(".scroll");
		scroll.css({"top":"-300%"});
		showDown();	//隐藏向下箭头
	}
}

//导航全屏移动
function navMove(){
	
	var nav1 = ge("playnav-panel-1");
	var nav2 = ge("playnav-panel-2");
	var nav3 = ge("playnav-panel-3");
	var nav4 = ge("playnav-panel-4");

	//上下边界
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	
	//每次移动距离
	var distance = 2;
	//移动速度（时间）
	var time = 15;

	//移动导航1
	var move1 = setInterval(function(){
		move(nav1,1);
	},time);
	//导航1鼠标悬停停止移动
	nav1.onmouseover = function(){
		clearInterval(move1);
	}
	//导航1鼠标移开开始移动
	nav1.onmouseout = function(){
		move1 = setInterval(function(){
			move(nav1,1);
		},time);
	}

	//移动导航2
	var move2 = setInterval(function(){
		move(nav2,2);
	},time);
	//导航2鼠标悬停停止移动
	nav2.onmouseover = function(){
		clearInterval(move2);
	}
	//导航2鼠标移开开始移动
	nav2.onmouseout = function(){
		move2 = setInterval(function(){
			move(nav2,2);
		},time);
	}

	//移动导航3
	var move3 = setInterval(function(){
		move(nav3,3);
	},time);
	//导航3鼠标悬停停止移动
	nav3.onmouseover = function(){
		clearInterval(move3);
	}
	//导航3鼠标移开开始移动
	nav3.onmouseout = function(){
		move3 = setInterval(function(){
			move(nav3,3);
		},time);
	}

	//移动导航4
	var move4 = setInterval(function(){
		move(nav4,4);
	},time);
	//导航4鼠标悬停停止移动
	nav4.onmouseover = function(){
		clearInterval(move4);
	}
	//导航4鼠标移开开始移动
	nav4.onmouseout = function(){
		move4 = setInterval(function(){
			move(nav4,4);
		},time);
	}

	//导航1初始移动方向
	var x1 = false;
	var y1 = false;
	//导航2初始移动方向
	var x2 = true;
	var y2 = false;
	//导航3初始移动方向
	var x3 = false;
	var y3 = true;
	//导航4初始移动方向
	var x4 = true;
	var y4 = true;


	function move(element,id){
		switch(id){
			case 1 ://上下移动
					if(parseInt(element.style.top) <= 0){
						y1 = true;
					}
					else if(parseInt(element.style.top) >= height-parseInt(element.style.height)){
						y1 = false;
					}

					if(y1){
						element.style.top = parseInt(element.style.top) + distance + "px";
					}
					else{
						element.style.top = parseInt(element.style.top) - distance + "px";
					}

					//左右移动
					if(parseInt(element.style.left) <= 0){
						x1 = true;
					}
					else if(parseInt(element.style.left) >= width-parseInt(element.style.width)){
						x1 = false;
					}

					if(x1){
						element.style.left = parseInt(element.style.left) + distance + "px";
					}
					else{
						element.style.left = parseInt(element.style.left) - distance + "px";
					}
					break;
			case 2 ://上下移动
					if(parseInt(element.style.top) <= 0){
						y2 = true;
					}
					else if(parseInt(element.style.top) >= height-parseInt(element.style.height)){
						y2 = false;
					}

					if(y2){
						element.style.top = parseInt(element.style.top) + distance + "px";
					}
					else{
						element.style.top = parseInt(element.style.top) - distance + "px";
					}

					//左右移动
					if(parseInt(element.style.left) <= 0){
						x2 = true;
					}
					else if(parseInt(element.style.left) >= width-parseInt(element.style.width)){
						x2 = false;
					}

					if(x2){
						element.style.left = parseInt(element.style.left) + distance + "px";
					}
					else{
						element.style.left = parseInt(element.style.left) - distance + "px";
					}
					break;
			case 3 ://上下移动
					if(parseInt(element.style.top) <= 0){
						y3 = true;
					}
					else if(parseInt(element.style.top) >= height-parseInt(element.style.height)){
						y3 = false;
					}

					if(y3){
						element.style.top = parseInt(element.style.top) + distance + "px";
					}
					else{
						element.style.top = parseInt(element.style.top) - distance + "px";
					}

					//左右移动
					if(parseInt(element.style.left) <= 0){
						x3 = true;
					}
					else if(parseInt(element.style.left) >= width-parseInt(element.style.width)){
						x3 = false;
					}

					if(x3){
						element.style.left = parseInt(element.style.left) + distance + "px";
					}
					else{
						element.style.left = parseInt(element.style.left) - distance + "px";
					}
					break;
			case 4 ://上下移动
					if(parseInt(element.style.top) <= 0){
						y4 = true;
					}
					else if(parseInt(element.style.top) >= height-parseInt(element.style.height)){
						y4 = false;
					}

					if(y4){
						element.style.top = parseInt(element.style.top) + distance + "px";
					}
					else{
						element.style.top = parseInt(element.style.top) - distance + "px";
					}

					//左右移动
					if(parseInt(element.style.left) <= 0){
						x4 = true;
					}
					else if(parseInt(element.style.left) >= width-parseInt(element.style.width)){
						x4 = false;
					}

					if(x4){
						element.style.left = parseInt(element.style.left) + distance + "px";
					}
					else{
						element.style.left = parseInt(element.style.left) - distance + "px";
					}
					break;
		}	
	}

}

//初始化碰撞导航位置和大小
function initPlayNav(){

	var bodyWidth = document.documentElement.clientWidth;
	var bodyHeight = document.documentElement.clientHeight;
	//alert(bodyWidth);

	var nav1 = ge("playnav-panel-1");
	//alert(nav1);
	var nav2 = ge("playnav-panel-2");
	var nav3 = ge("playnav-panel-3");
	var nav4 = ge("playnav-panel-4");

	//导航大小
	var size = bodyWidth / 13;
	//alert(size);

	var nav = $(".playNav");
	nav.each(function(){
		$(this).css({"width":size});
		$(this).css({"height":size});
	});


	//初始化导航位置
	var leftNav1 = bodyWidth / 2 - size - 10;
	var topNav1 = bodyHeight / 2 - size - 10;

	var topNav2 = topNav1;
	var leftNav2 = leftNav1 + size + 20;
	//alert(leftNav2);

	var topNav3 = topNav1 + size + 20;
	var leftNav3 = leftNav1;

	var topNav4 = topNav3;
	var leftNav4 = leftNav2;

	nav1.style.left = leftNav1 + "px";
	nav1.style.top = topNav1 + "px";

	nav2.style.left = leftNav2 + "px";
	nav2.style.top = topNav2 + "px";

	nav3.style.left = leftNav3 + "px";
	nav3.style.top = topNav3 + "px";

	nav4.style.left = leftNav4 + "px";
	nav4.style.top = topNav4 + "px";
}

//鼠标滚轮事件

var wheelCount = 3;
function mouseWheel(){
	document.body.onmousewheel = function(event) {
		wheelCount++;
	    wheelCount %= 4;
		if(wheelCount == 0){
		    var flag = event.wheelDelta > 0 ? "up" : "down";
			var scroll = ge("scroll");
			var downward = ge("downward");
			if(flag == "up"){
				if(parseInt(scroll.style.top) < 0){
					var top = (parseInt(scroll.style.top) + 100) + "%";
					scroll.style.top = top;
				}
				
				downward.style.display = "block";		
			}
			else{
				if(parseInt(scroll.style.top) > -300){
					var top = (parseInt(scroll.style.top) - 100) + "%";
					scroll.style.top = top;

					//火车开始向右移动
					if(parseInt(scroll.style.top) <= -100){
						trainRightMove();	//火车向右移动
					}

					//隐藏向下箭头
					if(parseInt(scroll.style.top) <= -300){
					downward.style.display = "none";
				}
				}
				
			}
		}
	};
}

//音乐符号旋转以及开关
function music(){
	var musicButton = $("#audio-btn");
	musicButton.bind("click",function(){
		var className = $(this).attr("class");
		var id = ge("media");
		className == "on" ? $(this).removeClass("on").addClass("off") : $(this).removeClass("off").addClass("on");
		className == "on" ? id.pause() : id.play();

	});
	ge("media").play();
}

//当窗口大小变化是调整元素大小
function sizeChange(){
	window.onresize = function(){
		countNav();				//计算滑动导航位置和大小
		initPlayNav();			//初始化碰撞导航位置和大小
		initdownward()	//初始化向下箭头位置
		//navMove();				//导航全屏移动
		/*此处有bug*/
	}
}

//计算滑动导航位置和大小
function countNav(){
	//alert("窗口大小变化");
	var bodyWidth = document.documentElement.clientWidth;
	var bodyHeight = document.documentElement.clientHeight;
	//alert(bodyWidth + "    " + bodyHeight);

	//计算导航项目中的每个大小
	var itemSize = bodyWidth / 13;
	//alert("itemSize" + itemSize);
	//alert("size:  " + itemSize);
	var navItem = $(".nav-item");
	//alert("设置大小");

	//设置导航栏大小
	var nav = $("#nav");
	nav.css({"width":itemSize});
	nav.css({"height":itemSize * 3 + 30});

	//设置导航栏上下位置
	var top = (bodyHeight - parseInt(nav.css("height"))) / 2;
	nav.css({"top":top});

	//设置每个导航大小
	navItem.each(function(){
		$(this).css({"width":itemSize});
		$(this).css({"height":itemSize});
	});
	/*navItem.length = 4;
	alert(navItem.length);
	for(var i = 0; i < 4; i++){
		
	}*/
}

//导航滑动
function navSlide(){
	var navContent = ge("nav");
	var ulNav1 = ge("nav-Scroll1");
	var ulNav2 = ge("nav-Scroll2");

	//navContent.scrollTop = 0;
	//ulNav2.innerHTML = ulNav1.innerHTML;
	var speed = 15;
	function scrollUp(){
		if(navContent.scrollTop >= ulNav1.scrollHeight){
			navContent.scrollTop = 0;
		}
		else{
			navContent.scrollTop++;
		}
	}

	var myScroll = setInterval(scrollUp,speed);

	navContent.onmouseover = function(){
		clearInterval(myScroll);
	}

	navContent.onmouseout = function(){
		myScroll = setInterval(scrollUp,speed);
	}
}

function ge(id){
	return document.getElementById(id);
}

//点击导航事件
function mq(){
	//第一次点击导航会直接跳转没有过度，故有此操作
	$(".scroll").css({"top":"0px"});

	//点击page1
	var click1 = ge("nav-panel-1");
	click1.onclick = clickPage1;
	var click21 = ge("nav2-panel-1");
	click21.onclick = clickPage1;

	function clickPage1(){
		var scroll = $(".scroll");
		scroll.css({"top":"0px"});
		showDown();	//显示向下箭头
	}
	//点击page2
	var click2 = ge("nav-panel-2");
	click2.onclick = clickPage2;
	var click22 = ge("nav2-panel-2");
	click22.onclick = clickPage2;

	function clickPage2(){
		var scroll = $(".scroll");
		scroll.css({"top":"-100%"});
		showDown();	//显示向下箭头
		trainRightMove();	//火车向右移动
	}
	//点击page3
	var click3 = ge("nav-panel-3");
	click3.onclick = clickPage3;
	var click23 = ge("nav2-panel-3");
	click23.onclick = clickPage3;

	function clickPage3(){
		var scroll = $(".scroll");
		scroll.css({"top":"-200%"});
		showDown();	//显示向下箭头
	}

	//点击page4
	var click4 = ge("nav-panel-4");
	click4.onclick = clickPage4;
	var click24 = ge("nav2-panel-4");
	click24.onclick = clickPage4;

	function clickPage4(){
		var scroll = $(".scroll");
		scroll.css({"top":"-300%"});
		showDown();	//隐藏向下箭头
	}
}
