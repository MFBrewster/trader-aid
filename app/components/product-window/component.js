import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['product-half main-app-window'],
  newProduct: false,
  // editProduct: false,

  product: {},

  actions: {
    toggleNewProd () {
      this.toggleProperty('newProduct');
    },
    // toggleEdit(): {
    //   this.toggleProperty('editProduct');
    // }
    submit () {
      console.log(this.get('product'));
      this.sendAction('submit', this.get('product'));
      this.set('product', {});
      this.toggleProperty('newProduct');
    },
  }
});
