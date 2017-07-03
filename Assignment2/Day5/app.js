/**
 * Created by Akash on 04/12/2017.
 */
Ext.application({
    views: [
        'MainView'
    ],
    name: 'LayoutDay5',

    launch: function() {
        Ext.create('LayoutDay5.view.MainView');
    }

});
