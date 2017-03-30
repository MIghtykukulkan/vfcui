import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        //set the model property as false
        this.controllerFor('home').set('isShowingModal',false)   
        
    }
});
