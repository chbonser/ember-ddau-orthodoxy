import Ember from 'ember';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  tagName: 'h2',
  pageTitle: inject.service(),
  title: computed.alias('pageTitle.title')
});
