/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.akashj.usergrid;

import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;

/**
 *
 * @author Akash
 */
class UserDetails {
    String email, username, address, dateofbirth, phone, useruniqueid;
    DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

    public long getPhone() {
        return Long.parseLong(phone);
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getUseruniqueid() {
        if(useruniqueid.equals(""))
            return 0;
        return Integer.parseInt(useruniqueid);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getDate() throws ParseException {
        return new Date((formatter.parse(dateofbirth)).getTime());
    }

    public void setDate(String dateofbirth) {
        this.dateofbirth = dateofbirth;
    }
}