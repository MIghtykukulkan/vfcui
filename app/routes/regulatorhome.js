import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        var data = [{
                "sl": "1",
                "Supplier": "SupplierA",
                "Manufacturer": "ManufacturerA",
                "programid": "9171",
                "status": "program Initiated",
                "action": "",
                "action": ""
            },
            {
                "sl": "2",
                "Supplier": "SupplierB",
                "Manufacturer": "ManufacturerA",
                "programid": "9172",
                "status": "payment pending",
                "action": "",
                "action": ""
            },
            {
                "sl": "3",
                "Supplier": "SupplierC",
                "Manufacturer": "ManufacturerA",
                "programid": "9173",
                "status": "payment pending",
                "action": "",
                "action": ""
            },
            {
                "sl": "4",
                "Supplier": "SupplierD",
                "Manufacturer": "ManufacturerB",
                "programid": "9174",
                "status": "Invoice approval",
                "action": "",
                "action": ""
            },
            {
                "sl": "5",
                "Supplier": "SupplierE",
                "Manufacturer": "new ventures",
                "programid": "9175",
                "status": "payment pending",
                "action": "",
                "action": ""
            },
            {
                "sl": "6",
                "Supplier": "SupplierA",
                "Manufacturer": "ManufacturerB",
                "programid": "9176",
                "status": "PO raised",
                "action": "",
                "action": ""
            },
            {
                "sl": "7",
                "Supplier": "SupplierB",
                "Manufacturer": "ManufacturerB",
                "programid": "9177",
                "status": "Payment Approved",
                "action": "",
                "action": ""
            }
        ]

        return data;
    }
});