import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { Rent } from '../api/rent.js';
import './rent-list.html';
import './rent-form.html';

 
Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('rent');
});


Template.rent.helpers({
  insertRentCollection() {
       return Rent;
  },
  AllRent() {
     return Rent.find();
  },
});

Template.updateRent.helpers({

});

Template.addRent.events({
'submit .new-rent'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    const post_title = event.target.post_title.value;

    const summary = event.target.summary.value;
    const property_type = event.target.property_type.value;
    const Accommodates = event.target.Accommodates.value;
    const Bedrooms = event.target.Bedrooms.value;
    const beds = event.target.beds.value;
    const Bathrooms = event.target.Bathrooms.value;
    const check_in = event.target.check_in.value;
    const check_out = event.target.check_out.value;
    const room_type = event.target.room_type.value;
    const available_from = event.target.available_from.value;
    const available_to = event.target.available_to.value;
    const address = event.target.address.value;
    const postcode = event.target.postcode.value;
    //const is_active = event.target.is_active.value;
    var data = {post_title,summary,property_type,Accommodates,Bedrooms,beds,Bathrooms,check_in,check_out,room_type,available_from,available_to,address,postcode,createdAt: new Date(),userId:Meteor.userId()};
    Meteor.call('addRent',data);

    // Clear form
//    target.post_title.value = '';
  },
});

Template.rent.events({
  'click #edit'() {
    
  },
  'click #delete'() {
    console.log(this._id);
    Meteor.call('removeRent', this._id);
  },
});