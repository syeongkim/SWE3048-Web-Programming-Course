<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="master.css">
<title>Document</title>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.min.js"></script>
</head>
<body>
	<%@ page language="java" contentType="text/html; charset=ISO-8859-1"%>
	<!-- header menu -->
	<div id="main">
			<form>
			<div id="header">
				<input type="submit" name="menu" id="loginsection" value="Login">
				<input type="submit" name="menu" id="signupsection" value="Sign Up">
			</div>
			</form>
		<%
		String[] menu = request.getParameterValues("menu");
		if (menu != null && menu.length > 0) {
			if (("Sign Up").equals(menu[0])) {
		%>
		<!-- if user click "Sign Up" menu, screen turns to Sign Up page -->
		<jsp:include page="signup.jsp"></jsp:include>
		
		<%
		// if user click "Login" menu, screen turns to Login page
		} if (("Login").equals(menu[0])) {
		%>
		<jsp:include page="login.jsp"></jsp:include>
		<%
		}
		} else {
		%>
		<!-- print "you are signed up" -->
		<div id="textsection">
			<h2>You are signed up.</h2>
		</div>
		<%
		}
		%>
	</div>
	<script src="javascript.js" type="text/javascript" ></script>
</body>
</html>