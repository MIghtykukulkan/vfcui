import Ember from 'ember';

export default Ember.Route.extend({

model(){
    var aController = this.controllerFor('anchorprogram');

        aController.set('approveProperty',false);
        aController.set('currentStep',1);
}
});
