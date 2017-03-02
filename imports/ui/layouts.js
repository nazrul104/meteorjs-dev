import { Meteor } from 'meteor/meteor';
import './layouts.html';

Template.navbar.helpers({
  userRole: function () { 
    var user = Meteor.user()
    if(user.roles){
    	 return user.roles["default-group"];
    }
  }
})

