import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { acc } from '../api/accounts.js';
import './MainLayout.html';
import './layouts.js';
import './manage-users.js';



 Template.body.onCreated(function bodyOnCreated() {
 this.state = new ReactiveDict();
  Meteor.subscribe('secrets');
  Meteor.subscribe('users');
  Meteor.call('addSomeUsers');
});

