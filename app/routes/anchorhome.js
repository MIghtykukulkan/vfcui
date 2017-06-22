import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var aController = this.controllerFor('anchorhome');

        aController.set('approveProperty',false);
        aController.set('currentStep',1);
   
        var data = [{"sl":"1", "vendor":"CCS Electricals,ABC company", "programid":"31313","status":"program Initiated", "action":""},
        {"sl":"2", "vendor":"ABC company,Hexaware","programid":"5345","status":"payment pending", "action":""},
        {"sl":"3", "vendor":"TCS,SYntel", "programid":"457","status":"payment pending","action":""},
        {"sl":"4", "vendor":"CDD company,Tom harry company", "programid":"423414","status":"Invoice approval","action":""},
        {"sl":"5", "vendor":"Tom harry company,CCS services","programid":"5235","status":"payment pending","action":""},
        {"sl":"6", "vendor":"APPLE company,TECHOCart", "programid":"2345","status":"PO raised","action":""},
        {"sl":"7", "vendor":"Orange company,TECHOCart", "programid":"2345","status":"payment pending","action":""},
        {"sl":"8", "vendor":"tut company", "programid":"52345","status":"payment pending","action":""},
        {"sl":"9", "vendor":"Quetzaquatl company,TECHOCart", "programid":"57457","status":"Payment Approved","action":""}]


        return data;
 
    }
});
