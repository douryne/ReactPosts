import React from 'react';

const PostItem = (props) => {

  return (
    <div className='post'>
      <div className="post__content">
        <h2>{ props.id }. { props.post.title }</h2>
        <p>{ props.post.body }</p>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;