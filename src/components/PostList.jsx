import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem/PostItem';

const PostList = ({posts, title, removePost}) => {

  if(!posts.length) return <h1>Posts list is empty!</h1>

  return (
    <div>
      <h1>
        { title }
      </h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={1000}
            classNames="post"
          >
            <PostItem removePost={removePost} id={index + 1} post={post}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;