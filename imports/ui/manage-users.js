import './manage-users.html';
import './manage-users.js';

Template.manageUsers.onCreated(function () {
  this.subscribe("users")
})

Template.userList.helpers({
  users: function () {
    return Meteor.users.find()
  },
  email: function () {
    return this.user[0].address
  }
})