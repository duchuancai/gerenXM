$(function(){
	if(location.search.indexOf("lid=")!=-1){
		var lid=location.search.split("=")[1];
		//console.log(lid);
		(async function(){
		  var res=await $.ajax({
			url:"http://localhost:3000/xiangqingye/",
			type:"get",
			data:{lid},//"lid="+lid,
			dataType:"json"
			})
			//var res=open(res)
			console.log(res);	
		  var {product,pics,specs}=res;
		  var {title,subtitle,price,present}=product;
			var $divZhuti2=$(".zhuti-2")
			$divZhuti2.children().first().html(title);
			/*divZhuti2.children[0].innerHTML=title;*/
			$divZhuti2.children(":nth-child(2)>:nth-child(2)").html(subtitle);
			/*divZhuti2.children[1].children[1].innerHTML=subtitle;*/
			$divZhuti2.children(":nth-child(3)").html(price);
			/*divZhuti2.children[2].innerHTML="¥"+price.toFixed(2);*/
			$divZhuti2.children(":nth-child(4)>:nth-child(1)").html(present);
		 /* divZhuti2.children[3].children[1].innerHTML=present;*/
		 /*$divZhuti2.children(":nth-child(7)").html(versions);*/

		  var html="";
		  for(var sp of specs){
			  html+=`<p class="p-7"><a href="xiangqingye.html?lid=${sp.lid}" class="${sp.lid==lid?'p-10':''}">${sp.specs} </p>`
			}
			//console.log(html)
		  $divZhuti2.children(":nth-child(7)").html(html);

      //var $divZhuti1=$("zhuti-1");
      //var $ul=$("img3");
		  var html="";
			for(var pic of pics){
				var {xiao,zhong,da}=pic;
				html+=`<li>
				<img src="${xiao}" data-md="${zhong}" data-lg="${da}">
				</li>`
			}
			console.log(html)
      //$divZhuti1.children(":nth-child(1)").html(html);
      $(".img3").html(html);
      $(".img3").css("width",122*pics.length+"px");
      var $mImg=$(".img3").parent().parent().parent().children(":first()"); 
      $mImg.attr("src",pics[0].zhong);
      var $divlg=$("#div-lg");
      $divlg.css("backgroundImage",`url(${pics[0].da})`);
      $divlg.css("backgroundRepeat",'no-repeat');
      //鼠标进入每个小图片，切换中图片和大图片
     
      $(".img3").on("mouseover","img",function(e){
        var $t=$(e.target);
        var md=$t.attr("data-md");
        var lg=$t.attr("data-lg");
        console.log(md,lg,1);
        $mImg.attr("src",md);
        $divlg.css("backgroundImage",`url(${lg})`);
        $t.parent().addClass("active").siblings().removeClass("active")
});
//左右按钮
var left1=$(".img-1");
var left2=$(".img-2");
left1.on("click",function(){
    $(".img3").css("left",30)
})
left2.on("click",function(){
    $(".img3").css("left",-120);
})
//放大镜
var mask=$("#mask"); //透明玻璃板 xiao 
var supermask=$("#super-mask"); //半透明遮罩 da
var size=176,max=400-176;
supermask.hover(
    function(){
        mask.toggleClass("d-none");
        $divlg.toggleClass("d-none");
    }
)
.mousemove(function(e){
  console.log(1)
  var left=e.offsetX-size/2;
  var top=e.offsetY-size/2;
  if(left<0){left=0}
  else if(left>max){left=max};
  if(top<0){top=0}
  else if(top>max){top=max}
  mask.css("left",left);
  mask.css("top",top);
  console.log(left,top);
  $divlg.css("backgroundPosition",`-${left*18/13}px -${top*18/13}px`);
});
     /* $ul.onmouseover=function(e){
        if(e.target.nodeName==="IMG"){
          var img=e.target;
          var zhong=img.dataset.zhong;
          var da=img.dataset.da;
          mImg.src=zhong;
          lgDiv.style.backgroundImage=`url(${da})`;
        }
      }
      //小图片左右移动
      //var $ul=$(ul);
      var $left=//找到左边按钮-后退按钮
        $("img-1")
      //找到右边按钮-前进按钮
      var $right=$("img-2")
      //如果pics中图片总数<=4
      if(pics.length<=3)
        //为右边按钮添加disabled class
        $right.addClass("disabled")
      var moved=0;//记录已经左移的图片个数
      $left.on("click",function(){
        var $left=$(this);
        if(!$left.is(".disabled")){
          moved--;//已经左移的图片个数-1
          //ul的marginLeft始终等于:-li宽度62*左移图片个数
          $ul.css("marginLeft",-62*moved)//不用px
          $right.removeClass("disabled")
          if(moved==0)
            $left.addClass("disabled")
        }
      })
      $right.on("click",function(){
        var $right=$(this);
        if(!$right.is(".disabled")){
          moved++;//已经左移的图片个数+1
          $ul.css("marginLeft",-62*moved)
          //让左边按钮去掉disabled class
          $left.removeClass("disabled")
          //如果pics中的图片总个数-moved次数==4
          if(pics.length-moved==4)
            //为右边按钮加上disabled class
            $right.addClass("disabled")
        }
      })

      var $mImg=$(mImg),//中图片
          $lgDiv=$(lgDiv),//大图片
          $mask=$("#mask"),//半透明遮罩
          $smask=$("#super-mask");//透明玻璃板
      var MSIZE=176,//mask的大小
          MAX=352-MSIZE;//top和left的最大值
      $smask
      .hover(
        function(){
          $mask.toggleClass("d-none");
          $lgDiv.toggleClass("d-none");
        }
      )
      .mousemove(function(e){
        var left=e.offsetX-MSIZE/2;
        var top=e.offsetY-MSIZE/2;
        if(left<0) left=0; 
        else if(left>MAX) left=MAX;
        if(top<0) top=0;
        else if(top>MAX) top=MAX;
        $mask.css({left,top});
        $lgDiv.css("background-position",
          `-${16/7*left}px -${16/7*top}px`)
      })*/
		})()
	} 
})