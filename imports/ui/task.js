import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';


import './task.html';
 
 Template.body.onCreated(function bodyOnCreated() {
 this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});
 
if (Meteor.isClient) {
Template.allTask.helpers({
  tasks() {
    var user = Meteor.user();
    if (user.roles && user.roles["default-group"]=="admin") {
       return Tasks.find();
     }else{
       return Tasks.find({userId:Meteor.userId()});
     }
    
  },
  isOwner() {
    return this.owner === Meteor.userId();
  },
});

Template.allTask.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;
    // Insert a task into the collection
    Meteor.call('addTask', text,function(err,res){
      if(!err)
      target.text.value = '';
    });
    // Clear form
    
  },
});

Template.task.events({
  'click .toggle'() {
    // Set the checked property to the opposite of its current value
     $('#'+this._id).addClass("completed");
    Meteor.call('setChecked', this._id, !this.checked);
  },
  'click .destroy'() {
    Meteor.call('removeTask', this._id);
  },
});
}