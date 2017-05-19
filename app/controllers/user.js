import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    togglePostDrawer(record) {
      this.send('toggleDrawer', record);
    },
    closePostDrawer() {
      this.send('closeDrawer');
    },
  }
});
