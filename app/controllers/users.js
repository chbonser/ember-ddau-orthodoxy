import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cardClick(user) {
      this.transitionToRoute('user', user);
    }
  }
});
