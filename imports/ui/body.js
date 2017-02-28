import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';


import './body.html';
 
 Template.body.onCreated(function bodyOnCreated() {
 this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});
if (Meteor.isClient) {
Template.task1.helpers({
  tasks() {
     return Tasks.find({userId:Meteor.userId()});
  },
  isOwner() {
    return this.owner === Meteor.userId();
  },
});

Template.task1.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;
    // Insert a task into the collection
    Meteor.call('addTask', text);
    // Clear form
    target.text.value = '';
  },
});

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('removeTask', this._id);
  },
});
}