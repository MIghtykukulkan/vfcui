import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        var data = [{"sl":"1", "vendor":"CCS Electricals", "anchor":"rs cables", "action":"","status":"program Initiated", "action":""},
        {"sl":"2", "vendor":"ABC company", "anchor":"glasswall", "action":"","status":"payment pending", "action":""},
        {"sl":"3", "vendor":"bca company", "anchor":"rpqb", "action":"","status":"payment pending","action":""},
        {"sl":"4", "vendor":"CDD company", "anchor":"rapidqube", "action":"","status":"Invoice approval","action":""},
        {"sl":"5", "vendor":"Tom harry company", "anchor":"new ventures", "action":"","status":"payment pending","action":""},
        {"sl":"6", "vendor":"APPLE company", "anchor":"BMC raw materials", "action":"","status":"PO raised","action":""},
        {"sl":"7", "vendor":"Orange company", "anchor":"Quikr", "action":"","status":"payment pending","action":""},
        {"sl":"8", "vendor":"tut company", "anchor":"AVM", "action":"","status":"payment pending","action":""},
        {"sl":"9", "vendor":"Quetzaquatl company", "anchor":"Honda motors", "action":"","status":"Payment Approved","action":""}]


        return data;
    }
});
