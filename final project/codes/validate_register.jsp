<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.min.js"></script>

<%@ page import="java.sql.*"%>
<%@ page import="java.io.*"%>

<%
String itemname = "phone";
String id = "";

try {
	// get information of item that user inputs
	itemname = request.getParameter("itemnamer");
	String totalamount = request.getParameter("totalamount");
	String price = request.getParameter("price");
	String comment = request.getParameter("comment");
	Class.forName("com.mysql.cj.jdbc.Driver"); // MySQL database connection
	Connection conn = DriverManager
	.getConnection("jdbc:mysql://localhost:3306/skku_group_buying?" + "user=root&password=018455lL!12");
	
	// insert item information 
	String sql = "insert into items(itemname, totalamount, price, comment)values(?, ?, ?, ?)";
	PreparedStatement pre = conn
	.prepareStatement("insert into items(itemname, totalamount, price, comment)values(?, ?, ?, ?)");
	pre.setString(1, itemname);
	pre.setString(2, totalamount);
	pre.setString(3, price);
	pre.setString(4, comment);


	int i = pre.executeUpdate();
	int login = 1;
	// get id of user logged in
	PreparedStatement pst = conn.prepareStatement("Select id from users where login=?");
	pst.setInt(1, login);
	ResultSet rs = pst.executeQuery();
	
	if (rs.next()) {
		id = rs.getString("id");
	}
	
	out.println(id);
	
	// insert register information into DB
	String sql2 = "insert into register(id, itemname)values(?, ?)";
	PreparedStatement pre2 = conn.prepareStatement(sql2);
	pre2 = conn.prepareStatement(sql2);
	pre2.setString(1, id);
	pre2.setString(2, itemname);
	pre2.executeUpdate();

%>
<!-- if registered successfully, shows alert and turns page into main page -->
<script>
	alert("Registered!");
	location.href = "main.jsp";
</script>
<%
} catch (Exception e) {
out.println("Something went wrong !! Please try again");
out.print(e);
}
%>