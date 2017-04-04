import Ember from 'ember';

export default Ember.Route.extend({
  
    model(){
         var programController = this.controllerFor('program');
         programController.set('closureConfirmation',false);         
    }
});
