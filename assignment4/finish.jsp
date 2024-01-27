<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="master.css">
<title>Document</title>
</head>
<body>
	<div id="main">
			<form>
			<div id="header">
				<input type="submit" name="menu" class="loginsection" value="Login">
				<input type="submit" name="menu" class="signupsection" value="Sign Up">
			</div>
			</form>
			
			<%
		String[] menu = request.getParameterValues("menu");
		if (menu != null && menu.length > 0) {
			if (("Sign Up").equals(menu[0])) {
		%>
		<jsp:include page="signup.jsp"></jsp:include>
		<%
		} if (("Login").equals(menu[0])) {
		%>
		<jsp:include page="login.jsp"></jsp:include>
		<%
		}
		} else {
		%>
		<h2>You are signed up.</h2>
		<%
		}
		%>
	<script src="javascript.js" type="text/javascript" ></script>	
</body>
</html>
