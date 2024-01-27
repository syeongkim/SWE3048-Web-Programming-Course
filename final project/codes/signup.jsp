<!DOCTYPE html>
<html>
<head>
<title>Document</title>
<link rel="stylesheet" href="main.css">
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.min.js"></script>
</head>
<body>
	<div id="signup">
		<form method="post" action="validate_signup.jsp" id="signupform">
			<div class="input">
				<h2>Sign Up</h2>
				<h4 id="warning">Enter your information to sign up</h4>
				<!-- user enter name -->
				<span>Name</span> <br>
				<input type="text" name="name" id="name" required> <br><br>
				<!-- user enter ID -->
				<span>ID</span> <br> 
				<input type="text" name="ids" id="ids" required><br> <br>
				<!-- user enter password -->
				<span>Password</span> <br>
				<input type="password" name="passwords" id="passwords" required><br> <br>
				<!-- user enter confirm password -->
				<span>Confirm Password</span> <br>
				<input type="password" name="confirmpassword" id="confirmpassword" required> <br><br>
				<!-- user enter email -->
				<span>Email</span> <br>
				<input type="email" name="email" id="email" required><br><br>
				<!-- user submit the form -->
				<input type="submit" value="Sign Up" class="submitbtn"><br> <br>
			</div>
		</form>
	</div>
</body>

<!-- javascript file to check validation of inputs -->
<script src="javascript.js" type="text/javascript" ></script>
</html>