import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    togglePostDrawer(record) {
      this.send('toggleDrawer', record);
    },
  }
});
