import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        this.transitionTo('home')
        this.controllerFor('application').set('email', null);
           this.controllerFor('application').set('password', null);
        //this.transitionTo('sample')
    }
});