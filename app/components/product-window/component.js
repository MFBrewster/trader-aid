import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['product-half main-app-window'],
  newProduct: false,
  editProduct: false,

  product: {},

  actions: {
    toggleNewProd () {
      this.toggleProperty('newProduct');
      this.set('editProduct', false);
    },
    toggleEdit () {
      this.toggleProperty('editProduct');
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
