import Ember from 'ember';

export default Ember.Controller.extend({
   

    isShowingModal: false,
    actions: {
        toggleModal: function(usertype) {
            this.toggleProperty('isShowingModal');            
            this.set('usertype', usertype);
        },
        login: function() {
            console.log("Action Loginss");
           // var email= get('email');
           // console.log('email'+email);
            switch (this.get('usertype')) {
                case "anchor":
                    this.transitionToRoute('anchorhome');
                    break;
                case "vendor":
                    this.transitionToRoute('vendorhome');
                    break;
                case "regulator":
                    this.transitionToRoute('regulatorhome');
                    break;
            }

        }
    }
});