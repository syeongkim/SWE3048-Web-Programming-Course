<%@ page import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
<title>Document</title>
<link rel="stylesheet" href="main.css">
</head>
<body>
	<div id="mypage">
		<%
		String id = "";
		String username = "";
		try {
			// get id which is logged in
			Class.forName("com.mysql.cj.jdbc.Driver"); 
			Connection conn = DriverManager
			.getConnection("jdbc:mysql://localhost:3306/skku_group_buying?" + "user=root&password=018455lL!12");
			int login = 1;
			PreparedStatement pst = conn.prepareStatement("Select id, name from users where login=?");
			pst.setInt(1, login);
			ResultSet rs = pst.executeQuery();

			if (rs.next()) {
				id = rs.getString("id");
				username = rs.getString("name");
		%>
		<div>
			<h2><%=username%>'s page</h2>
			<h4>You can check information or items you registered and you purchased!</h4>
			<br><br><br>
			<h3>register information</h3>
			<table>
				<thead>
					<tr>
						<th>Item Name</th>
						<th>Remain Amount</th>
						<th>Unit Price</th>
					</tr>
				</thead>
				<tbody>
					<%
					// get item list which logged user register
					PreparedStatement pst2 = conn.prepareStatement("Select itemname from register where id=?");
					pst2.setString(1, id);
					ResultSet rs2 = pst2.executeQuery();
					while (rs2.next()) {
						String itemname = rs2.getString("itemname");
						PreparedStatement pst3 = conn
						.prepareStatement("Select itemname, totalamount, price from items where itemname=?");
						pst3.setString(1, itemname);
						ResultSet rs3 = pst3.executeQuery();
						while (rs3.next()) {
							String totalamount = rs3.getString("totalamount");
							String price = rs3.getString("price");
					%>
					<!-- show item which logged user registered in table -->
					<tr>
						<td><%=itemname%></td>
						<td><%=totalamount%></td>
						<td><%=price%></td>
					</tr>
					<%}} %>
				</tbody>
			</table>
		</div>
		<div>
			<br><br><br>
			<h3>participate information</h3>
			<table>
				<thead>
					<tr>
						<td>Item Name</td>
						<td>Amount</td>
					</tr>
				</thead>
				<tbody>
					<%
					// get purchase information which logged user buy
					PreparedStatement pst4 = conn.prepareStatement("Select id, itemname, amount from participate where id=?");
					pst4.setString(1, id);
					ResultSet rs4 = pst4.executeQuery();
					while (rs4.next()) {
					String itemname = rs4.getString("itemname");
					String amount = rs4.getString("amount");
					%>
					<!-- show purchase information by table -->
					<tr>
						<td><%=itemname%></td>
						<td><%=amount%></td>
					</tr>
					<%} %>
				</tbody>
			</table>
		</div>
		<%
		} else {
		%>
		<!-- mypage is accessible only when user logged in -->
		<h3>Please Login first.</h3>
		<%
		}
		} catch (Exception e) {
		out.println(e);
		}
		%>
	</div>
</body>