<%@ page import="java.sql.*"%>
<%
String name = "";
try {
	// get information of user 
	String id = request.getParameter("ids");
	String password = request.getParameter("passwords");
	name = request.getParameter("name");
	String email = request.getParameter("email");
	Class.forName("com.mysql.cj.jdbc.Driver"); // MySQL database connection
	Connection conn = DriverManager
	.getConnection("jdbc:mysql://localhost:3306/skku_group_buying?" + "user=root&password=018455lL!12");

	// insert user information into DB
	String sql = "insert into users(id, password, name, email)values(?, ?, ?, ?)";
	PreparedStatement ps = null;
	ps = conn.prepareStatement(sql);
	ps.setString(1, id);
	ps.setString(2, password);
	ps.setString(3, name);
	ps.setString(4, email);

	int i = ps.executeUpdate();
	if (i == 0) {
		name = "";
	}
%>
<!-- if signed up successfully, shows alert and turns page into main page -->
<script>
	alert("Signed Up!");
	location.href = "main.jsp";
</script>
<%
} catch (Exception e) {
out.println("Something went wrong !! Please try again");
out.print(e);
}
%>
