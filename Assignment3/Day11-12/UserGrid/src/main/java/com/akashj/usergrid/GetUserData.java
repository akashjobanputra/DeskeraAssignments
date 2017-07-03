/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.akashj.usergrid;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author Akash
 */
public class GetUserData extends HttpServlet {    

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
        ResultSet rs;
        Connection con;
        String url = "jdbc:mysql://localhost:3306/";
        String dbName = "deskera";
        String driver = "com.mysql.jdbc.Driver";
        JSONObject jsonResp;
        long phone;
        String username, email, address;
        int useruniqueid, totalCount = 0;
        Date dob;
        JSONArray userJsonArray = new JSONArray();
        try (PrintWriter out = response.getWriter()) {
            Class.forName(driver);
            con = DriverManager.getConnection(url+dbName, "root", "");
            stmt = con.prepareStatement("SELECT * FROM userdetails");
            rs = stmt.executeQuery();
            while(rs.next()) {
                useruniqueid = rs.getInt(1);
                username = rs.getString(2);
                dob = rs.getDate(3);
                email = rs.getString(4);
                phone = rs.getLong(5);
                address = rs.getString(6);
                jsonResp = new JSONObject();
                jsonResp.put("useruniqueid", useruniqueid);
                jsonResp.put("username", username);
                jsonResp.put("dateofbirth", dob);
                jsonResp.put("email", email);
                jsonResp.put("phone", phone);
                jsonResp.put("address", address);
                userJsonArray.put(jsonResp);
                totalCount++;
            }
            JSONObject resp = new JSONObject();
            resp.put("totalCount", totalCount);
            resp.put("records", userJsonArray);
            resp.put("success", true);
            out.print(resp);
            out.close();
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(GetUserData.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(GetUserData.class.getName()).log(Level.SEVERE, null, ex);
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
