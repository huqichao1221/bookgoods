<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    
    
    <title>注册页面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="<c:url value='/jsps/css/user/regist.css'/>"/>
	<script type="text/javascript" src="<c:url value='/jquery/jquery-1.5.1.js'/>"></script>
	<script type="text/javascript" src="<c:url value='/jsps//js/user/regist.js'/>"></script>

  </head>
  
  <body>
    <div  id="divMain">
    	<div id="divTitle"><span id="registTitle">新用户注册</span></div>
    	<div id="divFrom" > 
    	
    	
    	<input   type="hidden" name="method" value="registUser" />
    	<table id="tableFrom" >
    		<tr>
    			<td class="tdText">用户名:</td>
    			<td class="tdInput"><input class="inputClass" type="text" name="loginname" id="loginname"/></td>
    			<td class="tdError"><label class="Error" id="loginnameError">用户名不能为空</label></td>
    		</tr>
    		<tr>
    			<td class="tdText">登录密码:</td>
    			<td><input class="inputClass" type="password" name="loginpass" id="loginpass"/></td>
    			<td><label class="Error" id="loginpassError">密码不能为空</label></td>
    		</tr>
    		<tr>
    			<td class="tdText">确认密码:</td>
    			<td><input class="inputClass" type="password" name="reloginpass" id="reloginpass"/></td>
    			<td><label class="Error" id="reloginpassError">用户名不能为空</label></td>
    		</tr>
    		<tr>
    			<td class="tdText">Email:</td>
    			<td><input class="inputClass" type="text" name="email" id="email"/></td>
    			<td><label class="Error" id="emailError">邮箱不能为空</label></td>
    		</tr>
    		<tr>
    			<td class="tdText">图形验证码:</td>
    			<td><input class="inputClass" type="text" name="verifyCode" id="verifyCode"/></td>
    			<td><label class="Error" id="verifyCodeError"></label></td>
    		</tr>
    		<tr>
    			<td></td>
    			<td id="tdVerifyCode"><div><img  id="imgVerifyCode"  src="<c:url value='/VerifyCodeServlet'/>"/></div></td>
    			<td><a href="javascript:_hyz()">换一张</a></td>
    		</tr>
    		<tr>
    			<td></td>
    			<td><input id="submitBtn" type="image" src="<c:url value='/images/regist1.jpg'/>"/></td>
    			<td><label></label></td>
    		</tr>
    	</table>
    
    	</div>
    </div>
  </body>
</html>
