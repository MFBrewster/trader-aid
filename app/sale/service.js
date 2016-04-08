import Ember from 'ember';

export default Ember.Service.extend({
  order: { products: [] },

  init () {
    this.set('order', { products: [], });
  },

  addProduct (product) {
    this.get('order').products.pushObject(product);
  },

  removeProduct (product) {
    let index = this.get('order').products.lastIndexOf(product);
    if (index !== -1) { this.get('order').products.removeAt(index, 1); }
  },

  clearOrder () {
    this.set('order', { products: [], });
  },
});
