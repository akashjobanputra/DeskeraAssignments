/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jdbcconn;

/**
 *
 * @author Akash
 */

import java.sql.*;
        
public class JdbcConn {

    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
    static final String DB_URL = "jdbc:mysql://localhost:3306/deskera";
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Connection con = null;
        Statement stmt = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(DB_URL, "root", "");
            stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM userdetails");
            while(rs.next()) {
                System.out.println(rs.getInt("useruniqueid") + "\t" + rs.getString("username") + "\t" + rs.getDate("dateofbirth") + "\t" + rs.getString("email") + "\t" + rs.getInt("phone") + "\t" + rs.getString("address"));
            }
            rs.close();
            stmt.close();
            con.close();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
    
}
