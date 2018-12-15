//$(function(){
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/xiagnqinye/",
		type:"get",
		dataType:"json"
	});
	
	//取出商品	1
	//var html="";
	
	var p=res[0];
	var {xiao,zhong,da,title,subtitle,price,present,versions,color,href}=p;
	var html=`<div class="zhuti">
	<div class="zhuti1">
		<div class="zhuti12">
			<img src="${zhong}">
		</div>
		<div class="zhuti-1">
			<img src="img/arrow-left.png" class="jiantou1">
			<div class="zhuti-1-1">
				<ul>
					<li>
						<img src="${xiao}" alt="">
					</li>
					<li><img src="img/ax-1.jpg" alt=""></li>
					<li><img src="img/ax-1.jpg" alt=""></li>
				</ul>
			</div>
			<img src="img/arrow-right.png" class="jiantou2">
		</div>
		<div class="ddd">
				<img src="${da}" alt="">
		</div>
	</div>
<div class="zhuti-2">
	<p class="zhuti-22">${title}</p>
	<p id="gray"><b>[新品现货在售]</b>${subtitle}</p>
	<p>￥${price}</p>
	<div class="zhuti-2-1"><p class="zhuti-2-1-1">赠品</p><span>${present}</span></div>
	<div class="zhuti-2-2">
		<p><b></b>北京<b></b> 北京市<b></b> 东城区<b></b><a href="">修改</a></p>
		<span id="span-1">有现货</span>
	</div>
	<p id="p-6">选择版本</p>
	<div class="zhuti-3">
		<p id="p-7"><a href="${href}" id="p-10" >${versions} </a>1399元</p>
		<p id="p-8"><a href="xiagnqinye.html?lid=2">6GB+64GB全网通 </a>1699元</p>
		<p id="p-9"><a href="xiagnqinye.html?lid=3">6GB+128GB全网通 </a>1999元</p>
	</div>
	<p id="p-6">${color}</p>
	<p id="p-11"><a id="p-12" href="">我</a>深空灰</p>
	<p id="p-12">选择小米保障服务<a href="">了解保障服务 ></a></p>
	<div>
		<div class="baoxian">
			<p id="oo">〇</p>
			<img src="img/af.jpg" alt="">
			<ul>
				<li>意外保险服务</li>
				<li>手机意外摔落/进水/碾压等损坏</li>
				<li>
					<span>〇</span>我已阅读
					<a href="">服务条款</a>
					<b>|</b>
					<a href="">常见问题</a>
					<a  id="99" href=""><span >99元</span></a>
				</li>
			</ul>
		</div>
		<div class="baoxian">
			<p id="oo">〇</p>
			<img src="img/af.jpg" alt="">
			<ul>
				<li>意外保险服务</li>
				<li>手机意外摔落/进水/碾压等损坏</li>
				<li>
					<span>〇</span>我已阅读
					<a href="">服务条款</a>
					<b>|</b>
					<a href="">常见问题</a>
					<a  id="99" href=""><span >99元</span></a>
				</li>
			</ul>
		</div>
	</div>
	<div class="zongji">
		<p>小米8 青春版 4GB+64GB 深空灰<a href="">1399元</a></p>
		<p>总计 ：1399元</p>
	</div>
	<div class="lalala">
		<a id="xihuan" href="">加入购物车</a><b></b> <a id="xihuan-1" href="">喜欢</a>
		<p>①七天无理由退货<b></b> ②七天无理由退货<b></b>③七天无理由退货</p>
	</div>
</div>`;
	
var parent=document.querySelector(
		".zhuti");
		parent.innerHTML=html;

})();
