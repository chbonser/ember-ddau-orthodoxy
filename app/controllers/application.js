import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  drawerRecord: null,
  isDrawerOpen: computed.notEmpty('drawerRecord'),

  actions: {
    closePostDrawer() {
      this.send('closeDrawer');
    }
  }
});
