import Ember from 'ember';

export default Ember.Controller.extend({
    isShowingModal:false,

     actions:{
         toggleModal: function(usertype) {
             this.toggleProperty('isShowingModal');    
            var usertype =usertype;
            console.log(usertype);
        }
    }

});
