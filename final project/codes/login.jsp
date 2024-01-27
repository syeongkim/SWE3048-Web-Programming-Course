<!DOCTYPE html>
<html>
<head>
<title>Document</title>
<link rel="stylesheet" href="main.css">
</head>
<body>
	<div id="login">
		<form method="post" action="validate_login.jsp" id="loginform">
			<div class="input">
				<h2>Login</h2>
				<h4 id="warning">Enter your ID and password to login</h4>
				<!-- user enter ID -->
				<span>ID</span> <br> 
				<input type="text" name="idl" id="idl" required><br> <br>
				<!-- user enter password -->
				<span>Password</span> <br>
				<input type="password" name="passwordl" id="passwordl" required /><br> <br> 
				<!-- user submit the form -->
				<input type="submit" value="Login" class="submitbtn"><br> <br>
			</div>
		</form>
	</div>
</body>