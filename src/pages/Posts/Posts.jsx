import React, { useEffect, useState } from 'react';
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
import MyPagination from '../../components/UI/Pagination/MyPagination';
import classes from './Posts.module.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({searchQuery: '', selectedSort: ''})
  const [modal, setModal] = useState(false);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);

  const sortedAndFiltered = usePosts(posts, filter.searchQuery, filter.selectedSort);
  const [fetchPosts, isPostsLoading, error] = useFetching(async (page) => {
    const response = await PostService.getAll(limit, page);
    const totalPostsCount = response.headers['x-total-count'];
    setTotalPageCount(getPageCount(totalPostsCount, limit));
    setPosts(response.data);
  })

  useEffect(() => {
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteAllPosts = () => {
    setPosts([]);
    setFilter('');
    setTotalPageCount(1);
    setPage(1);
  }

  const changePage = (page) => {
    setPage(page);
    fetchPosts(page);
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
      { isPostsLoading
        ?
        <div className='Loader'><MyLoader /></div>
        : error 
          ?
          <h1>{error}</h1>
          : posts.length
            ?
            <>
              <PostFilter filter={filter} setFilter={setFilter}/>
              <PostList 
                removePost={removePost} 
                posts={sortedAndFiltered} 
                title={'JS posts'} 
              />
              <MyPagination 
                page={page} 
                totalPageCount={totalPageCount} 
                setPage={changePage} 
              />
            </>
            : <h1>Posts list is empty!</h1>
      }
    </div>
  );
}

export default Posts;