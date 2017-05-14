import Ember from 'ember';

const { computed, isEqual } = Ember;

export default Ember.Controller.extend({
  drawerRecord: null,
  isDrawerOpen: computed.notEmpty('drawerRecord'),

  actions: {
    toggleDrawer(record) {
      if(isEqual(record, this.get('drawerRecord'))) {
        this.set('drawerRecord', null);
      } else {
        this.set('drawerRecord', record);
      }
    },
    closeDrawer() {
      this.set('drawerRecord', null);
    }
  }
});
