import Ember from 'ember';

export default Ember.Mixin.create({
    selectedAnchor : null,
    selectedVendor : null,
    selectedvendr:[],
    selectedvendr :Ember.A(), 
    
    actions:{
        chooseAnchor:function(anchorItem){
            this.set('selectedAnchor',anchorItem);
            this.set('anchornotchoosen', false);
            this.set('percentageComplete', 30);
            var currentStep = this.get('currentStep');

            if(currentStep!=4 && currentStep!=7){
                this.send('nextStep');
            }
        },
        chooseVendor:function(vendorItem){
           /*  this.set('selectedVendor',vendorItem);
            this.set('vendornotchoosen', false);
            this.set('percentageComplete', 60);
            var currentStep = this.get('currentStep');
            if(currentStep!=3 ){
                    this.send('nextStep');
            }*/
             var selectvendorlist=[];
            selectvendorlist=vendorItem;
            console.log("selectvendorlist"+selectvendorlist);
            
        },
        saveModel: function(){
            console.log("TODDO: called when all steps are completed");
        },
        nextStep: function(){
            var currentStep = this.get('currentStep');
            currentStep = currentStep + 1;
            this.set('currentStep',currentStep);
        },
        previousStep : function(){
            var currentStep = this.get('currentStep');
            currentStep = currentStep - 1;
            this.set('currentStep',currentStep);
        },
        submitselectvendorlist:function(selectvendor){
            var selectvendor = selectvendor;
            console.log('selectvendor'+selectvendor);
                console.log('this is done');
        }
    }
});
