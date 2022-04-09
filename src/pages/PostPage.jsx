import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import { useParams } from 'react-router-dom';
import MyLoader from '../components/UI/Loader/MyLoader';

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  
  const [fetchPostInf, isLoading, error] = useFetching(async (postId) => {
    const response = await PostService.getById(postId)
    setPost(response.data);
  })

  useEffect(() => {
    fetchPostInf(params.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {
        isLoading
        ? <div className='Loader'><MyLoader /></div>
        : error
          ? <h1>error</h1>
          : <h1>{post.id}. {post.title}</h1>
      }
    </div>
  );
};

export default PostPage;