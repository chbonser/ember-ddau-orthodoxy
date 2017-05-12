import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  title: attr('string'),
  body: attr('string'),

  user: belongsTo('user'),
});
