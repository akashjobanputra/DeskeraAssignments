/**
 * Created by Akash on 04/12/2017.
 */
Ext.define('Day6Grid.view.UserList' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userList',
    store : 'UserInf',
    renderTo: 'RegForm',
    title: 'Users Information',
    autoScroll: true,
    autoLoad: true,
    width: 700,
    height: 350,
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        displayInfo: true
    }],
    
    initComponent: function() {
        
     this.columns = [
            {
             header: 'User ID',  
             dataIndex: 'userid',  
             flex: 1
            },
            {
                header: 'Date of Birth',
                dataIndex: 'dob',
                flex: 1
            },
            {
                header: 'Email', 
                dataIndex: 'email', 
                flex: 2
            },
            {
               header: 'Phone Number',  
               dataIndex: 'phno',  
               flex: 1
            },
            {
                header: 'Address',
                dataIndex: 'address',
                flex: 2
            }
        ];
        //this.store.load();
        this.callParent(arguments);
    },
    onReady: function() {
        console.log('UserList.js');
    }
});