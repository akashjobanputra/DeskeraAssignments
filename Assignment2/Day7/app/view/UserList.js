/**
 * Created by Akash on 04/07/2017.
 */
Ext.define('LoginRegister.view.UserList' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userList',
    store : 'UserInf',
    renderTo: 'RegForm',
    title: 'Users Information',
    autoScroll: true,
    width: 700,
    height: 350,
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store : 'UserInf',  
        dock: 'bottom',
        displayInfo: true
        /*items: [{
            iconCls: 'icon-add',
            text: 'Add',
            action: 'add',
            scope: this
        }]*/
    },{
        xtype: 'toolbar',
      //  store : 'UserInf',  
        dock: 'top',
        displayInfo: true,
        items: [{
            iconCls: 'icon-add',
            text: 'Add',
            action: 'add',
            scope: this
        }] 
    }
    ],
    
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

        this.callParent(arguments);
    },
    onReady: function() {
        console.log('UserList.js');
    }
});