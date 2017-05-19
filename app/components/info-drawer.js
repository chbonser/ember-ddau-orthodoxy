import Ember from 'ember';
import WormholeActionable from 'ember-wormhole-action/mixins/wormhole-actionable';

const { inject, computed } = Ember;

export default Ember.Component.extend(WormholeActionable, {
  state: inject.service('info-drawer'),
  classNames: ['flex', 'layout-row'],

  isOpen: computed.alias('state.isOpen'),
  record: computed.alias('state.record'),

  wormholeActionableActions: [
    {action: 'toggleOpen', name: 'toggleOpenInfoDrawer'},
    {action: 'close', name: 'closeInfoDrawer'}
  ],

  actions: {
    toggleOpen(record) {
      this.get('state').toggleOpen(record);
    },
    close(record) {
      this.get('state').close(record);
    }
  }
});
