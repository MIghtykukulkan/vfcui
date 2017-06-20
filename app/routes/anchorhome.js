import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var aController = this.controllerFor('anchorhome');

        aController.set('approveProperty',false);
        aController.set('currentStep',1);

        var TCSlist =[{"name":"TCS","email":"abc@xyz.com","phone":"666","bank":"xyz bank"}];
       
    }
});
