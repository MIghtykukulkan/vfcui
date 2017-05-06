import Ember from 'ember';

export default Ember.Component.extend({


    actions: {
        myaction: function() {
            this.set('nameexists', true)

        }
    }

});