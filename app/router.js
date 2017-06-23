import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('anchorhome');
  this.route('vendorhome');
  this.route('regulatorhome');
  this.route('program');
  this.route('aregister');
  this.route('vregister');
  this.route('sample');
  this.route('anothersample');
  this.route('initaitepayment');
  this.route('anchorprogram');
});

export default Router;
