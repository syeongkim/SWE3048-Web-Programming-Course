<!DOCTYPE html>
<html>
<head>
<title>Document</title>
<link rel="stylesheet" href="main.css">
</head>
<body>
	<%@ page import="java.sql.*"%>
	<%@ page language="java" contentType="text/html; charset=ISO-8859-1"%>
	<header class="header">
		<div id="menuleft">
			<h1>SKKU GROUP BUYING</h1>
		</div>
		<div id="menuright">
			<form>
				<input type="submit" name="menu" id="home" value="HOME"> 
				<input type="submit" name="menu" id="register" value="REGISTER"> 
				<input type="submit" name="menu" id="participate" value="PARTICIPATE">
				<input type="submit" name="menu" id="mypage" value="MYPAGE">
				<input type="submit" name="menu" id="login" value="LOGIN"> 
				<input type="submit" name="menu" id="logout" value="LOGOUT"> 
				<input type="submit" name="menu" id="signup" value="SIGNUP">
			</form>
		</div>
	</header>
	<main>
		<div>
			<%
			String[] menu = request.getParameterValues("menu");
			if (menu != null && menu.length > 0) {
				if (("HOME").equals(menu[0])) {
			%>
			<jsp:include page="home.jsp"></jsp:include>
			<%
			// if user click "REGISTER" menu, screen turns to register page
			} else if (("REGISTER").equals(menu[0])) {
			%>
			<jsp:include page="register.jsp"></jsp:include>
			<%
			// if user click "PARTICIPATE" menu, screen turns to participate page
			} else if (("PARTICIPATE").equals(menu[0])) {
			%>
			<jsp:include page="showitem.jsp"></jsp:include>
			<%
			// if user click "MYPAGE" menu, screen turns to mypage page
			} else if (("MYPAGE").equals(menu[0])) {
			%>
			<jsp:include page="mypage.jsp"></jsp:include>
			<%
			// if user click "LOGIN" menu, screen turns to login page
			} else if (("LOGIN").equals(menu[0])) {
			%>
			<jsp:include page="login.jsp"></jsp:include>
			<%
			// if user click "LOGOUT" menu, account logged out
			} else if (("LOGOUT").equals(menu[0])) {
			try {
				Class.forName("com.mysql.cj.jdbc.Driver"); // MySQL database connection
				Connection conn = DriverManager
				.getConnection("jdbc:mysql://localhost:3306/skku_group_buying?" + "user=root&password=018455lL!12");
				int login = 1;
				int logout = 0;
				PreparedStatement pst = conn.prepareStatement("Update users set login=? where login=?");
				pst.setInt(1, logout);
				pst.setInt(2, login);
				pst.executeUpdate();
			%>
			<jsp:include page="home.jsp"></jsp:include>
			<%
			} catch (Exception e) {
				out.println(e);
			}
			%>
			<%
			// if user click "SIGNUP" menu, screen turns to signup page
			} else if (("SIGNUP").equals(menu[0])) {
			%>
			<jsp:include page="signup.jsp"></jsp:include>
			<%
			// if user do not click any menu, set default page as home page
			} else {
			%>
			<jsp:include page="home.jsp"></jsp:include>
			<%
			}
			} else {
			%>
			<jsp:include page="home.jsp"></jsp:include>
			<%
			}
			%>
		</div>
	</main>
	<footer>
		<div id="content">
			<h3>SKKU GROUP BUYING</h3>
			<p>(03063)25-2, Seonggyungwan-ro, Jongno-gu, Seoul, Republic of
				Korea</p>
			<p>COPYRIGHT (c) 2023 SKKU GROUP BUYING ALL RIGHTS RESERVED</p>
			<p>Email | carsk0607@g.skku.edu TEL | 010-4234-9468</p>
		</div>
	</footer>
</body>
</html>