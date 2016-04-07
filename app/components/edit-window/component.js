import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['product-half main-app-window'],
  formVisible: false,

  product: {},
  productToEdit: null,

  actions: {
    makeEditable (product){
      this.set('formVisible', true);
      this.set('productToEdit', product);
    },
    hideForm () {
      this.set('formVisible', false);
      this.set('productToEdit', null);
    },
    submit () {
      this.sendAction('submit', this.get('productToEdit'));
      this.set('productToEdit', null);
    },
    destroyProduct () {
      this.sendAction('destroyProduct', this.get('productToEdit'));
      // this.get('productToEdit').destroyRecord().then(()=>{
      //   this.transitionTo('main');
      // });
    },
  },
});
