import React from 'react';
import MyButton from '../UI/Button/MyButton';
import classes from './PostItem.module.css';

const PostItem = (props) => {
  return (
    <div className={classes.post}>
      <div>
        <h2>{ props.post.id }. { props.post.title }</h2>
        <p>{ props.post.body }</p>
      </div>
      <div className={classes.btns}>
        <MyButton onClick={() => props.removePost(props.post)}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;