import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['sub-total'],

  sale: Ember.inject.service(),

  actions: {
    removeLineItem (product) {
      this.get('sale').removeProduct(product);
    },
  },
});
