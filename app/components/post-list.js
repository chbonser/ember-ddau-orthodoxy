import Ember from 'ember';

const PostList = Ember.Component.extend({
});

PostList.reopenClass({
  positionalParams: ['posts']
});

export default PostList;
