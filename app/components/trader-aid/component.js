import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
    // signInView () {
    //   this.render('sign-in', {
    //     outlet: 'trader-aid',
    //   });
    },

  }
});
