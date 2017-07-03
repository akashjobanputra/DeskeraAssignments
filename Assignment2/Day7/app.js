/**
 * Created by Akash on 04/07/2017.
 */
Ext.application({
	views: 'UserList',
	name: 'LoginRegister',
	appFolder: 'app',
	controllers: [
		'UserMaster'
	],
	launch: function() {
		var grid = Ext.create('LoginRegister.view.UserList');
		/*var grid = Ext.create('Ext.container.Viewport',
				items: [{
					xtype: 'userList'
				}]
			);*/
		grid.show();
	}
	
});