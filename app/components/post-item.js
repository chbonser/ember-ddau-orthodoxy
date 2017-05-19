import Ember from 'ember';

const PostItem = Ember.Component.extend({
  actions: {
    deletePost() {
      this.get('post').destroyRecord();
    }
  }
});

PostItem.reopenClass({
  positionalParams: ['post']
});

export default PostItem;
