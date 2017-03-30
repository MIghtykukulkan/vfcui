import Ember from 'ember';

export default Ember.Controller.extend({
    anchornotchoosen : true,
    vendornotchoosen : true,
    selectedAnchor : null,
    selectedVendor: null,
    percentageComplete : 0,
    anchorList : ["bajaj", "Usha","tata","Jindal","Hiranandini"],
    vendorList : ["Hexaware", "TCS","Syntex","Jaguar","Honda"],

    actions:{
        chooseAnchor:function(anchorItem){
            this.set('selectedAnchor',anchorItem);
            this.set('anchornotchoosen', false);
            this.set('percentageComplete', 30);
        },

        chooseVendor:function(vendorItem){
             this.set('selectedVendor',vendorItem);
            this.set('vendornotchoosen', false);
            this.set('percentageComplete', 60);
        },
         toggleModal: function(usertype) {
            this.toggleProperty('isShowingModal');    
             this.set('percentageComplete', 100);      
        }
    }
   


});
