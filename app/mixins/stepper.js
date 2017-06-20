import Ember from 'ember';

export default Ember.Mixin.create({
    vendorList : ["Hexaware", "TCS","Syntex","Jaguar","Honda"],
 // anchorList : ["ABC Enterprise", "SFS","Syntel Solutions","Jaguar","Honda"],
    selectedAnchor : null,
    selectedVendor : null,
    selectedvendor:[],
 //  selectedvendor :Ember.A(), 
    //selectvendor :null,
    vendoranchorlist :false,
    vendorregulator :false,
    
    actions:{
        chooseAnchor:function(anchorItem){
            this.set('selectedAnchor',anchorItem);
            this.set('anchornotchoosen', false);
            this.set('vendorregulator',true);
            //console.log("vendorregulator:"+vendorregulator);      
            this.set('percentageComplete', 30); 
            var currentStep = this.get('currentStep');
                //  this.send('nextStep');
            if(currentStep!=4 && currentStep!=7){
                this.send('nextStep');
            }
        },
        chooseVendor:function(vendorItem){
            this.set('selectedVendor',vendorItem);
            this.set('vendornotchoosen', false);
            this.set('percentageComplete', 60);
            var currentStep = this.get('currentStep');
            if(currentStep!=3 ){
                    this.send('nextStep');
            }
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
            this.set('selectedvendor ',selectvendor);
            console.log("selectedvendor :"+selectvendor);
            console.log('this is done');
            this.set('vendoranchorlist',true);
           // console.log("vendoranchorlist"+vendoranchorlist);
            var currentStep = this.get('currentStep');
            if(currentStep!=3 ){
                    this.send('nextStep');
            }
        }
    }
});
