import Ember from 'ember';

export default Ember.Controller.extend({
   

    isShowingModal: false,
    actions: {
        toggleModal: function(usertype) {
            this.toggleProperty('isShowingModal');            
            this.set('usertype', usertype)
        },
        login: function() {
            console.log("Action Loginss");

            switch (this.get('usertype')) {
                case "anchor":
                    this.transitionToRoute('anchorhome')
                    break;
                case "vendor":
                    this.transitionToRoute('vendorhome')
                    break;
                case "regulator":
                    this.transitionToRoute('regulatorhome')
                    break;
            }

        }
    }
});