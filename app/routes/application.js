import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        this.transitionTo('home')
        //this.transitionTo('sample')
    }
});