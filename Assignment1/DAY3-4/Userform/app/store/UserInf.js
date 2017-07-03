/**
 * Created by Akash on 3/23/2017.
 */
Ext.define('LoginRegister.store.UserInf', {
    extend: 'Ext.data.Store',

    alias: 'store.UserInf',

	model: 'LoginRegister.model.UserInfo',
    proxy: {
        type: 'localstorage',
      	id  : 'myProxyKey'
     
    }
});
