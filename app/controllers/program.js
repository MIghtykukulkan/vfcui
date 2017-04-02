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
        }
    }.observes('step'),
    alist:[{
        "name":"ABC Pvt ltd"
    },{}],
    anchorList : ["bajaj", "Usha","tata","Jindal","Hiranandini"],
    vendorList : ["Hexaware", "TCS","Syntex","Jaguar","Honda"],

    actions:{
        

        gotohome:function(){
                this.transitionToRoute('regulatorhome');
        },
         toggleModal: function(usertype) {
            this.toggleProperty('isShowingModal');    
             this.set('percentageComplete', 100);      
        }
    }
   


});
