import Ember from 'ember';

const { inject, computed } = Ember;

export default Ember.Component.extend({
  state: inject.service('info-drawer'),
  classNames: ['flex', 'layout-row'],

  isOpen: computed.alias('state.isOpen'),
  record: computed.alias('state.record'),

  actions: {
    toggleOpen(record) {
      this.get('state').toggleOpen(record);
    },
    close(record) {
      console.log(`${this.toString()}#close`, record);
      this.get('state').close(record);
    }
  }
});
