import React, { useState, useEffect } from 'react';
import MyLoader from '../UI/Loader/MyLoader';
import PostService from '../../API/PostService';
import useFetching from '../../hooks/useFetching';
import classes from './PostComments.module.css';

const PostComments = ({id}) => {
  const [comments, setComments] = useState([]);
  const [fetchCom, isLoading, error] = useFetching(async (postId) => {
    const response = await PostService.getCommentsByPostId(postId)
    setComments(response.data);
  })

  useEffect(() => {
    fetchCom(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={classes['comments-section']}>
      <h1>Comments:</h1>
      {
        isLoading
        ? <div className='Loader'><MyLoader /></div>
        : error
          ? <h1>{error}</h1>
          : <div>
            {
              comments.map(comment =>
                <div key={comment.id} className={classes.comment}>
                  <h4>{comment.name}</h4>
                  <h5>{comment.email}</h5>
                  <p>{comment.body}</p>
                </div> 
              )
            }
          </div>
      }
    </div>
  );
};

export default PostComments;