import Ember from 'ember';
import stepperMixin from '../mixins/stepper';
import CONFIG from 'vendorfin/config/environment';

export default Ember.Controller.extend(stepperMixin, {
    queryParams: ['step'],
    step: null,
    anchornotchoosen: true,
    vendornotchoosen: true,
    percentageComplete: 0,
    currentStep: 0,
    watchstep: function() {
        var step = this.get('step');
        if (step === 'close') {
            this.set('currentStep', 8);
            this.set('percentageComplete', 0);
        }
        if (step === 'init') {
            this.set('currentStep', 0);
            this.set('percentageComplete', 0);
        }
    }.observes('step'),

    alist: [{
        "name": "ABC Pvt ltd"
    }, {}],
    anchorList: ["ManufaturerA", "ManufaturerB", "ManufaturerC", "ManufaturerD", "ManufaturerE"],
    vendorList: ["SupplierA", "SupplierB", "SupplierC", "SupplierD", "SupplierE"],

    actions: {

        closure: function() {
            this.toggleProperty('closureConfirmation');
            this.set('percentageComplete', 100);
        },
        gotohome: function() {
            this.transitionToRoute('regulatorhome');
        },
        toggleModal: function(usertype) {

            var programobj = {
                "manufacturer": "ManufacturerA",
                "supplier": "SupplierA,SupplierC"
            };

            $.ajax({
                type: 'POST',
                json: true,
                accepts: 'application/json',
                ContentType: 'application/json',
                url: CONFIG.SERVICEURL + 'createProgram',
                data: programobj,
                success: function(response) {
                    // mycontroller.set("score", response.score)
                    console.log(JSON.stringify(response))
                        //alert(response.id)
                },
                error: function(result) {
                    console.log(JSON.stringify(result))
                }

            });


            this.toggleProperty('isShowingModal');
            this.set('percentageComplete', 100);
        }
    }



});