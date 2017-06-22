import Ember from 'ember';
import stepperMixin from '../mixins/stepper';

export default Ember.Controller.extend(stepperMixin,{


    actions:{
        initiate: function(){
            console.log("initiate paymets");
            this.set('modalmessage', " Payment Initiated Successfully !!! , Click OK to go back to home");
            this.toggleProperty('approveProperty'); 
        }
    }

});