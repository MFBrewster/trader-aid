import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['product-half main-app-window'],
  newProduct: false,
  // editProduct: false,

  actions: {
    toggleNewProd () {
      this.toggleProperty('newProduct')
    },
    // toggleEdit(): {
    //   this.toggleProperty('editProduct');
    // }
  }
});
