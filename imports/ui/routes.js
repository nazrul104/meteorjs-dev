import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
 import './HomeLayout.js';
 import './MainLayout.js';
 import './AdminLayout.js';
 import './task.js';
 import './rent.js';


/*import '../../ui/pages/root-redirector.js';
import '../../ui/pages/lists-show-page.js';
import '../../ui/pages/app-not-found.js';*/

// Import to override accounts templates
//import '../../ui/accounts/accounts-templates.js';

/*FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/rent-form', {
  name: 'Add Property Information',
  action() {
    BlazeLayout.render('AdminLayout',{main:'rent'});
  }
});


FlowRouter.route('/add', {
  name: 'add',
  action() {
    BlazeLayout.render('MainLayout', {main: 'task1'});
  }
});*/
////////////////////////////////////////////////////////////////////
// Routing
//

// override with mini-pages navigate method


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