import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var aController = this.controllerFor('anchorhome');

        aController.set('approveProperty',false);
        aController.set('currentStep',1);
   
        var data = [{"sl":"1","ProgramName":"ABC", "vendor":"CCS Electricals,ABC company", "programid":"31313","status":"program Initiated","action":"" },
        {"sl":"2","ProgramName":"XYZ", "vendor":"ABC company,Hexaware","programid":"5345","status":"payment pending", "action":""},
        {"sl":"3", "ProgramName":"DEF","vendor":"TCS,SYntel", "programid":"457","status":"payment pending","action":""},
        {"sl":"4", "ProgramName":"ABCABC","vendor":"CDD company,Tom harry company", "programid":"423414","status":"Invoice approval","action":""},
        {"sl":"5", "ProgramName":"XYZXYZ","vendor":"Tom harry company,CCS services","programid":"5235","status":"payment pending","action":""}
       ]
        return data;
 
    }
});
