import Ember from 'ember';

export default Ember.Controller.extend({
     vendorregulator :false,
     programInitiate:false,
     paymentPending:false,
     PORaised:false,
     paymentapproved:false,
     Invoiceapprove:false,
     columns: [
            {
                "propertyName": "sl",
                "title": "sl.",
                "className": "text-left",
                // "routeName": "sample"
            },
            {
                "propertyName": "anchor",
                "title": "Anchor",
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
                "className": "text-left"
            },
            {
                "propertyName": "status",
                "title": "Status",
                "className": "text-left"
            },
              {
                "title": "Detailings",
                "template": "custom/programid"
            },
            { 
                "title": "Close",
                "template": "custom/close"
            }
            ],

        actions:{
            createprogram:function(){
                this.transitionToRoute('program',{ queryParams: { step: 'init' }}); 
            },
            closeProgram:function(){
                this.transitionToRoute('program',{ queryParams: { step: 'close' }});
            },
            detailprogram: function(data) {
              var status =JSON.parse(JSON.stringify(data.status));
              console.log(status);
              if(status === "program Initiated"){
                this.set("programInitiate",true);
              //  this.transitionToRoute('regulatorhome');
              }else if(status === "payment pending"){ 
                  this.set("paymentPending",true);
                  this.transitionToRoute('initaitepayment');
              }else if(status === "PO raised"){
                  this.set("PORaised",true);                      
              }else if (status ==="Payment Approved"){
                  this.set("paymentapproved",true);   
              }
              else if(status==="Invoice approval"){
                  this.set("Invoiceapprove",true)
              }
                
            },
            closure:function(){
                 console.log("asa");
                 this.toggleProperty('approveProperty');  
            },
            gotohome:function(){
                // this.transitionToRoute('regulatorhome');
                window.location.reload(true);
            }
        
         

            
        }
});
