import Ember from 'ember';

export default Ember.Controller.extend({
     vendorregulator :false,
     columns: [
            {
                "propertyName": "sl",
                "title": "sl.",
                //"className": "text-left",
                 "routeName": "sample"
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
                "routeName": "sample"
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
            detailprogram: function() {
                console.log(" is being called");
                //this.transitionToRoute('program',{ queryParams: { step: 'init' }});
                 this.transitionToRoute('initaitepayment');
        },
            initiate: function(){
            this.set('modalmessage', " Payment Initiated Successfully !!! , Click OK to go back to home")
            this.toggleProperty('approveProperty'); 
        }
        }
});
