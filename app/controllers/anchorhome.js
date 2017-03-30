import Ember from 'ember';

export default Ember.Controller.extend({
     vendorList : ["Hexaware", "TCS","Syntex","Jaguar","Honda"],
     selectedVendor: null,
     vendornotchoosen:true,
     percentageComplete : 0,
     showDetails: false,
     currentStep:3,

     actions:{
         chooseVendor: function(vendorItem){

                    var vendorObj = {
                        "name":vendorItem,
                        "email":"ABCXYZ@SAD.com",
                        "phone":"1232341233",
                        "bank":"icici",
                        "IFSC":"ICC000688"
                    };
                    this.set('selectedVendor',vendorObj);
                    this.set('vendornotchoosen', false);
                    this.set('percentageComplete', 30);
                    this.set('showDetails',true)

                    //removing other items from arrays
                    var newArray = [vendorItem];
                    this.set('vendorList',newArray);

                    //var stepchange = this.get('onStepChange');
                    //stepchange(5);
         },

         purchaseorder: function(){              
             //upload purchase order 
             this.set('percentageComplete', 50);
         },

         saveModel: function(){
             console.log("saving the model");
         },
         onStepChange :function(mut , currentStep){
             console.log("step changed" + mut + currentStep)
         },
         onStepChange :function(currentStep){
             console.log("step changed" + mut + currentStep)
         },
         nextStep: function(){
             console.log("nect step");
            var currstep =  this.get('currentStep');
            currstep = currstep + 1;
            this.set('currentStep',currstep);
         },
         previousStep: function(){
              console.log("back step");
         }
     }
});
