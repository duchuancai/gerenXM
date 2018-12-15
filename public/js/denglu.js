var phone=$(".youxiang").val();
var upwd=$(".mima").val();
function vali(txt,reg){
	var span=txt.nextElementSibling;
	if(reg.test(txt.value)){
	span.style.display="none";
	return true;
	}else{
	span.style.display="block";
	return false;
	}
}
phone.onblur=function(){
	vali(this,/^\s*1[3-8]\d{9}$/);
};
upwd.onblur=function(){
	vali(this,/^\w{6}$/)
};
$(function(){
  $(".denglu").click(function(e){
    e.preventDefault();
    var phone=$(".youxiang").val();
    var upwd=$(".mima").val();
    console.log(111);
    (async function(){
      var res=await $.ajax({
        url:"http://localhost:3000/denglu/signin",
        type:"post",
        data:{phone,upwd},
        dataType:"json"
      })
      //console.log(res);
      if(res.code==0){
        alert(res.msg);
      }else{
        alert("登录成功！即将返回原来的页面")
        if(location.search.startsWith("?back=")){
          var url=location.search.slice(6);
        }else{
          var url="shouye.html"
        }
        location.href=url;
      } 
    })()
  })
})
var dcc=document.getElementById("dcc");
        var a=dcc.getContext("2d");
        //验证码一定是由服务器程序创建   PHP，java，node.js等
        //1.创建矩形作为验证码的背景
          //1.1创建矩形
        a.fillStyle=rc(180,233);
        a.fillRect(0,0,120,30);
        //2.创建随机文字4个绘制背景上
        var pool="ABCDEFGHIJK0123456abcdefg";//随机字符
        for(var i=0;i<4;i++){//随机循环4个字符出来
            var c=pool[rn(0,pool.length)];
            a.textBaseline="top";//设置基线
            a.fillStyle=rc(30,180);//字体颜色和画布颜色一样，需设置文字颜色
            a.font="23px SimHei";//设置字体大小
            a.fillText(c,i*25+5,5);//填充文字
        }
        //3.创建5条干扰线
        for(var i=0;i<5;i++){
            a.beginPath();//开始新路径
            a.strokeStyle=rc(0,250);//随机颜色
            a.moveTo(rn(0,120),rn(0,30));//移动到指定点
            a.lineTo(rn(0,120),rn(0,30));//从当前点到指定点画直线
            a.stroke();
        }
        //4创建20个干扰点
        for(var i=0;i<20;i++){
            a.fillStyle=rc(0,255);
            a.beginPath();
            a.arc(rn(0,120),rn(0,30),1,0,360*Math.PI/180);
            a.fill();
        }
        function rn(min,max){//随机数
            var n=Math.random()*(max-min)+min;
            return Math.floor(n)
        }
        function rc(min,max){//随机颜色
            var r=rn(min,max);
            var g=rn(min,max);
            var b=rn(min,max);
            return `rgb(${r},${g},${b})`;
        }

