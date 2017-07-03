/**
 * Created by Akash on 04/12/2017.
 */
Ext.define('Day6Grid.controller.UserMaster', {
   extend : 'Ext.app.Controller',

   stores : ['UserInf'],
   models : ['UserInfo'],
   views : ['UserList'],

   init : function() {
    this.control({
       'userList' : {
        render : this.onPanelRendered
       }
      });
   },

   onPanelRendered : function() {
    console.log('The panel was rendered');
   }
  });