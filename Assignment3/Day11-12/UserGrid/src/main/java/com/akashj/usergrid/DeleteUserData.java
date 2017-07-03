/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.akashj.usergrid;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Akash
 */
public class DeleteUserData extends HttpServlet {

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
        response.setContentType("application/json;charset=UTF-8");
        PreparedStatement stmt;
        int res;
        Connection con;
        String url = "jdbc:mysql://localhost:3306/";
        String dbName = "deskera";
        String driver = "com.mysql.jdbc.Driver";
        try (PrintWriter out = response.getWriter()) {
            String userid = request.getParameter("userid");
            System.out.println("User ID is: " + userid);
            Class.forName(driver);
            con = DriverManager.getConnection(url+dbName, "root", "");
            stmt = con.prepareCall("DELETE FROM userdetails WHERE useruniqueid = ?");
            stmt.setInt(1, Integer.parseInt(userid));
            res = stmt.executeUpdate();
            if(res > 0) {
                String returnString = "{success:'true', message: 'Deleted Successfully'}";
                out.println(returnString);
            } else {
                String returnString = "{success:'false', message: 'Error in Update'}";
                out.println(returnString);
            }
            con.close();
            out.close();
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(DeleteUserData.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(DeleteUserData.class.getName()).log(Level.SEVERE, null, ex);
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
