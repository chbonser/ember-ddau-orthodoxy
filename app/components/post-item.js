import Ember from 'ember';

const PostItem = Ember.Component.extend({
  willDestroyElement() {
    let onDestroy = this.get('onWillDestroyElement');
    if(onDestroy) { onDestroy(); }
  },

  actions: {
    deletePost() {
      this.get('post').destroyRecord();
    },
  }
});

PostItem.reopenClass({
  positionalParams: ['post']
});

export default PostItem;
