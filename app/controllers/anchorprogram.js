import Ember from 'ember';
import stepperMixin from '../mixins/stepper';

export default Ember.Controller.extend(stepperMixin, {

    queryParams: ['steps'],
    step: null,
    anchornotchoosen: true,
    vendornotchoosen: true,
    percentageComplete: 0,
    currentStep: 0,
    vendorname: null,
    vendoremail: null,
    vendorphone: null,
    vendorbank: null,
    selectedVendor: null,
    watchanchorstep: function() {
        var step = this.get('steps');
        if (step === 'invoice') {
            console.log(step)
            this.set('currentStep', 2);
            this.set('percentageComplete', 0);
        }
        if (step === 'po') {
            console.log(step)
            this.set('currentStep', 0);
            this.set('percentageComplete', 0);
        }
    }.observes('steps'),

    actions: {
        //This fuction is for 'next' button.This is fuctonality used when bank will intiate the program and send vendor list to anchor
        particularVendor: function(selectedVendorName) {
            var selectedVendorName = selectedVendorName;
            console.log("selectedVendorName :" + selectedVendorName);
            console.log("abc");
            this.set('selectedVendor', selectedVendorName);

            if (selectedVendorName === 'TCS') {
                console.log("if TCS  loop");
                this.set('vendorname', 'TCS');
                this.set('vendoremail', 'tcs@abc.com');
                this.set('vendorphone', 9595000095);
                this.set('vendorbank', 'ICICI Bank');
            } else if (selectedVendorName === 'Hexaware') {
                console.log("if Hexaware loop");
                this.set('vendorname', 'Hexaware');
                this.set('vendoremail', 'hex@abc.com');
                this.set('vendorphone', 9995111195);
                this.set('vendorbank', 'HDFC Bank');
            } else if (selectedVendorName === 'Syntex') {
                console.log("if Syntex loop");
                this.set('vendorname', 'Syntex');
                this.set('vendoremail', 'syntex@abc.com');
                this.set('vendorphone', 998888888);
                this.set('vendorbank', 'Dena Bank');
            } else if (selectedVendorName === 'Jaguar') {
                console.log("if Jaguar loop");
                this.set('vendorname', 'Jaguar');
                this.set('vendoremail', 'Jaguar@abc.com');
                this.set('vendorphone', 8500000001);
                this.set('vendorbank', 'SBI Bank');
            } else if (selectedVendorName === 'Honda') {
                console.log("if Honda loop");
                this.set('vendorname', 'Honda');
                this.set('vendoremail', 'honda@abc.com');
                this.set('vendorphone', 9995111195);
                this.set('vendorbank', 'Bank of India');
            }
            var currentStep = this.get('currentStep');
            currentStep = currentStep + 1;
            this.set('currentStep', currentStep);

        },

        poupload: function() {
            this.set('modalmessage', " Purchase order uploaded successfully !!! , Click OK to go back to home")
            console.log("approved");
            this.toggleProperty('approveProperty');
            this.set('percentageComplete', 100);
        },
        gotohome: function() {

            this.toggleProperty('approveProperty');


        },
    }

});