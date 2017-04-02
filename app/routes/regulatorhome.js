import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        var data = [{"sl":"1", "vendor":"CCS Electricals", "anchor":"rs cables", "programid":"31313","status":"program Initiated", "action":""},
        {"sl":"2", "vendor":"ABC company", "anchor":"glasswall", "programid":"5345","status":"payment pending", "action":""},
        {"sl":"3", "vendor":"bca company", "anchor":"rpqb", "programid":"457","status":"payment pending","action":""},
        {"sl":"4", "vendor":"CDD company", "anchor":"rapidqube", "programid":"423414","status":"Invoice approval","action":""},
        {"sl":"5", "vendor":"Tom harry company", "anchor":"new ventures", "programid":"5235","status":"payment pending","action":""},
        {"sl":"6", "vendor":"APPLE company", "anchor":"BMC raw materials", "programid":"2345","status":"PO raised","action":""},
        {"sl":"7", "vendor":"Orange company", "anchor":"Quikr", "programid":"2345","status":"payment pending","action":""},
        {"sl":"8", "vendor":"tut company", "anchor":"AVM", "programid":"52345","status":"payment pending","action":""},
        {"sl":"9", "vendor":"Quetzaquatl company", "anchor":"Honda motors", "programid":"57457","status":"Payment Approved","action":""}]


        return data;
    }
});
