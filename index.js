
/**
 * Created by bailinlin on 2018/5/10.
 */

window.onload = function () {
		var content = document.getElementsByClassName('content-container')[0];
		var li = document.getElementsByTagName("li");
		for(var i = 0; i < li.length; i++) {
				(function tt(id) {
						li[id].addEventListener("click",function (e) {
								document.getElementsByClassName('active')[0].className = 'tab';
								this.className = 'tab active';
								var left = '-'+id*100+'%';
								content.style.marginLeft = left;
								content.style.transition = 'margin-left 1s';
						})
				})(i)
		}


		var touchStartFun = function (e) {
				try
				{
						//e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等

						var touch = e.touches[0]; //获取第一个触点
						var x = Number(touch.pageX); //页面触点X坐标
						var y = Number(touch.pageY); //页面触点Y坐标
						//记录触点初始位置
						startX = x;
						startY = y;
						imgId = e.target.getAttribute('class').split('img')[1]
				}
				catch (e) {
						console.log('touchSatrtFunc：' + e.message);
				}
		}

		var touchMoveFun = function (e) {
				try
				{
						//e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
						var touch = e.touches[0]; //获取第一个触点
						var x = Number(touch.pageX); //页面触点X坐标
						var y = Number(touch.pageY); //页面触点Y坐标

						endPos = {x:touch.pageX -startX,y:touch.pageY - startY};
						isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1:0; //isScrolling为1时，表示纵向滑动，0为横向滑动

						if(isScrolling === 0 ||isScrolling === 1 && Math.abs(endPos.y)<80){
								event.preventDefault(); //阻止触摸事件的默认行为，即阻止滚屏
								if(Math.abs(x - startX)>80) {

										if (x - startX >0) {
												var tabId = imgId-1
												content.style.marginLeft ='-'+(Number(imgId)-1)*100+'%'
												content.style.transition = 'margin-left 1s';

										} else if(Number(imgId)<3) {
												var tabId = imgId+1
												content.style.marginLeft = '-'+(Number(imgId)+1)*100+'%'
												content.style.transition = 'margin-left 1s';
										}

										//document.getElementsByClassName('active')[0].className = 'tab';
										//document.getElementById(tabId).className = 'tab active';

								}

						}else if(Math.abs(endPos.y)>80){

						}

				}
				catch (e) {
						alert('touchMoveFunc：' + e.message);
				}
		}

		var touchEndFun = function (e) {
				try {
						//e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等

						var text = 'TouchEnd事件触发';
				}
				catch (e) {
						alert('touchEndFunc：' + e.message);
				}
		}


		content.addEventListener('touchstart',touchStartFun, false);

		content.addEventListener('touchmove',touchMoveFun, false);

		content.addEventListener('touchend',touchEndFun, false);

}
