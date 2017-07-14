import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var aController = this.controllerFor('anchorhome');

        aController.set('approveProperty', false);
        aController.set('currentStep', 1);

        var data = [{
                "sl": "1",
                "ProgramName": "program1",
                "Supplier": "SupplierA",
                "programid": "9171",
                "status": "program Initiated",
                "action": ""
            },
            {
                "sl": "2",
                "ProgramName": "program2",
                "Supplier": "SupplierB",
                "programid": "9172",
                "status": "payment pending",
                "action": ""
            },

            {
                "sl": "2",
                "ProgramName": "program4",
                "Supplier": "SupplierB,SupplierD",
                "programid": "9174",
                "status": "Invoice approval",
                "action": ""
            }
        ]

        return data;

    }
});