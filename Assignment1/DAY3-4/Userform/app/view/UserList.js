/**
 * Created by Akash on 3/23/2017.
 */
 Ext.define('LoginRegister.view.UserList' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userList',
    store : 'UserInf',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store : 'UserInf',  
        dock: 'bottom',
        displayInfo: true,
    }],
    
    initComponent: function() {
        
     this.columns = [
            {
             header: 'User ID',  
             dataIndex: 'userid',  
             flex: 1
            },
            {
             header: 'First Name', 
             dataIndex: 'fname', 
             flex: 2
            },
            {
             header: 'Last Name',  
             dataIndex: 'lname',  
             flex: 2
            },
        ];

        this.callParent(arguments);
    }
});