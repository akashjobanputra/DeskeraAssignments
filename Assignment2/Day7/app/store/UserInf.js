/**
 * Created by Akash on 04/07/2017.
 */
Ext.define('LoginRegister.store.UserInf', {
    extend: 'Ext.data.Store',

    alias: 'store.UserInf',

	model: 'LoginRegister.model.UserInfo',
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
