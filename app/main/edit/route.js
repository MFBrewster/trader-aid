import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateProduct (upProduct) {
      upProduct.save().then(()=>{
        this.transitionTo('main');
      });
    },
    destroyProduct (delProduct) {
      delProduct.destroyRecord().then(()=>{
        this.transitionTo('main');
      });
    }
  },
});
