import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  pageTitle: inject.service(),

  activate() {
    this.get('pageTitle').set('title', 'Posts');
  },

  model() {
    return this.get('store').findAll('post');
  }
});
