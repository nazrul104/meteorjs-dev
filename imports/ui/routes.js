import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
 import './HomeLayout.js';
 import './MainLayout.js';
 import './body.js';

/*import '../../ui/pages/root-redirector.js';
import '../../ui/pages/lists-show-page.js';
import '../../ui/pages/app-not-found.js';*/

// Import to override accounts templates
//import '../../ui/accounts/accounts-templates.js';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/add', {
  name: 'add',
  action() {
    BlazeLayout.render('MainLayout', {main: 'task1'});
  }
});