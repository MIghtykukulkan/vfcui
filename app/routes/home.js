import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        //set the model property as false
        this.controllerFor('home').set('isShowingModal',false)   
        this.controllerFor('application').set('email', null);
        this.controllerFor('application').set('password', null);
        
    }
});
