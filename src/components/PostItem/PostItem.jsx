import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../UI/Button/MyButton';
import classes from './PostItem.module.css';

const PostItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.post}>
      <div>
        <h2>{ props.post.id }. { props.post.title }</h2>
        <p>{ props.post.body }</p>
      </div>
      <div className={classes.btns}>
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
          Open
        </MyButton>
        <MyButton onClick={() => props.removePost(props.post)}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;