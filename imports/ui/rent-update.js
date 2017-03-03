import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Rent } from '../api/rent.js';
import './rent-update.html';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('rent');
});


Template.updateRent.helpers({
getRentInfoById(){
var current = FlowRouter.current();
return Rent.findOne({_id:current.params.rid});
}
});

Template.updateRent.events({
  'click .update-rent'(event) {
       // Prevent default browser form submit
      // console.log(event)
    event.preventDefault();
    var rid = $("#rid").val();
    var post_title = $("#post_title").val();
    var summary = $("#summary").val();
    var property_type = $("#property_type").val();
    var Accommodates = $("#Accommodates").val();
    var Bedrooms = $("#Bedrooms").val();
    var beds = $("#beds").val();
    var Bathrooms = $("#Bathrooms").val();
    var check_in = $("#check_in").val();
    var check_out = $("#check_out").val();
    var room_type = $("#room_type").val();
    var available_from = $("#available_from").val();
    var available_to = $("#available_to").val();
    var address = $("#address").val();
    var postcode = $("#postcode").val();
    Meteor.call('updateRent',rid,{post_title:post_title,summary:summary,property_type:property_type,
      Accommodates:Accommodates,Bedrooms:Bedrooms,check_in:check_in,
      check_out:check_out,room_type:room_type,available_from:available_from,available_to:available_to,address:address,postcode:postcode})
  }
});