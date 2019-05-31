$(function(){
	
	/*
	 * 
	 * 
	 * */
	
	$(".Error").each(function(){
		showError($(this));
	})
	$("#submitBtn").hover(
	function(){
		
		$("#submitBtn").attr("src" ,"/bookgoods/images/regist2.jpg");
	},
	function(){
		
		$("#submitBtn").attr("src" ,"/bookgoods/images/regist1.jpg");
	}
			
	);
	$(".inputClass").focus(function(){
		
		var labelId=  $(this).attr("id")+"Error";
		$("#"+labelId).text("");
		showError($("#"+labelId))
	});
		
	$(".inputClass").blur(function(){
		
		 var id=($(this).attr("id"));
		 var funName = "validate" + id.substring(0,1).toUpperCase() + id.substring(1) + "()";//得到对应的校验函数名
		 var validate="validate"+id.substring(0,1).toUpperCase()+id.substring(1)+"()";
		 eval(validate);
	});
		
	$("#submitBtn").submit(function(){
		
		alert(1);
		var fun= "validate"+$(this).attr("id").substring(0,1).toUpperCase()+$(this).attr("id").substring(1)+"()";
		alert(fun);
		$(".inputClass").each(function(){
			
			alert($(this).attr("id"));
			
		}) 
	});
	
	
});
function validateLoginname(){
	var  id="loginname";
	var value=$("#"+id).val();
	if(!value)
		{
			var label=$("#loginnameError").text("用户名不能为空")
			showError(label);
			return false;
		}
	if(value.length<3||value.length>20)
		{
		var label=$("#loginnameError").text("用户名必须大于3小于20");
			showError(label);
			return false;
		}
	return true;
	
}
function validateLoginpass(){
	
	var  id="loginpass";
	var value=$("#"+id).val();
	if(!value)
		{
			var label=$("#loginpassError").text("密码名不能为空")
			showError(label);
			return false;
		}
	if(value.length<3||value.length>20)
		{
		var label=$("#loginpassError").text("密码必须大于3小于20");
			showError(label);
			return false;
		}
	return true;
}
function validateReloginpass(){
	
	var  id="reloginpass";
	var value=$("#"+id).val();
	if(!value)
		{
			var label=$("#reloginpassError").text("密码名不能为空")
			showError(label);
			return false;
		}
	if(value!=$("#loginpass").val())
		{
		var label=$("#reloginpassError").text("两次输入密码不一致");
			showError(label);
			return false;
		}
	return true;
}
function validateEmail(){
	
	var  id="email";
	var value=$("#"+id).val();
	if(!value)
		{
			var label=$("#emailError").text("邮箱不能为空")
			showError(label);
			return false;
		}
	if(!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}/.test($("#email").val()) )
		{
		var label=$("#emailError").text("邮箱格式不正确");
			showError(label);
			return false;
		}
	return true;
}
function validateVerifyCode(){
	var  id="verifyCode";
	var value=$("#"+id).val();
	if(!value)
		{
			var label=$("#verifyCodeError").text("验证码不能为空")
			showError(label);
			return false;
		}
	if(id.length!=4)
		{
		var label=$("#verifyCodeError").text("验证码不正确");
			showError(label);
			return false;
		}
	return true;
	
	
}
function showError(ele){
	var text=ele.text();
		if(!text){
			ele.css("display","none");
		}
		else
		{
		ele.css("display","");
		}
	
}
function _hyz(){
	
	$("#imgVerifyCode").attr("src","/bookgoods//VerifyCodeServlet?a="+new Date().getTime());
}
