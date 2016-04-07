import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['product-half main-app-window'],
  newProduct: false,

  product: {},

  actions: {
    addLineItem () {
      
    },
    toggleNewProd () {
      this.toggleProperty('newProduct');
      this.set('editProduct', false);
      this.set('product', {});
    },
    submit () {
      if (this.get('product.name') && this.get('product.price')) {
        this.sendAction('submit', this.get('product'));
        this.set('product', {});
      }
      this.toggleProperty('newProduct');
    },
  }
});
