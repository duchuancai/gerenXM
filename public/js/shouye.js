(async function(){   //async ES7的语法
	var res=await ajax({
		url:"http://localhost:3000/shouye/",
		type:"get",
		dataType:"json"
	});
/*//取第一个商品 
	var p=res[0];

	//解构第一个商品的属性
	var {dazhe,img,title,subtitle,price}=p;
	var html=`<p id="xp">${dazhe}</p>
					<a ><img src="${img}" alt=""></a>
					<a ><p>${title}</p></a>
					<p id="xp-1">${subtitle}</p>
					<p id="xp-2">${price}</p>`;
	var parent=document.querySelector(
	".shouji>.xm3-1>div:first-child"
	);
	parent.innerHTML=html;*/	
var html="";
	for(var p of res){		
	var {dazhe,img,title,subtitle,price,herf}=p;
	html+=`<div>
				<p id="xp">${dazhe}</p>
				<a href="${herf}"><img src="${img}" alt=""></a>
				<a href=""><p>${title}</p></a>
				<p id="xp-1">${subtitle}</p>
				<p id="xp-2">￥${price.toFixed(2)}</p>
			</div>`	
	}
	var parent=document.querySelector(
		".shouji>.xm3-1");
		parent.innerHTML=html;
/*页头下拉列表*/
var html="";
for(var p of res){
	var {dazhe,img,title,price}=p;
	html+=`<div class="daohang-top-2">
			<p class="daohang-top-1-6">${dazhe}</p>
			<img id="img1" src="${img}" alt="">
			<p id="p7"><a href="">${title}</a></p>
			<p id="p1">￥${price.toFixed(2)}</p>
			</div>`
}
var parent=document.querySelector("daohang>daohang-top");
parent.innerHTML=html;
})();
/*lunbo */
function task(){
    var $show=$(".show");
    $show.removeClass("show");
    /*轮播到最后一张*/
    if($show.next().length==0){
        var next=$show.parent().children("img:first-child")
        var index=0;
    }else{
        var next=$show.next();
        var index=$show.index()+1;
	}
	next.addClass("show");
	$("ul.circle").children(":eq("+index+")")
	.addClass("active").siblings().removeClass("active")
}
var timer=setInterval(task,2000);

/*点击4个小圆点*/
var $ul=$("ul.circle");
var $img=$("#slider")
$ul.on("click","li",function(){
	var i=$(this).index()
	$img.children(":eq("+i+")").addClass("show")
	.siblings().removeClass("show");
	$ul.children(":eq("+i+")").addClass("active")
	.siblings().removeClass("active");
})

var gg=$("#guanggao");
var time=setTimeout(function(){
	gg.removeClass("d-none")
},2000)
var btn=gg.children().last();
btn.on("click",function(){
	gg.remove();
})