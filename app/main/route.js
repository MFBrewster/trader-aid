import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  // user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  model() {
    return this.store.findAll('product');
  },

  activate () {
    if (!this.get('isAuthenticated')) {
      this.transitionTo('sign-in');
    }
  },

  actions: {
    createProduct (params) {
      this.store.createRecord('product', params).save();
    },
  }
});
