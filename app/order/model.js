import DS from 'ember-data';

export default DS.Model.extend({
  customer: DS.attr('string'),
  lineItems: DS.hasMany('line-items'),
  total: DS.attr('number'),
  tendered: DS.attr('number'),
  change: DS.attr('number'),
  closed: DS.attr('boolean'),
});
