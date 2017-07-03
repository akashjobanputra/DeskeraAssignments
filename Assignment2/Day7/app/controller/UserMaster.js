/**
 * Created by Akash on 04/07/2017.
 */
Ext.define('LoginRegister.controller.UserMaster', {
   extend : 'Ext.app.Controller',

   stores : ['UserInf'],
   models : ['UserInfo'],
   views : ['MainView', 'UserList'],

   init : function() {
    this.control({
       'userList' : {
        render : this.onPanelRendered
       },
       //'userForm button[action=view]' : {
        //click : this.addItem
       //},
       'userForm button[action=close]' : {
        click : this.closeWin
       },
       'userForm button[action=save]' : {
        click : this.updateItem
       },
       'userList button[action=add]' : {
        click : this.showForm
       }
      });
   },

   onPanelRendered : function() {
    console.log('The panel was rendered');
    this.getUserInfStore().load();
    
   // this.up('grid').getColumns().load({
     //             url: 'serverside/Users.json',
       //           waitMsg: 'Loading...' });
   },
   closeWin : function(button) {
      button.up('window').close();
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
      this.up('window').close();
    }
   },

   /*addItem : function(button) {
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
   },*/

   showForm : function(button) {
    console.log('Loading UserForm');
    /*var formView = Ext.create('Ext.Window', {
      renderTo: Ext.getBody(),
      title: 'Add new user',
      margin: '5 5 5 5',
      layout: 'fit',
      items: [
        {
          xtype: 'userForm'
        }
      ]
    });*/
    var formView = Ext.create('LoginRegister.view.MainView');
    formView.show();
   }
  });