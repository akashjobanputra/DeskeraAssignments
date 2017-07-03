/**
 * Created by Akash on 04/12/2017.
 */
Ext.define('Day6Grid.store.UserInf', {
    extend: 'Ext.data.Store',

    alias: 'store.UserInf',
    sorters: ['userid', 'phno'],
	model: 'Day6Grid.model.UserInfo',
	autoLoad: true,
    proxy: {
        type: 'ajax',
      	id  : 'myProxyKey',
     	url : 'serverside/Users.json',
     	reader: {
     		type: 'json',
            rootProperty: 'Users',
            totalProperty: 'total'
     	}
    }
});
