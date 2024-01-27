<%@ page import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
<title>Document</title>
<link rel="stylesheet" href="main.css">
</head>
<body>
	<div class="explain">
		<h2>Participate Page</h2>
		<h4>You can participate in group buying!</h4>
		<h4>Check the information of items registered and write the information of your purchase.</h4>
	</div>

		<%
		try {
		// get information of registered items
		Class.forName("com.mysql.cj.jdbc.Driver"); // MySQL database connection
		Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/skku_group_buying?" + "user=root&password=018455lL!12");
		PreparedStatement pst = conn.prepareStatement("Select itemname, totalamount, price, comment from items");
		ResultSet rs = pst.executeQuery();
		%>
		<div id="showitem">
		<%
		while (rs.next()) {
			String item = rs.getString("itemname");
			String amount = rs.getString("totalamount");
			String price = rs.getString("price");
			String comment = rs.getString("comment");
			request.setAttribute("ITEMNAME", item);
			request.setAttribute("AMOUNT", amount);
			request.setAttribute("PRICE", price);
			request.setAttribute("COMMENT", comment);
		%>
			<!-- show registered items in table -->
			<div class="item">
				<h3>${ITEMNAME }</h3>
				<p>Remain Amount: ${AMOUNT }</p>
				<p>Unit Price: ${PRICE }</p>
				<%
					if (comment != null) {
				%>
				<p style="font-size: 0.7em;">${COMMENT }</p>
			</div>
		
		<%
		}}
		} catch(Exception e){       
			out.println(e);
		} 
		%>
	</div>
	<div id="participate2">
		<form method="post" action="validate_participate.jsp">
			<div class="input">
				<!-- user enter item name they want to buy -->
				<span>Item name</span><br> 
				<input type="text" name="itemnamep" id="itemnamep" /><br><br> 
				<!-- user enter amount they want to buy -->
				<span>Amount</span><br> <input type="text" name="amount" id="amount" /><br><br> 
				<!-- user submit the form -->
				<input type="submit" value="Participate In" class="submitbtn" />
			</div>
		</form>
	</div >

</body>
</html>