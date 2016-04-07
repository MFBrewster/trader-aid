import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateProduct (upProduct) {
      upProduct.save().then(()=>{
        this.transitionTo('main');
      });
    },
  },
});
