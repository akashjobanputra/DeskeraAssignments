/**
 * Created by Akash on 3/23/2017.
 */
Ext.define('LoginRegister.controller.UserMaster', {
   extend : 'Ext.app.Controller',

   stores : ['UserInf'],
   models : ['UserInfo'],
   views : ['MainView', 'UserList'],

   init : function() {
    this.control({
       'container > panel' : {
        render : this.onPanelRendered
       },
       'userForm button[action=view]' : {
        click : this.addItem
       },
       'userForm button[action=save]' : {
        click : this.updateItem
       }
      });
   },

   onPanelRendered : function() {
    //console.log('The panel was rendered');
    this.getUserInfStore().load();
   },
   updateItem : function(button) {
    var form = button.up('form').getForm();
    //check of the form has any errors
    if (form.isValid()) {
     //get the record 
     var record = form.getRecord();
     //get the form values
     var values = form.getValues();
     if(!record){
      console.log('Adding new Record');
      var newRecord = new LoginRegister.model.UserInfo(values);
      this.getUserInfStore().add(newRecord);
     }
     Ext.Msg.alert("Information", "Data Inserted");
     this.getUserInfStore().sync();
     console.log(this.getUserInfStore().getCount());
    }
   },

   addItem : function(button) {
    console.log('Loading List...');
    var view = Ext.create('Ext.Window', {
         renderTo: Ext.getBody(),
         height: 250,
         title: 'List of Users',
          width: 500,
          margin: '5 5 5 5 ',
         layout: 'fit',
            items: [
                {
                 xtype: 'userList'
                }
            ]
    });
    view.show();
   }
  });