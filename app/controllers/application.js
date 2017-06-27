import Ember from 'ember';

export default Ember.Controller.extend({

       watchanchor:function(){
        console.log("calling observer watchanchor");
        var isAnchor = this.get('isAnchor');
        if(isAnchor){
            this.set('isVendor', false)
        }
 
    
    }.observes('isAnchor'),

    watchvendor:function(){
        console.log("calling observer watchvendor");
        var isVendor = this.get('isVendor');
        if(isVendor){
            this.set('isAnchor', false);
        }
       
    
    }.observes('isVendor'),

    tgp: false,

    actions:{
        register: function (){
            this.toggleProperty('tgp');
            
            var isAnchor = this.get('isAnchor');
             var isVendor = this.get('isVendor');
            if(isAnchor){
                    this.transitionToRoute('aregister');
            }                
            else if(isVendor){
                    this.transitionToRoute('vregister');
            }
            else {
                window.location.reload(true);
            }
        },

        togglepanel:function(){
            this.toggleProperty('tgp');
        },
       toggleModal: function(usertype) {
             console.log("adad");
            this.toggleProperty('isShowingModal');    
            var usertype =usertype;
            console.log(usertype);
        }
    }
});
