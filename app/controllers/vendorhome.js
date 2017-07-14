import Ember from 'ember';
import stepperMixin from '../mixins/stepper';

export default Ember.Controller.extend(stepperMixin, {
    anchorList: ["ManufacturerA", "ManufacturerB", "ManufacturerC", "ManufacturerD", "ManufacturerE"],
    anchorName: null,
    anchorEmail: null,
    anchorPhone: null,
    anchorBank: null,
    selectedAnchor: false,
    actions: {
        //jump t appoval step
        paymentapproval: function() {

            this.set('selectedAnchor', false);
            var currentStep = this.get('currentStep');
            currentStep = currentStep + 3;
            this.set('currentStep', currentStep);
        },
        //approve paymet
        approvePayment: function() {
            this.set('modalmessage', " Payment Approved !!");
            this.toggleProperty('approveProperty');
        },
        invoiceupload: function() {
            this.set('modalmessage', " Invoice uploaded successfully !!! , Click OK to go back to home");
            console.log("approved");
            this.toggleProperty('approveProperty');
            this.set('percentageComplete', 100);
        },
        toggleModal: function(usertype) {
            this.toggleProperty('approveProperty');
        },
        gotohome: function() {
            var currentStep = this.get('currentStep');
            //currentStep = currentStep -1;
            if (currentStep === 6) {
                currentStep = currentStep - 3;
            }
            this.set('currentStep', currentStep);
            this.toggleProperty('approveProperty');
            this.toggleProperty('selectedAnchor');
            //this.transitionToRoute('vendorhome')
        },
        SelectAnchor: function(chooseanchor) {
            var chooseanchor = chooseanchor;
            console.log("chooseanchor :" + chooseanchor);
            if (chooseanchor === 'ManufacturerA') {
                this.set('anchorName', 'ManufacturerA');
                this.set('anchorEmail', 'ManufacturerA@xx.com');
                this.set('anchorPhone', 9990001111);
                this.set('anchorBank', 'RBL');
            } else if (chooseanchor === 'ManufacturerB') {
                this.set('anchorName', 'ManufacturerB');
                this.set('anchorEmail', 'ManufacturerB@xx.com');
                this.set('anchorPhone', 9990001111);
                this.set('anchorBank', 'RBL');
            } else if (chooseanchor === 'ManufacturerC') {
                this.set('anchorName', 'ManufacturerC');
                this.set('anchorEmail', 'ManufacturerC@xx.com');
                this.set('anchorPhone', 9990001155);
                this.set('anchorBank', 'RBL');
            } else if (chooseanchor === 'ManufacturerD') {
                this.set('anchorName', 'ManufacturerD');
                this.set('anchorEmail', 'ManufacturerD@xx.com');
                this.set('anchorPhone', 9990001144);
                this.set('anchorBank', 'RBL');
            } else if (chooseanchor === 'ManufacturerE') {
                this.set('anchorName', 'ManufacturerE');
                this.set('anchorEmail', 'ManufacturerE@xx.com');
                this.set('anchorPhone', 9990001177);
                this.set('anchorBank', 'RBL');
            }
            var currentStep = this.get('currentStep');
            if (currentStep != 4 && currentStep != 7) {
                this.send('nextStep');

            }
        }
    }
});