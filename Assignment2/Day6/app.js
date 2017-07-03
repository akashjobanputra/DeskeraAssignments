/**
 * Created by Akash on 04/12/2017.
 */
Ext.application({
	views: 'UserList',
	name: 'Day6Grid',
	appFolder: 'app',
	controllers: [
		'UserMaster'
	],
	launch: function() {
		var grid = Ext.create('Day6Grid.view.UserList');
		grid.show();
	}
	
});