import DS from 'ember-data';

export default DS.Model.extend({
  customer: DS.attr('string'),
  lineItems: DS.hasMany('line-items')
});
