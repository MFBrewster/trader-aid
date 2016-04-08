import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  sale: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signOut () {
      this.get('sale').clearOrder();
      this.sendAction('signOut');
    },

  }
});
