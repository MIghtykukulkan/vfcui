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
    accno: [
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]+$/,
            max: 12
        }),
    ],
    ifsc: [
        validator('presence', true),
        /* validator('format', {
             regex: /^[A-z][0-9]+$/,
             max: 12
         }),*/
    ],
    limit: [
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]+$/,
        }),
        validator('length', {
            max: 10
        }),
    ],
    panno: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Z0-9]+$/,
            max: 12
        }),
    ],
    vbankaddress: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-z0-9]+$/,
        }),
        validator('length', {
            max: 20
        }),
    ]

});

export default Ember.Controller.extend(Validations, {
    isShowingModal: false,

    actions: {
        vregister: function(usertype) {
            console.log("abc");
            this.toggleProperty('isShowingModal');
            var usertype = usertype;
            console.log(usertype);
            // window.location.reload(true);
            var thiscontroller = this;
            var registraionObj = {
                "firstname": this.get('fname'),
                "lastname": this.get('lname'),
                "email": this.get('email'),
                "password": this.get('password'),
                "operationalemail": this.get('email'),
                "phone": this.get('phonenumber'),
                "relationshipmanageremail": this.get('email'),
                "customerlimit": "100",
                "feepercentage": "12",
                "interestearning": "2",
                "accountno": "212323",
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


        },
        gotohome: function() {
            window.location.reload(true);
            this.transitionToRoute('home');
        }
    }

});