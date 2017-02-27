import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Rent } from '../api/rent.js';
import './rent-form.html';
 
Template.rent.helpers({
  insertRentCollection() {
       return Rent;
  }
});

Template.rent.events({
'submit .new-rent'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    if (Meteor.userId()) {
      var userId = Meteor.userId();
    }
    // Insert a task into the collection
    Rent.insert({
      text,
      userId,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    target.text.value = '';
  },
});
