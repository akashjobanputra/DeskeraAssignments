/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global Ext */

Ext.onReady(function(){
    
    Ext.QuickTips.init();
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
        },{
            xtype: 'button',
            text: 'Save',
            scope: this,
            formBind: true,
            handler: function(btn) {
                var formp = Ext.getCmp('formpanel').getForm();
                Ext.Ajax.request({
                    //formp.submit({
                        url: 'user',
                        method: 'POST',
                       // headers: {
                         //   'Content-Type' : 'application/json;charset=UTF-8'
                        //},
                        params: {
                            //userData: Ext.util.JSON.encode(formp.getValues())
                            userData: Ext.encode(formp.getValues())
                        },
                        
                        waitTitle: 'Connecting',
                        waitMsg: 'Registering...',
                        
                        success: function (response) {
                            var jsonResp = Ext.util.JSON.decode(response.responseText);
                            Ext.Msg.alert("Info",jsonResp.message);
                            console.log(jsonData.defaultVal);
                        },
                        failure: function (response) {
                            var jsonResp = Ext.util.JSON.decode(response.responseText);
                            Ext.Msg.alert("Error",jsonResp.message);
                        }
                    });
                }
           
            
        }]
    }]
    });
    
    //form.addButton('Save');
    
    var win = new Ext.Window({
        title: 'Userform',
        width: 330,
        height: 250,
        layout: 'fit',
        buttonAlign: 'center',
        items: form
    });
    win.show();
});