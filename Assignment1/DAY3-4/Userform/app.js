/**
 * Created by Akash on 3/23/2017.
 */
Ext.application({
	views: 'MainView',
	name: 'LoginRegister',
	appFolder: 'app',
	controllers: [
		'UserMaster'
	],
	launch: function() {
		var form = Ext.create('LoginRegister.view.MainView');
	}
	
});