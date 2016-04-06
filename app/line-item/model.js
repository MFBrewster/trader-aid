import DS from 'ember-data';

export default DS.Model.extend({
  quantity: DS.attr('number'),
  product: DS.belongsTo('product'),
  order: DS.belongsTo('order')
});
