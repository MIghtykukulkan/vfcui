import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';
var Validations = buildValidations({
    fname: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z-. ]+$/,

        }),
        validator('length', {
            min: 4,
            max: 10
        }),
    ],
    lname: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z-. ]+$/,

        })
    ],
    email: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],

    password: [
        validator('presence', true),
        validator('length', {
            min: 4,
            max: 10
        }),
        validator('format', {
            regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/,
            message: '{description} must include at least one upper case letter, one lower case letter, and a number'
        }),
        validator('length', {
            isWarning: true,
            min: 6,
            message: 'What kind of weak password is that?'
        })
    ],

    confirmpassword: [
        validator('confirmation', {
            on: 'password',
            message: 'password do not match'
        })
    ],
    phonenumber: [
        validator('presence', true),
        validator('format', {
            regex: /^(\+\d{1,3}[- ]?)?\d{10}$/,
        })
    ],

});

export default Ember.Controller.extend(Validations, {
    isShowingModal:false,

     actions:{
         vregister: function(usertype) {
               console.log("abc");
            this.toggleProperty('isShowingModal');    
            var usertype =usertype;
            console.log(usertype);
           // window.location.reload(true);
        },
        gotohome:function(){
             window.location.reload(true);
            this.transitionToRoute('home');
        }
    }

});
