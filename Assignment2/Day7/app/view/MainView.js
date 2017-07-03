/**
 * Created by Akash on 04/07/2017.
 */
Ext.define('LoginRegister.view.MainView', {
    extend: 'Ext.Window',
    alias: 'widget.userForm',
    title: 'Userform',
    name: 'userform',
	renderTo: Ext.getBody(),
	width: 432,
	height: 600,
    requires: [
        'LoginRegister.view.UserList',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.resizer.Splitter',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.form.field.TextArea',
        'Ext.form.field.HtmlEditor',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.form.field.File',
        'Ext.button.Button'
    ],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'User ID',
					name: 'userid',
                    validator: function(val) {
                       if (!Ext.isEmpty(val))
                            return true;
                        else
                            return "UserID cannot be empty";
                    }
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    width: 150,
                    fieldLabel: 'Title',
					name: 'title',
					store: ['Mr.', 'Ms.', 'Mrs.'],
                    validator: function(val) {
                       if (!Ext.isEmpty(val))
                            return true;
                        else
                            return "Title cannot be empty";
                    }
                },
                {
                    xtype: 'fieldcontainer',
					anchor: '100%',
                    layout: 'hbox',
					name: 'nameField',
                    fieldLabel: 'Name',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: '',
							width: 150,
							name: 'fname',
							emptyText: 'First Name',
                            validator: function(val) {
                                if (!Ext.isEmpty(val))
                                    return true;
                                else
                                    return "First Name cannot be empty";
                            }
                        },
                        {
                            xtype: 'splitter',
                            liquidLayout: true
                        },
                        {
                            xtype: 'textfield',
							name: 'lname',
							width: 150,
							emptyText: 'Last Name',
                            dock: 'right',
                            fieldLabel: '',
                            validator: function(val) {
                                if (!Ext.isEmpty(val))
                                    return true;
                                else
                                    return "Last Name cannot be empty";
                            }
                        }
                    ]
                },
                {
                    xtype: 'datefield',
                    anchor: '100%',
                    fieldLabel: 'DOB',
					format: 'Y-m-d',
					name: 'dob',
                    validator: function(val) {
                       if (!Ext.isEmpty(val))
                            return true;
                        else 
                            return "DOB cannot be empty";
                    }
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Profession',
					name: 'profession',
					store: ['Educator', 'Employee', 'Self-Employed', 'Student', 'Actor'],
                    validator: function(val) {
                       if (!Ext.isEmpty(val))
                            return true;
                        else 
                            return "Profession cannot be empty";
                    }
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Email',
					name: 'email',
					emptyText: 'Email ID',
                    regex: /^([\w\-\’\-]+)(\.[\w-\’\-]+)*@([\w\-]+\.){1,5}([A-Za-z]){2,4}$/,
                    validator: function(val) {
                       if (!Ext.isEmpty(val))
                            return true;
                        else
                            return "email cannot be empty";
                    }
                },
                {
                    xtype: 'numberfield',
                    anchor: '100%',
                    height: '',
                    fieldLabel: 'PhoneNo.',
					maxValue: 9999999999,
					minValue: 1000000000,
					hideTrigger: true,
					repeatTriggerClick: false,
                    keyNavEnabled: false,
                    mouseWheelEnabled: false,
                    spinDownEnabled: false,
                    spinUpEnabled: false,
                    allowDecimals: false,
                    allowExponential: false,
                    decimalPrecision: 0,
					emptyText: 'XXXXXXXXXX',
					name: 'phone',
                    validator: function(val) {
                       if (!Ext.isEmpty(val))
                            return true;
                        else 
                            return "Number cannot be empty";
                    }
                },
                {
                    xtype: 'textareafield',
                    anchor: '100%',
					name: 'address',
                    fieldLabel: 'Address',
                    validator: function(val) {
                       if (!Ext.isEmpty(val))
                            return true;
                        else
                            return "Address cannot be empty";
                    }
                },
                {
                    xtype: 'htmleditor',
                    anchor: '100%',
                    fieldLabel: 'About Me',
					name: 'aboutMe'
                },
                {
                    xtype: 'radiogroup',
                    height: '',
                    fieldLabel: 'Gender',
					name: 'gender',
                    items: [
                        {
                            xtype: 'radiofield',
                            boxLabel: 'Male',
							name: 'gender',
							id: 'male'
                        },
                        {
                            xtype: 'radiofield',
                            boxLabel: 'Female',
							name: 'gender',
							id: 'female'
                        },
                        {
                            xtype: 'radiofield',
                            fieldLabel: '',
                            boxLabel: 'Other',
							name: 'gender',
							id: 'other'
                        }
                    ]
                },
                {
                    xtype: 'filefield',
                    anchor: '100%',
                    fieldLabel: 'Profile Picture'
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            text: 'Save'
                        },
                        {
                            xtype: 'splitter'
                        },
                        {
                            xtype: 'button',
                            text: 'Cancel',
							name: 'cancel',
                            action: 'close'
                        },
                    ]
                }
            ]
        }
    ]
});