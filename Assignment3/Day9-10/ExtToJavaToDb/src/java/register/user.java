/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package register;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import java.text.ParseException;

/**
 *
 * @author Akash
 */
@WebServlet(name = "user", urlPatterns = {"/user"})
public class user extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PreparedStatement stmt = null;
        ResultSet rs = null;
        Connection conn = null;
        String url        = "jdbc:mysql://localhost:3306/";
        String dbName   = "deskera";
        String driver   = "com.mysql.jdbc.Driver";
        response.setContentType("application/json;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            String userData = request.getParameter("userData");
            Gson gson = new Gson();
            UserDetails ud = gson.fromJson(userData, UserDetails.class);
            
            String username = ud.getUsername();
            Date dateofbirth = ud.getDateofbirth();
            
            String email = ud.getEmail();
            Long phone = ud.getPhone();
            String address = ud.getAddress();
            
           // out.print("{username:" + username + " dateofbirth:" + dateofbirth + " email: " + email + "pphone: " + phone +
             //       "}");
            Class.forName(driver);
            conn = DriverManager.getConnection(url+dbName, "root", "");
            stmt = conn.prepareStatement("INSERT INTO userdetails (username, dateofbirth, email, phone, address) VALUES (?, ?, ?, ?, ?)");
            stmt.setString(1, username);
            System.out.println(dateofbirth);
            /*SimpleDateFormat format = new SimpleDateFormat("yyyy-mm-dd");
            java.util.Date parsed = format.parse(dateofbirth);
            Date sqlD = new Date(parsed.getTime());*/
            stmt.setDate(2, (Date) dateofbirth);
            //stmt.setDate(2, sqlD);
            stmt.setString(3, email);
           stmt.setLong(4, phone);
            stmt.setString(5, address);
            int i = stmt.executeUpdate();
            //String sql = "INSERT INTO userdetails (username, dateofbirth, email, phone, address) VALUES (\""+username+"\",\""+dateofbirth+"\",\""+email+"\","+phone+",\""+address+"\")";
            //int i = stmt.executeUpdate(sql);
            if(i > 0) {
                String returnString = "{success:'true', message: 'Registered Successfully'}";
                out.println(returnString);
            } else {
                String returnString = "{success:'false', message: 'Error in Registration'}";
                out.println(returnString);
            }
            conn.close();
        } catch (SQLException ex) {
            Logger.getLogger(user.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IllegalArgumentException ex) {
            Logger.getLogger(user.class.getName()).log(Level.SEVERE, null, ex);
        } catch (NullPointerException ex) {
            Logger.getLogger(user.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(user.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParseException ex) {
            Logger.getLogger(user.class.getName()).log(Level.SEVERE, null, ex);
        }finally {
            
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
