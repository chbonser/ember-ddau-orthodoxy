import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  drawerRecord: null,
  isDrawerOpen: computed.notEmpty('drawerRecord'),

  actions: {
    closeDrawer() {
      this.set('drawerRecord', null);
    }
  }
});
