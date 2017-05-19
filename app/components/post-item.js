import Ember from 'ember';

const { inject } = Ember;

const PostItem = Ember.Component.extend({
  infoDrawer: inject.service(),

  willDestroyElement() {
    this.get('infoDrawer').close(this.get('post'));
  },

  actions: {
    deletePost() {
      this.get('post').destroyRecord();
    },
    toggleDrawer() {
      this.get('infoDrawer').toggleOpen(this.get('post'));
    }
  }
});

PostItem.reopenClass({
  positionalParams: ['post']
});

export default PostItem;
