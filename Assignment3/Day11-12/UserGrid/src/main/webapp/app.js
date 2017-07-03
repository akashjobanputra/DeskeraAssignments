/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global Ext */

Ext.onReady(function () {
    var recordFields = [
        { name: 'useruniqueid', mapping: 'useruniqueid' },
        { name: 'username',     mapping: 'username' },
        { name: 'dateofbirth',  mapping: 'dateofbirth'},
        { name: 'email',        mapping: 'email'},
        { name: 'phone',        mapping: 'phone'},
        { name: 'address',      mapping: 'address'}
    ];
    
    var remoteJsonStore = new Ext.data.JsonStore({
       fields: recordFields,
       url: 'GetUserData',
       totalProperty: 'totalCount',
       root: 'records',
       id: 'UserDataStore',
       autoLoad: true
       
    });
    
    var cols = [
        { id: 'useruniqueid', header: "User ID", dataIndex: 'useruniqueid', hidden: true},
        { header: "Username", dataIndex: 'username'},
        { header: "Date of Birth", dataIndex: 'dateofbirth'},
        { header: "Email-ID", dataIndex: 'email'},
        { header: "Phone No.", dataIndex: 'phone'},
        { header: "Address", dataIndex: 'address'}
    ];
    
    var pagingToolbar = {
        xtype : 'paging',
        store : remoteJsonStore,
        pageSize: 50,
        displayInfo: true,
        items: [{
                xtype: 'button',
                text: 'Add',
                id: 'addbtn',
                handler: function() { addUser(); }
        },{
                xtype: 'button',
                id: 'editbtn',
                text: 'Edit',
                disabled: true,
                handler: function() { editUser(); }
        },{
                xtype: 'button',
                id: 'delbtn',
                text: 'Delete',
                disabled: true
        }]
    };
    
    function addUser() {
        var formPanel = Ext.getCmp('formpanel');
        formPanel.getForm().reset();
        Ext.getCmp('sButton').setHandler(function() {
            Ext.Ajax.request({
                url: 'AddUserData',
                method: 'POST',
                params: {
                    userData: Ext.encode(formPanel.getForm().getValues())
                },        
                waitTitle: 'Connecting',
                waitMsg: 'Registering...',
                success: function (response) {
                    var jsonResp = Ext.util.JSON.decode(response.responseText);
                    Ext.Msg.alert("Info",jsonResp.message);
                    console.log(jsonResp);
                },
                failure: function (response) {
                    var jsonResp = Ext.util.JSON.decode(response.responseText);
                    Ext.Msg.error("Error",jsonResp.message);
                }
            });
        });
        showForm(formPanel);
    }
    
    function editUser() {   
        var formPanel = Ext.getCmp('formpanel');
        Ext.getCmp('sButton').setHandler(function() {
            Ext.Ajax.request({
                url: 'UpdateUserData',
                method: 'POST',
                params: {
                    userData: Ext.encode(formPanel.getForm().getValues())
                },        
                waitTitle: 'Connecting',
                waitMsg: 'Updating...',
                success: function (response) {
                    var jsonResp = Ext.util.JSON.decode(response.responseText);
                    Ext.Msg.alert("Info",jsonResp.message);
                    console.log(jsonResp);
                },
                failure: function (response) {
                    var jsonResp = Ext.util.JSON.decode(response.responseText);
                    Ext.Msg.alert("Error",jsonResp.message);
                }
            });
        });
        showForm(formPanel);
    }
    
    function deleteUser(rec) {   
        //var formPanel = Ext.getCmp('formpanel');
        Ext.getCmp('delbtn').setHandler(function() {
            console.log(rec);
            var userid = rec.get('useruniqueid');
            Ext.Ajax.request({
                url: 'DeleteUserData',
                method: 'POST',
                params: {
                    userid: Ext.encode(userid)
                },
                /*params: {
                    userData: Ext.encode(formPanel.getForm().getValues())
                },*/        
                waitTitle: 'Connecting',
                waitMsg: 'Deleting...',
                success: function (response) {
                    var jsonResp = Ext.util.JSON.decode(response.responseText);
                    Ext.Msg.alert("Info",jsonResp.message);
                    console.log(jsonResp);
                    remoteJsonStore.reload();
                    Ext.getCmp('userGrid').getView().refresh();
                },
                failure: function (response) {
                    var jsonResp = Ext.util.JSON.decode(response.responseText);
                    Ext.Msg.alert("Error",jsonResp.message);
                }
            });
        });
        //showForm(formPanel);
    }
    
    function showForm(formPanel) {
        var formWin = new Ext.Window({
            title: 'Userform',
            width: 330,
            height: 250,
            layout: 'fit',
            buttonAlign: 'center',
            items: formPanel,
            closeAction: 'hide'
        });
        formWin.show();
        formWin.on('hide', function() {
            remoteJsonStore.reload();
            Ext.getCmp('userGrid').getView().refresh();
        });
    }
    var form = new Ext.FormPanel({
        baseCls: 'x-plain',
        id: 'formpanel',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            layout: 'form',
            defaultType: 'textfield',
            id: 'myForm',
            url: 'user',
            items: [{
                xtype: 'numberfield',
                fieldLabel: 'User ID',
                name: 'useruniqueid',
                readOnly: true
            },{
                fieldLabel: 'Username',
                name: 'username',
                width: 190
            },{
                xtype: 'datefield',
                fieldLabel: 'Date of Birth',
                name: 'dateofbirth',
                format: 'Y-m-d',
                width: 190
            },{
                fieldLabel: 'Email-ID',
                name: 'email',
                vtype: 'email',
                width: 190
            },{
                xtype: 'numberfield',
                fieldLabel: 'Phone No.',
                name: 'phone',
                width: 190
            },{
                xtype: 'combo',
                store: ['P001', 'M001', 'G001'],
                fieldLabel: 'Address',
                name: 'address'
            }]
        },{
            xtype: 'button',
            name: 'savebutton',
            id: 'sButton',
            text: 'Save'
        },{
            xtype: 'button',
            text: 'Clear',
            handler: function() {
                form.getForm().reset();
            }
        }]
    });
    
    var grid = {
        xtype : 'grid',
        columns: cols,
        id: 'userGrid',
        store: remoteJsonStore,
        loadMask: true,
        bbar: pagingToolbar,
        listeners : {
            rowclick: function(grid, rowIndex) {
                var edtbt = Ext.getCmp('editbtn');
                edtbt.enable();
                Ext.getCmp('delbtn').enable();
                var rec = remoteJsonStore.getAt(rowIndex);
                deleteUser(rec);
                Ext.getCmp('formpanel').getForm().loadRecord(rec);
            }
        }
    };
    
    var win = new Ext.Window({
        height: 350,
        width: 550,
        title: 'User Details',
        border: false,
        layout: 'fit',
        items: grid
    });
    win.show();
    
    
});