import Ember from 'ember';

export default Ember.Controller.extend({
     vendorregulator :false,
     columns: [
            {
                "propertyName": "sl",
                "title": "sl.",
                "className": "text-left"
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
             {  "title": "Program ID",
                "template": "custom/programid"
            },
            {
                "propertyName": "status",
                "title": "Status",
                "className": "text-left"
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
            test: function() {
                this.transitionToRoute('sample');
            }
        }
});
