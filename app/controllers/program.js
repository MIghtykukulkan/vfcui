import Ember from 'ember';
import stepperMixin from '../mixins/stepper';

export default Ember.Controller.extend(stepperMixin,{
    queryParams: ['step'],
    step:null,
    anchornotchoosen : true,
    vendornotchoosen : true,
    percentageComplete : 0,
    currentStep:0,
    watchstep: function(){
        var step = this.get('step');
        if(step==='close'){
            this.set('currentStep',8)
            this.set('percentageComplete',0)
        }
         if(step==='init'){
            this.set('currentStep',0)
            this.set('percentageComplete',0)
        }
    }.observes('step'),
    alist:[{
        "name":"ABC Pvt ltd"
    },{}],
    anchorList : ["bajaj", "Usha","tata","Jindal","Hiranandini"],
    vendorList : ["Hexaware", "TCS","Syntex","Jaguar","Honda"],

    actions:{
        
        closure:function(){
             this.toggleProperty('closureConfirmation');    
             this.set('percentageComplete', 100);   
        },
        gotohome:function(){
                this.transitionToRoute('regulatorhome');
        },
         toggleModal: function(usertype) {
            this.toggleProperty('isShowingModal');    
             this.set('percentageComplete', 100);      
        }
    }
   


});
