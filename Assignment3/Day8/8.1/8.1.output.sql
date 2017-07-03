mysql> show tables;
+-------------------+
| Tables_in_deskera |
+-------------------+
| addressdetails    |
| userdetails       |
+-------------------+
2 rows in set (0.01 sec)

mysql> select * from addressdetails;
+--------------+----------+----------------+-------------+
| cityuniqueid | cityname | citypostalcode | state       |
+--------------+----------+----------------+-------------+
| G001         | Goa      |         456789 | Goa         |
| M001         | Mumbai   |         879962 | Maharashtra |
| P001         | Pune     |         423344 | Maharashtra |
+--------------+----------+----------------+-------------+
3 rows in set (0.00 sec)

mysql> select * from userdetails;
+--------------+----------+-------------+--------------------+-----------+---------+
| useruniqueid | username | dateofbirth | email              | phone     | address |
+--------------+----------+-------------+--------------------+-----------+---------+
|            1 | John     | 1992-04-12  | john@gmail.com     | 123456789 | P001    |
|            2 | Jasmira  | 1991-05-12  | jasm@gmail.com     | 987654321 | M001    |
|            3 | Bruce    | 2017-06-27  | bruce@wayne.com    |   2278626 | M001    |
|            4 | Alfred   | 2010-06-21  | butler@batcave.com |  98969795 | M001    |
+--------------+----------+-------------+--------------------+-----------+---------+
4 rows in set (0.00 sec)

/**
** 1. Give email ids of users who lives in pune.
**/

mysql> SELECT email FROM userdetails u, addressdetails a WHERE u.address=a.cityuniqueid AND a.cityname="Pune";
+----------------+
| email          |
+----------------+
| john@gmail.com |
+----------------+
1 row in set (0.01 sec)

/**
** 2. List down the email ids whose users have birthday today.
**/

mysql> SELECT email FROM userdetails u WHERE u.dateofbirth = CURRENT_DATE;
+-----------------+
| email           |
+-----------------+
| bruce@wayne.com |
+-----------------+
1 row in set (0.00 sec)

/**
** 3. Find out the users who are below 18 years. (there should be some entries for this).
**/

mysql> SELECT * FROM userdetails u WHERE TIMESTAMPDIFF(YEAR, u.dateofbirth, CURRENT_DATE) < 18;
+--------------+----------+-------------+--------------------+----------+---------+
| useruniqueid | username | dateofbirth | email              | phone    | address |
+--------------+----------+-------------+--------------------+----------+---------+
|            3 | Bruce    | 2017-06-27  | bruce@wayne.com    |  2278626 | M001    |
|            4 | Alfred   | 2010-06-21  | butler@batcave.com | 98969795 | M001    |
+--------------+----------+-------------+--------------------+----------+---------+
2 rows in set (0.00 sec)

/**
** 4. Print all address details with corresponding assigned user names, consider there are some addresses which are not assigned to any user.
**/

mysql> SELECT a.cityuniqueid, a.cityname, a.citypostalcode, a.state, u.username FROM addressdetails a LEFT JOIN userdetails u ON a.cityuniqueid = u.address;
+--------------+----------+----------------+-------------+----------+
| cityuniqueid | cityname | citypostalcode | state       | username |
+--------------+----------+----------------+-------------+----------+
| P001         | Pune     |         423344 | Maharashtra | John     |
| M001         | Mumbai   |         879962 | Maharashtra | Jasmira  |
| M001         | Mumbai   |         879962 | Maharashtra | Bruce    |
| M001         | Mumbai   |         879962 | Maharashtra | Alfred   |
| G001         | Goa      |         456789 | Goa         | NULL     |
+--------------+----------+----------------+-------------+----------+
5 rows in set (0.00 sec)

mysql> exit
