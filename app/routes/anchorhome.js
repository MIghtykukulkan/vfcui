import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var aController = this.controllerFor('anchorhome');

        aController.set('approveProperty',false);
        aController.set('currentStep',1);

        var TCSlist =[{"name":"TCS","email":"abc@xyz.com","phone":"666","bank":"xyz bank"}];
       
   
        var data = [{"sl":"1", "vendor":"CCS Electricals", "programid":"31313","status":"program Initiated", "action":""},
        {"sl":"2", "vendor":"ABC company","programid":"5345","status":"payment pending", "action":""},
        {"sl":"3", "vendor":"bca company", "programid":"457","status":"payment pending","action":""},
        {"sl":"4", "vendor":"CDD company", "programid":"423414","status":"Invoice approval","action":""},
        {"sl":"5", "vendor":"Tom harry company","programid":"5235","status":"payment pending","action":""},
        {"sl":"6", "vendor":"APPLE company", "programid":"2345","status":"PO raised","action":""},
        {"sl":"7", "vendor":"Orange company", "programid":"2345","status":"payment pending","action":""},
        {"sl":"8", "vendor":"tut company", "programid":"52345","status":"payment pending","action":""},
        {"sl":"9", "vendor":"Quetzaquatl company", "programid":"57457","status":"Payment Approved","action":""}]


        return data;
 
    }
});
