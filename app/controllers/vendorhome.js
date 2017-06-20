import Ember from 'ember';
import stepperMixin from '../mixins/stepper';

export default Ember.Controller.extend(stepperMixin,{
      anchorList : ["bajaj", "Usha","tata","Jindal","Hiranandini"],
      anchorName:null,
      anchorEmail:null,
      anchorPhone:null,
      anchorBank:null,
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
             this.set('modalmessage', " Payment Approved !!");
            this.toggleProperty('approveProperty'); 
         },
          invoiceupload:function(){
               this.set('modalmessage', " Invoice uploaded successfully !!! , Click OK to go back to home");
              console.log("approved");
             this.toggleProperty('approveProperty');    
             this.set('percentageComplete', 100);   
        },
        toggleModal: function(usertype) {
            this.toggleProperty('approveProperty');    
        },
        gotohome: function(){
               var currentStep = this.get('currentStep');
                //currentStep = currentStep -1;
                 if(currentStep===6){
                    currentStep = currentStep - 3;
                }
                this.set('currentStep',currentStep);
                this.toggleProperty('approveProperty'); 
                this.toggleProperty('selectedAnchor') ; 
                //this.transitionToRoute('vendorhome')
        },
        SelectAnchor:function(chooseanchor){
            var chooseanchor = chooseanchor;
            console.log("chooseanchor :"+chooseanchor);
            if(chooseanchor === 'bajaj'){
                this.set('anchorName','bajaj');
                this.set('anchorEmail','bajaj@xx.com');
                this.set('anchorPhone',9990001111);
                this.set('anchorBank','HDFC');
            }else if(chooseanchor === 'Usha'){
                this.set('anchorName','Usha');
                this.set('anchorEmail','Usha@xx.com');
                this.set('anchorPhone',9990001111);
                this.set('anchorBank','SBI');
            }else if(chooseanchor === 'tata'){
                this.set('anchorName','TATA');
                this.set('anchorEmail','tata@xx.com');
                this.set('anchorPhone',9990001155);
                this.set('anchorBank','dena');
            }else if(chooseanchor === 'Jindal'){
                this.set('anchorName','Jindal');
                this.set('anchorEmail','Jindal@xx.com');
                this.set('anchorPhone',9990001144);
                this.set('anchorBank','dena');
            }else if(chooseanchor === 'Hiranandini'){
                this.set('anchorName','Hiranandini');
                this.set('anchorEmail','Hiranandini@xx.com');
                this.set('anchorPhone',9990001177);
                this.set('anchorBank','ICICI');
            }
            var currentStep = this.get('currentStep');
            if(currentStep!=4 && currentStep!=7){
                this.send('nextStep');

        }
        }  
     }
});
