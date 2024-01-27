<%@ page import ="java.sql.*" %>
<% String totalamount = "";
	String itemname = "";
	String amount = "";
	String remainamountstr = "";
	String id = "";
    try{
    	
        itemname = request.getParameter("itemnamep");   
        amount = request.getParameter("amount");
        
        Class.forName("com.mysql.cj.jdbc.Driver");  // MySQL database connection
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/skku_group_buying?" + "user=root&password=018455lL!12");  
        
        // get information of items which user wants to participate in
        PreparedStatement pst = conn.prepareStatement("Select itemname, totalamount from items where itemname=?");
        pst.setString(1, itemname);
		ResultSet rs = pst.executeQuery();
		if (rs.next()) {
			totalamount = rs.getString("totalamount");
		}
		
		//calculate remain amount of item
		int remainamount = Integer.parseInt(totalamount) - Integer.parseInt(amount);
		remainamountstr = Integer.toString(remainamount);
		
		//update DB with updated remain amount
		String sql = "update items set totalamount=? where itemname =?";
        PreparedStatement ps = null;
        ps = conn.prepareStatement(sql);
        ps.setString(1, remainamountstr);
        ps.setString(2, itemname);
        int i=ps.executeUpdate();
        
        // get id of user logged in
        int login = 1;
    	PreparedStatement pst2 = conn.prepareStatement("Select id from users where login=?");
    	pst2.setInt(1, login);
    	ResultSet rs2 = pst2.executeQuery();
    	
    	if (rs2.next()) {
    		id = rs2.getString("id");
    	}
        
    	// insert information of purchase into DB
        String sql2 = "insert into participate(id, itemname, amount)values(?, ?, ?)";
        PreparedStatement ps2 = null;
        ps2 = conn.prepareStatement(sql2);
        ps2.setString(1, id);
        ps2.setString(2, itemname);
        ps2.setString(3, amount);
        int j = ps2.executeUpdate();
    %>
    <!-- if participating group buying successfully, show alert and turns page into main page -->
        <script>
        	alert("Participated in!");
        	location.href="main.jsp";
        </script>
    <%  
    } catch(Exception e) {
    %>
    <!-- if participating fails, show alert and stays in participate page -->
    	<script>
	    	alert("Wrong item name or amount");
	    	history.back();
	    </script>
    <%
    }
	%>