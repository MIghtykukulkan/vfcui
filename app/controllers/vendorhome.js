import Ember from 'ember';
import stepperMixin from '../mixins/stepper';

export default Ember.Controller.extend(stepperMixin,{
     anchorList : ["Hexaware", "TCS","Syntex","Jaguar","Honda"],
    selectedAnchor: false,
   
     

     actions:{
         //jump t appoval step
         paymentapproval: function(){
             
             this.set('selectedAnchor',false);
             var currentStep = this.get('currentStep');
                currentStep = currentStep + 3;
                this.set('currentStep',currentStep);
         },
         //approve paymet
         approvePayment: function(){

            

             this.set('modalmessage', " Payment Approved !!")
            this.toggleProperty('approveProperty'); 
         },

         
          invoiceupload:function(){
               this.set('modalmessage', " Invoice uploaded successfully !!! , Click OK to go back to home")
              console.log("approved")
             this.toggleProperty('approveProperty');    
             this.set('percentageComplete', 100);   
        },
        toggleModal: function(usertype) {
            this.toggleProperty('approveProperty');    
        },
        gotohome: function(){
               var currentStep = this.get('currentStep');
                //currentStep = currentStep -1;
                this.set('currentStep',currentStep);
                this.toggleProperty('approveProperty'); 
                this.toggleProperty('selectedAnchor') ; 
                //this.transitionToRoute('vendorhome')
        }

         
     }
});
