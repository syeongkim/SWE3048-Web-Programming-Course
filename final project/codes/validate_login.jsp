<%@ page import="java.sql.*"%>
<%
String name = "";
try {
	// get inputs ID and password entered
	String id = request.getParameter("idl");
	String password = request.getParameter("passwordl");
	Class.forName("com.mysql.cj.jdbc.Driver"); // MySQL database connection
	Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/skku_group_buying?" + "user=root&password=018455lL!12");
	
	// find user whose ID and password are coincide
	PreparedStatement pst = conn.prepareStatement("Select id, password, name from users where id=? and password=?");
	pst.setString(1, id);
	pst.setString(2, password);
	ResultSet rs = pst.executeQuery();
	
	// get name of user if user information exists in DB
	if (rs.next()) {
		name = rs.getString("name");
		
		//Update status of login
		PreparedStatement pst2 = conn.prepareStatement("Update users set login=? where id=?");
		pst2.setInt(1, 1);
		pst2.setString(2, id);
		pst2.executeUpdate();
	%>
	<!-- shows welcome message and turns page to main page -->
	<script>
		alert("Welcome!");
		location.href="main.jsp";
	</script>
	<%
	// if user information doesn't exist in DB, shows alert and page stays in login page
	} else {
	%>
	<script>
		alert("Wrong ID or password. Try again.");
		history.back();
	</script>
	<%
	}} catch(Exception e){       
      	out.println("Something went wrong !! Please try again");       
    	out.println(e);
   } %>