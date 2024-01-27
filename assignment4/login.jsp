<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="master.css">
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.min.js"></script>
</head>
<form method="post" id="loginform">
<div id="input">
	<h2>Login</h2>
	<h4 id="warning">Enter user name and password:</h4>
	<!-- input of email -->
	<span>Email</span> <br>
	<input type="email" name="emaill" id="emaill" placeholder=" Email"><br> <br> 
	<!-- input of password -->
	<span>Password</span>
	<input type="password" name="passwordl" id="passwordl" placeholder=" Password" required/><br> <br> 
	<input type="submit" value="Login" id="loginbtn"><br> <br>
</div>
</form>

<script src="javascript.js" type="text/javascript" ></script>
</html>