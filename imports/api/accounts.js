import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
// Authorized users can view secrets
if (Meteor.isServer) {
   Meteor.methods({
   addSomeUsers:function(){
   console.log(Meteor.users.find().fetch());
    if (Meteor.users.find().fetch().length === 0) {
    var users = [
      {name:"Jone",email:"jone@example.com",roles:[]},
      {name:"Admin",email:"admin@example.com",roles:['admin']}
    ];

_.each(users, function (user) {
  var id;
  console.log(user);
  id = Accounts.createUser({
    username: user.email,
    password: "apple1",
    profile: { name: user.name }
  });

  if (user.roles.length > 0) {
    Roles.addUsersToRoles(id, user.roles, 'default-group');
  }
});
}
 }
})

// server/publish.js

// Give authorized users access to sensitive data by group
Meteor.publish('secrets', function (group) {
  if (Roles.userIsInRole(this.userId, ['view-secrets','admin'], group)) {
    return Meteor.secrets.find({group: group});
  } else {
    // user not authorized. do not publish secrets
    this.stop();
    return;

  }
});

// Authorized users can manage user accounts
Meteor.publish("users", function () {
  var user = Meteor.users.findOne({_id:this.userId});
console.log(user);
  if (Roles.userIsInRole(user, ["admin","manage-users"])) {
    console.log('publishing users', this.userId)
    return Meteor.users.find({}, {fields: {username: 1, profile: 1, roles: 1}});
  } 

  this.stop();
  return;
});
 }