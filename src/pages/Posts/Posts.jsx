import React, { useEffect, useState, useRef } from 'react';
import PostService from '../../API/PostService';
import useFetching from '../../hooks/useFetching';
import { usePosts } from '../../hooks/usePosts';
import PostFilter from '../../components/PostFilter';
import PostForm from '../../components/PostForm';
import PostList from '../../components/PostList';
import MyButton from '../../components/UI/Button/MyButton';
import MyLoader from '../../components/UI/Loader/MyLoader';
import MyModal from '../../components/UI/Modal/MyModal';
import {getPageCount} from '../../utils/pages';
import classes from './Posts.module.css';
import { useObserver } from '../../hooks/useObserver';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({searchQuery: '', selectedSort: ''})
  const [modal, setModal] = useState(false);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const lastElement = useRef();

  const sortedAndFiltered = usePosts(posts, filter.searchQuery, filter.selectedSort);

  const [fetchPosts, isPostsLoading, error] = useFetching(async (page, posts) => {
    const response = await PostService.getByPage(limit, page);
    const totalPostsCount = response.headers['x-total-count'];
    setTotalPageCount(getPageCount(totalPostsCount, limit));
    setPosts([...posts, ...response.data]);
  })

  useObserver(lastElement, page < totalPageCount, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(page, posts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const deleteAllPosts = () => {
    setPosts([]);
    setFilter('');
    setTotalPageCount(1);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
    setFilter('');
  }

  const removePost = (postToRemove) => {
    setPosts(posts.filter(post => post.id !== postToRemove.id));
  }

  return (
    <div>
      <div className={classes.btns}>
        <MyButton onClick={() => setModal(true)}>Create Post</MyButton>
        <MyButton onClick={deleteAllPosts}>Delete All Posts</MyButton>
      </div>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>

      {
        Boolean(posts.length) && <PostFilter filter={filter} setFilter={setFilter}/>
      }
      {
        error
          ?
          <h1>{error}</h1>
          :
          <PostList
            removePost={removePost} 
            posts={sortedAndFiltered} 
            title={'JS posts'} 
          />
      }
      {
        posts.length
        ?
        <div ref={lastElement} style={{marginTop: '-20px', height: '20px'}}/>
        :
        <></>
      }
      {
        isPostsLoading && <div className='Loader'><MyLoader /></div>
      }
    </div>
  );
}

export default Posts;