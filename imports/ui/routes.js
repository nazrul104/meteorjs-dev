import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
 import './MainLayout.js';
 import './task.js';
 import './rent.js';
 import './rent-update.js';


FlowRouter.notFound = {
  action: function () {
    BlazeLayout.render("noHeaderLayout", {content: "not_found"})
  }
}

FlowRouter.route('/', {
  action: function () {
    BlazeLayout.render('MainLayout', {content: 'start'})
  }
})

FlowRouter.route('/addRent', {
  action: function () {
    BlazeLayout.render('MainLayout', {content: 'addRent'})
  }
})

FlowRouter.route('/updateRent/:rid', {
  action: function (params) {
    BlazeLayout.render('MainLayout', {content: 'updateRent',rid:params.rid})
  }
})

FlowRouter.route('/start', {
  action: function () {
    BlazeLayout.render('MainLayout', {content: 'start'})
  }
})

FlowRouter.route('/signin', {
  action: function () {
    BlazeLayout.render('MainLayout', {content: 'signin'})
  }
})

FlowRouter.route('/secrets', {
  action: function () {
    BlazeLayout.render('MainLayout', {content: 'secrets'})
  }
})
FlowRouter.route('/task', {
  action: function () {
    BlazeLayout.render('MainLayout', {content: 'allTask'})
  }
})

FlowRouter.route('/manageUsers', {
  action: function () {
    BlazeLayout.render('MainLayout', {content: 'manageUsers'})
  }
})

FlowRouter.route('/signout', {
   // action: App.signout
})