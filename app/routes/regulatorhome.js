import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        var data = [{"sl":"1", "vendor":"CCS Electricals", "anchor":"rs cables", "programid":"31313","status":"program Initiated", "action":"","action":""},
        {"sl":"2", "vendor":"ABC company", "anchor":"glasswall", "programid":"3137","status":"payment pending", "action":"","action":""},
        {"sl":"3", "vendor":"bca company", "anchor":"rpqb", "programid":"5773","status":"payment pending","action":"","action":""},
        {"sl":"4", "vendor":"CDD company", "anchor":"rapidqube", "programid":"3553","status":"Invoice approval","action":"","action":""},
        {"sl":"5", "vendor":"Tom harry company", "anchor":"new ventures", "programid":"238","status":"payment pending","action":"","action":""},
        {"sl":"6", "vendor":"APPLE company", "anchor":"BMC raw materials", "programid":"852","status":"PO raised","action":"","action":""},
        {"sl":"7", "vendor":"Quetzaquatl company", "anchor":"Honda motors","programid":"5613","status":"Payment Approved","action":"","action":""}]


        return data;
    }
});
