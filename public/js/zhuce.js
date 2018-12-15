var phone=$("#phone").val();
var upwd=$("#upwd").val();
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
// var txtName=form.Uname;
/*var phone=form.Account;
var uPwd=form.Password;
var Cpwd=form.conPassword;
function vali(txt,reg){
	var span=txt.nextElementSibling;
	if(reg.test(txt.value)){
	span.style.display="none";
	return true;
	}else{
	span.style.display="block";
	return false;
	}
}*/
// txtName.onblur=function(){
	// vali(this,/^\w{3,12}$/);
// };
phone.onblur=function(){
	vali(this,/^\s*1[3-8]\d{9}$/);
};
 upwd.onblur=function(){
	vali(this,/^\w{6}$/)
};
$(function(){
	$("#p-4").click(function(){
		// e.preventDefault();
		var phone=$("#phone").val();
		 var upwd=$("#upwd").val();
		$.ajax({
			url:"http://localhost:3000/denglu/isregister",
			type:"post",
			data:{phone,upwd},
			dataType:"json",
			success:function(res){
				if(res.code==1){
					alert(res.msg);
				}
			}
		})
		$.ajax({
			url:"http://localhost:3000/denglu/zhuce",
			type:"get",
			data:{phone,upwd},
			dataType:"json",
			success:function(res){
				if(res.code==1){
					alert(res.msg);
					if(location.search.startsWith("?back=")){
						var url=location.search.slice(6);
					}else{
						var url="shouye.html"
					}
					location.href=url;
				}else{
					alert(res.msg);
				}
			}
		})
	})
})