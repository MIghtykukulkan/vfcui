import Ember from 'ember';
import stepperMixin from '../mixins/stepper';

export default Ember.Controller.extend(stepperMixin,{
     vendorList : ["Hexaware", "TCS","Syntex","Jaguar","Honda"],
     anchorList : ["ABC Enterprise", "SFS","Syntel Solutions","Jaguar","Honda"],
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
         }

        
     }
});
