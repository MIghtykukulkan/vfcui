import Ember from 'ember';
import StepperMixin from 'vendorfin/mixins/stepper';
import { module, test } from 'qunit';

module('Unit | Mixin | stepper');

// Replace this with your real tests.
test('it works', function(assert) {
  let StepperObject = Ember.Object.extend(StepperMixin);
  let subject = StepperObject.create();
  assert.ok(subject);
});
