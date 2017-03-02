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
    optional: true,
  },
  available_to:{
    type: String,
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
     Rent.insert(data);
  },
  getById: function(id){
    check(id, String);
    Rent.findOne({_id:id});
  },
  removeRent:function(id) {
    check(id, String);
    Rent.remove(id);
  },
 updateRent:function(id, data) {
    check(id, String);
    Rent.update(id, { $set: data });
  },
});

}

