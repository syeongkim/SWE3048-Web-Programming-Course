<!DOCTYPE html>
<html>
<head>
<title>Document</title>
<link rel="stylesheet" href="main.css">
</head>
<div class="explain">
	<h2>Register Page</h2>
	<h4>You can register the item you want to buy with others!</h4>
	<h4>Write the information of item below.</h4>
</div>
<form method="post" action="validate_register.jsp">
	<div class="input">
		<!-- user enter item name -->
		<span>Item name</span><br>
		<input type="text" name="itemnamer" id="itemnamer"/><br><br>
		<!-- user enter total amount of item -->
		<span>Total amount</span><br>
		<input type="text" name="totalamount" id="totalamount"/><br><br>
		<!-- user enter unit price of item -->
		<span>Unit Price</span><br>
		<input type="text" name="price" id="price"/><br><br>
		<!-- user enter comments of item -->
		<span>Comment</span><br>
		<input type="text" name="comment" id="comment"/><br><br>
		<!-- user submit the form -->
		<input type="submit" value="register" class="submitbtn"/>
	</div>
</form>