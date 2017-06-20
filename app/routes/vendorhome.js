import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var vendorController = this.controllerFor('vendorhome');

        //vendorController.set('approveProperty',false);
        vendorController.set('currentStep',1);
       
    }
});
