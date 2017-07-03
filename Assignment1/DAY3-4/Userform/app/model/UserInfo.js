/**
 * Created by Akash on 3/23/2017.
 */
Ext.define('LoginRegister.model.UserInfo', {
    extend: 'Ext.data.Model',

    fields: [
    	{ name: 'userid', 		type: 'string' },
    	{ name: 'title', 		type: 'string' },
    	{ name: 'fname', 		type: 'string' },
    	{ name: 'lname', 		type: 'string' },
    	{ name: 'dob', 			type: 'date' },
    	{ name: 'profession',	type: 'string' },
    	{ name: 'email', 		type: 'string' },
    	{ name: 'phno', 		type: 'number' },
    	{ name: 'address', 		type: 'string' },
    	{ name: 'aboutMe', 		type: 'string' },
    	{ name: 'gender', 		type: 'string' },
    	{ name: 'profilePic', 	type: 'string' }
    ]
});