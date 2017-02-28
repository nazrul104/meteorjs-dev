import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
export const Rent = new Mongo.Collection('rent');

var rentschema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  post_title: {
    type: String,
    max: 100,
    optional: true,
  },
  summary: {
    type: String,
    max: 256,
    optional: true,
  },
  property_type: {
    type: String,
    max: 10,
    optional: true,
  },
  Accommodates: {
    type:Number, 
    defaultValue: 1
  },
   Bedrooms: {
	type:Number, 
    defaultValue: 1

  },
  beds: {
    type:Number, 
    defaultValue: 1
  },
  Bathrooms: {
    type:Number, 
    defaultValue: 1
  },
  check_in: {
    type: String,
  },
  check_out: {
    type: String,
  },
  room_type: {
    type: String,
  },
  available_from:{
  	type: String,
    max: 100,
    optional: true,
  },
  address: {
    type: String,
    max: 100,
    optional: true,
  },
  postcode: {
    type: String,
    max: 100,
    optional: true,
  },
  createdAt: {
    type: Date,
  },
  userId:{
    type: String
  },
  is_active: {
    type: Boolean,
    defaultValue: true,
  }
});

Rent.attachSchema(rentschema);
if (Meteor.isServer) {
  Meteor.publish('rent',function() {
    return Rent.find();
  });
  Meteor.methods({
  addRent:function(data) {
    console.log(data);
    Rent.insert(data);
  },
  removeRent:function(taskId) {
    check(taskId, String);
    Tasks.remove(taskId);
  },
/*  setChecked:function(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);
    Rent.update(taskId, { $set: { checked: setChecked } });
  },*/
});

}

