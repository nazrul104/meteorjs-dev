import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');
if (Meteor.isServer) {
  Meteor.publish('tasks',function() {
    return Tasks.find();
  });
  Meteor.methods({
  addTask:function(text) {
    Tasks.insert({
      text,
      createdAt: new Date(),
      userId: this.userId
    });
  },
  removeTask:function(taskId) {
    check(taskId, String);
    Tasks.remove(taskId);
  },
  setChecked:function(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);
    Tasks.update(taskId, { $set: { checked: setChecked } });
  },
});

}
