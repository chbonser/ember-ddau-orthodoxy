import Ember from 'ember';

const { isEqual, isEmpty } = Ember;

export default Ember.Route.extend({
  actions: {
    toggleDrawer(record) {
      if(isEqual(record, this.controller.get('drawerRecord'))) {
        this.controller.set('drawerRecord', null);
      } else {
        this.controller.set('drawerRecord', record);
      }
    },
    closeDrawer(record) {
      if(isEmpty(record) || isEqual(record, this.controller.get('drawerRecord'))) {
        this.controller.set('drawerRecord', null);
      }
    }
  }
});
