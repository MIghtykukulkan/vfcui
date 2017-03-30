import Ember from 'ember';

export default Ember.Controller.extend({
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
             {
                "propertyName": "programid",
                "title": "Program ID",
                "className": "text-left"
            },
            {
                "propertyName": "status",
                "title": "Status",
                "className": "text-left"
            }
            ],

        actions:{
            createprogram:function(){
                this.transitionToRoute('program');
            }
        }
});
