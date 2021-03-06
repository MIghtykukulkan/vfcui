import Ember from 'ember';
import CONFIG from 'vendorfin/config/environment';
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
    opremail: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],
    rmemail: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],
    repayaccno: [
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]+$/,
            max: 12
        }),
    ],
    customerlimit: [
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]+$/,
            max: 12
        })
    ],
    feepercentage: [
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]+$/,
            max: 12
        })
    ]


});

export default Ember.Controller.extend(Validations, {


    isShowingModal: false,

    actions: {
        /*  toggleModal: function(usertype) {
             this.toggleProperty('isShowingModal');    
             
         },*/
        gotohome: function() {
            window.location.reload(true);
            this.transitionToRoute('home');
        },
        aregister: function(usertype) {
            var thiscontroller = this;
            var fname = this.get('fname');
            console.log(fname);
            var lname = this.get('lname');
            console.log(lname);
            var registraionObj = {
                "firstname": fname,
                "lastname": lname,
                "email": this.get('email'),
                "password": this.get('password'),
                "operationalemail": this.get('opremail'),
                "phone": this.get('phonenumber'),
                "relationshipmanageremail": this.get('rmemail'),
                "customerlimit": "100",
                "feepercentage": this.get('feepercentage'),
                "interestearning": "2",
                "accountno": this.get('repayaccno'),
                "ifsccode": "Asdasd",
                "pan": "calsp",
                "address": "default",
            };


            console.log(JSON.stringify(registraionObj))
            $.ajax({
                type: 'POST',
                json: true,
                accepts: 'application/json',
                ContentType: 'application/json',
                url: CONFIG.SERVICEURL + 'registerUser',
                data: registraionObj,
                success: function(response) {
                    // mycontroller.set("score", response.score)
                    console.log(JSON.stringify(response))
                    thiscontroller.toggleProperty('isShowingModal');
                },
                error: function(result) {
                    console.log(JSON.stringify(result))
                }

            });

        }

    }
});