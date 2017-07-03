/**
 * Created by Akash on 04/12/2017.
 */
Ext.define('LayoutDay5.view.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainview',
    requires: [
        'Ext.layout.container.Column',
        'Ext.layout.container.Border',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.tree.Panel',
        'Ext.tree.View'
    ],
    itemId: 'mainView',
    layout: 'border',

    items: [
        {
            xtype: 'tabpanel',
            region: 'center',
            split: true,
            itemId: 'centerPanel',
            activeTab: 0,
			border: true,
            items: [
                {
                    xtype: 'panel',
                    title: 'Pledge of India',
                    layout: 'column',
                    align: 'stretch',
                    items:[{
                        columnWidth: 0.5,
                        border: false,
                        html: '<font size="04">India is my country<br> All Indians are my brothers and sisters<br>India is my country and all Indians are my brothers and sisters.<br> I love my country and I am proud of its rich and varied heritage.<br></font>'
                    },{
                        columnWidth: 0.5,
                        border: false,
                        html: '<font size="04">I shall always strive to be worthy of it.<br>I shall give respect to my parents, teachers and elders and treat everyone with courtesy.<br>To my country and my people, I pledge my devotion.<br>In their well being and prosperity alone, lies my happiness.</font>'
                    }]
                },
                {
                    xtype: 'panel',
                    title: 'State Information',
                    html: '<h2>Gujarat</h2><font size="03"><ul><li>The state is bordered by Rajasthan to the north, Maharashtra to the south, Madhya Pradesh to the east, and the Arabian Sea and the Pakistani province of Sindh to the west.</li><li>During the British Raj, Gujarati businesses served to play a major role to enrich the economy of Karachi and Mumbai.</li><li>In 2010, Forbes list of the world\'s fastest growing cities included Ahmedabad at number 3 after Chengdu and Chongqing from China.</li><li>Gujarat invests in development of solar energy in the state and has had India\'s largest solar power plant as of January 2012.</li><li>It offers scenic beauty from the Great Rann of Kutch to the hills of Saputara and is the home of pure Asiatic lions in the world.</li></ul></font>'
                }
            ]
        },
        {
            xtype: 'treepanel',
            region: 'north',
            height: 150,
            collapsible: true,
            title: 'North',
            useArrows: true,
			border: true,
            rootVisible: false, 
            root: {
                text: 'North',
                expanded: true,
                children: [{
                        text: 'Haryana',
                        children: [
                            {
                                text: 'Ambala',
                                leaf: true
                            },{
                                text: 'Faridabad',
                                leaf: true
                            },{
                                text: 'Kurukshetra',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Himachal Pradesh',
                        children: [
                            {
                                text: 'Chamba',
                                leaf: true
                            },{
                                text: 'Mandi',
                                leaf: true
                            },{
                                text: 'Shimla',
                                leaf: true
                            }
                        ]
                    },{
                        text: 'Punjab',
                        children: [
                            {
                                text: 'Amritsar',
                                leaf: true
                            },{
                                text: 'Bathinda',
                                leaf: true
                            },{
                                text: 'Hoshiarpur',
                                leaf: true
                            }
                        ]
                    }
                ]
            }
        },
        {
            xtype: 'treepanel',
            region: 'west',
            width: 150,
            collapsible: true,
            title: 'West',
            useArrows: true,
			border: true,
            rootVisible: false, 
            root: {
                text: 'West',
                expanded: true,
                children: [{
                        text: 'Goa',
                        children: [
                            {
                                text: 'North Goa',
                                leaf: true
                            },{
                                text: 'South Goa',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Gujarat',
                        children: [
                            {
                                text: 'Ahmedabad',
                                leaf: true
                            },{
                                text: 'Gandhinagar',
                                leaf: true
                            },{
                                text: 'Rajkot',
                                leaf: true
                            }
                        ]
                    },{
                        text: 'Maharashtra',
                        children: [
                            {
                                text: 'Mumbai',
                                leaf: true
                            },{
                                text: 'Nashik',
                                leaf: true
                            },{
                                text: 'Pune',
                                leaf: true
                            }
                        ]
                    }
                ]
            }
        },
        {
            xtype: 'treepanel',
            region: 'east',
            width: 150,
            collapsible: true,
            title: 'East',
			border: true,
            useArrows: true,
            rootVisible: false, 
            root: {
                text: 'East',
                expanded: true,
                children: [{
                        text: 'Bihar',
                        children: [
                            {
                                text: 'Bhojpur',
                                leaf: true
                            },{
                                text: 'Patna',
                                leaf: true
                            },{
                                text: 'Siwan',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Jharkhand',
                        children: [
                            {
                                text: 'Dhanbad',
                                leaf: true
                            },{
                                text: 'Latehar',
                                leaf: true
                            },{
                                text: 'Ranchi',
                                leaf: true
                            }
                        ]
                    },{
                        text: 'West Bengal',
                        children: [
                            {
                                text: 'Darjeeling',
                                leaf: true
                            },{
                                text: 'Howrah',
                                leaf: true
                            },{
                                text: 'Kolkata',
                                leaf: true
                            }
                        ]
                    }
                ]
            }
        },
        {
            xtype: 'treepanel',
            region: 'south',
            height: 150,
            collapsible: true,
            title: 'South',
			border: true,
            useArrows: true,
            rootVisible: false, 
            root: {
                text: 'South',
                expanded: true,
                children: [{
                        text: 'Karnataka',
                        children: [
                            {
                                text: 'Bengaluru Urban',
                                leaf: true
                            },{
                                text: 'Dharwad',
                                leaf: true
                            },{
                                text: 'Udupi',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Kerala',
                        children: [
                            {
                                text: 'Kollam',
                                leaf: true
                            },{
                                text: 'Malappuram',
                                leaf: true
                            },{
                                text: 'Thrissur',
                                leaf: true
                            }
                        ]
                    },{
                        text: 'Tamil Nadu',
                        children: [
                            {
                                text: 'Chennai',
                                leaf: true
                            },{
                                text: 'Coimbatore',
                                leaf: true
                            },{
                                text: 'Tirupur',
                                leaf: true
                            }
                        ]
                    }
                ]
            }
        }
    ]

});