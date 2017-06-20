import Ember from 'ember';
import stepperMixin from '../mixins/stepper';

export default Ember.Controller.extend(stepperMixin,{
    vendorname:null,
    vendoremail:null,
    vendorphone:null,
    vendorbank:null,
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
            console.log("selectedVendorName :"+selectedVendorName);
            this.set('selectedVendor',selectedVendorName);
            if(selectedVendorName === 'TCS'){
                console.log("if TCS  loop"); 
                this.set('vendorname','TCS');
                this.set('vendoremail','tcs@abc.com');
                this.set('vendorphone',9595000095);
                this.set('vendorbank','ICICI Bank');
            }
            else if(selectedVendorName === 'Hexaware'){
                console.log("if Hexaware loop");
                this.set('vendorname','Hexaware');
                this.set('vendoremail','hex@abc.com');
                this.set('vendorphone',9995111195);
                this.set('vendorbank','HDFC Bank')
            }
            else if(selectedVendorName === 'Syntex'){
                console.log("if Syntex loop");
                this.set('vendorname','Syntex');
                this.set('vendoremail','syntex@abc.com');
                this.set('vendorphone',998888888);
                this.set('vendorbank','Dena Bank')
            }
            else if(selectedVendorName === 'Jaguar'){
                console.log("if Jaguar loop");
                this.set('vendorname','Jaguar');
                this.set('vendoremail','Jaguar@abc.com');
                this.set('vendorphone',8500000001);
                this.set('vendorbank','SBI Bank')
            }
            else if(selectedVendorName === 'Honda'){
                console.log("if Honda loop");
                this.set('vendorname','Honda');
                this.set('vendoremail','honda@abc.com');
                this.set('vendorphone',9995111195);
                this.set('vendorbank','Bank of India')
            }

        }
        
     }
});
