import Ember from 'ember';
import stepperMixin from '../mixins/stepper';

export default Ember.Controller.extend(stepperMixin,{
    
     selectedVendor: null,
     vendornotchoosen:true,
     percentageComplete : 0,
     showDetails: false,
     currentStep:1,
     columns: [
            {
                "propertyName": "sl",
                "title": "sl.",
                "className": "text-left"
            },
            {
                "propertyName":"ProgramName",
                "title":"Program",
                "className": "text-left"
            },
            {
                "propertyName": "vendor",
                "title": "Vendor",
                "className": "text-left"
            },
             {
                "propertyName": "programid",
                "title": "Program ID",
                 "routeName": "users.user"
               
            },
            {
                "propertyName": "status",
                "title": "Status",
                "className": "text-left"
            },
            {
                "title": "Detailings",
                "template": "custom/anchorprogram"
            }             
            ],

     actions:{
         //this function for detail button on anchorhome
         anchorprogram:function(){
             console.log("aaa");
            this.transitionToRoute('anchorprogram',{ queryParams: { steps: 'start' }});
         },
        poupload:function(){
             this.set('modalmessage', " Purchase order uploaded successfully !!! , Click OK to go back to home")
              console.log("approved");
             this.toggleProperty('approveProperty');    
             this.set('percentageComplete', 100); 
        },
         
         //jump t appoval step
         payments: function(){
             
             this.set('selectvendor',false);
             var currentStep = this.get('currentStep');
             console.log("currentStep"+currentStep);
             currentStep = currentStep + 3;
             this.set('currentStep',currentStep);
             console.log("currentStep"+currentStep);

         }
        
        
     }
});
