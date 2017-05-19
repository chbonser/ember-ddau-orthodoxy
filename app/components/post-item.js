import Ember from 'ember';

const PostItem = Ember.Component.extend({
  actions: {
    deletePost() {
      let post = this.get('post');

      this.get('closeDrawer')(post);
      post.destroyRecord();
    }
  }
});

PostItem.reopenClass({
  positionalParams: ['post']
});

export default PostItem;
