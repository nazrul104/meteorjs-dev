import { Meteor } from 'meteor/meteor';

Template.secrets.onCreated(function () {
  this.subscribe("secrets")
})

Template.secretList.helpers({
  secrets: function () {
    return Meteor.secrets.find()
  }
})