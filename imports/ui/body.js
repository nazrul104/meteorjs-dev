import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './body.html';
 
Template.task1.helpers({
  tasks() {
       return Tasks.find({userId:Meteor.userId()});
  },
  currentUser: function() {
    return Meteor.userId();
  }
});

Template.task1.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    if (Meteor.userId()) {
      var userId = Meteor.userId();
    }
    // Insert a task into the collection
    Tasks.insert({
      text,
      userId,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    target.text.value = '';
  },
});

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Tasks.remove(this._id);
  },
});