import Ember from 'ember';

const { computed, isEqual, isEmpty } = Ember;

export default Ember.Service.extend({
  record: null,
  isOpen: computed.notEmpty('record'),

  toggleOpen(record) {
    if(isEqual(record, this.get('record'))) {
      this.set('record', null);
    } else {
      this.set('record', record);
    }
  },

  close(record) {
    console.log(`${this.toString()}#close`, record);
    if(isEmpty(record) || isEqual(record, this.get('record'))) {
      console.log(`close it!`);
      this.set('record', null);
    }
  }
});
