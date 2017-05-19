import Ember from 'ember';

const PostList = Ember.Component.extend({
  willDestroyElement() {
    this.get('closeDrawer')();
  }
});

PostList.reopenClass({
  positionalParams: ['posts']
});

export default PostList;
