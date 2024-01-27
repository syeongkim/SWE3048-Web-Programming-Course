<html>
<head>
<link rel="stylesheet" href="master.css">
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.min.js"></script>
</head>
<form action="login.jsp" method="post" id="signupform">
<div id="input">
	<h2>Sign Up</h2>
	<h4>Fill in the form:</h4>
	<!-- input of first name -->
	<span>First name</span> 
	<input type="text" name="firstname" id="firstname" placeholder=" First name" required/><br><br>
	<!-- input of last name -->
	<span>Last name</span> 
	<input type="text" name="lastname" id="lastname" placeholder=" Last name" required/><br><br> 
	<!-- input of gender -->
	<input type="radio" name="gender" id="male" value="Male">
	<label for="male">Male</label> 
	<input type="radio" name="gender" id="female" value="Female"> 
	<label for="female">Female</label><br><br> 
	<!-- input of email -->
	<span>Email</span> 
	<input type="email" name="emails" id="emails" placeholder=" Email" required/><br><br> 
	<!-- input of password -->
	<span>Password</span> 
	<input type="password" name="passwords" id="passwords" placeholder=" Password" required/><br><br> 
	<!-- input of Confirm password -->
	<span>Confirm password</span> 
	<input type="password" name="confirmpassword" id="confirmpassword" placeholder=" Confirm password" required/><br><br> 
	<input type="submit" name="submitbtn" value="Sign Up" id="loginbtn"><br><br>
</div>
</form>

<script src="javascript.js" type="text/javascript" ></script>
</html>