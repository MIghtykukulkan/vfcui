import Ember from 'ember';
import stepperMixin from '../mixins/stepper';

export default Ember.Controller.extend(stepperMixin,{
     //vendorList : ["Hexaware", "TCS","Syntex","Jaguar","Honda"],
     anchorList : ["ABC Enterprise", "SFS","Syntel Solutions","Jaguar","Honda"],
     TCSlist : [{"name":"TCS","email":"abc@xyz.com","phone":"666","bank":"xyz bank"}],
     selectedVendor: null,
     vendornotchoosen:true,
     percentageComplete : 0,
     showDetails: false,
     currentStep:1,

     actions:{
        poupload:function(){
             this.set('modalmessage', " Purchase order uploaded successfully !!! , Click OK to go back to home")
              console.log("approved");
             this.toggleProperty('approveProperty');    
             this.set('percentageComplete', 100); 
        },
         gotohome: function(){
               //var currentStep = this.get('currentStep');
                //currentStep = currentStep -1;
                //this.set('currentStep',currentStep);
                this.toggleProperty('approveProperty'); 
                this.toggleProperty('selectedVendor') ; 
                //this.transitionToRoute('vendorhome')
                var currentStep = this.get('currentStep');
                console.log(currentStep);
                if(currentStep===6){
                    currentStep = currentStep - 3;
                }
                this.set('currentStep',currentStep);
                 this.set('selectedVendor',false);

        },
         //jump t appoval step
         payments: function(){
             
             this.set('selectvendor',false);
             var currentStep = this.get('currentStep');
             console.log("currentStep"+currentStep);
             currentStep = currentStep + 3;
             this.set('currentStep',currentStep);
             console.log("currentStep"+currentStep);

         },
         

        initiate: function(){
            this.set('modalmessage', " Payment Initiated Successfully !!! , Click OK to go back to home")
            this.toggleProperty('approveProperty'); 
        },
        particularVendor:function(selectedVendorName){
             var selectedVendorName =selectedVendorName;
            console.log("selectedVendorName:"+selectedVendorName);
            this.set('selectedVendor',selectedVendorName);
          //  console.log("selectedVendor :",selectedVendor)
            this.transitionToRoute('regulatorhome');
        }
        
     }
});
