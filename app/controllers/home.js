import Ember from 'ember';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    email: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],
    password: {
    description: 'Password',
    validators: [
      validator('presence', true),
      validator('length', {
      })
    ],
    }

});

export default Ember.Controller.extend(Validations,{
   

    isShowingModal: false,
    actions: {
        toggleModal: function(usertype) {
            this.toggleProperty('isShowingModal');            
            this.set('usertype', usertype);
        },
       login: function() {
            console.log("Action Loginss");
           var email= this.get('email');
           console.log('email'+email);
           var password=this.get('password');
           console.log('password'+password);

              if(email === " " || email === null){
                  console.log("fields empty");
              }else{
                  console.log("fields are filled");
              }
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