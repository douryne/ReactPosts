import React, { useEffect, useState } from 'react';
import PostService from '../../API/PostService';
import useFetching from '../../hooks/useFetching';
import { usePosts } from '../../hooks/usePosts';
import PostFilter from '../PostFilter';
import PostForm from '../PostForm';
import PostList from '../PostList';
import MyButton from '../UI/Button/MyButton';
import MyLoader from '../UI/Loader/MyLoader';
import MyModal from '../UI/Modal/MyModal';
import {getPageCount} from '../../utils/pages';
import './App.css';
import MyPagination from '../UI/Pagination/MyPagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({searchQuery: '', selectedSort: ''})
  const [modal, setModal] = useState(false);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);

  const sortedAndFiltered = usePosts(posts, filter.searchQuery, filter.selectedSort);
  const [fetchPosts, isPostsLoading, error] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    const totalPostsCount = response.headers['x-total-count'];
    setTotalPageCount(getPageCount(totalPostsCount, limit));
    setPosts(response.data);
  })

  useEffect(() => {
    fetchPosts(page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const deleteAllPosts = () => {
    setPosts([]);
    setFilter('');
    setPage(1);
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
    <div className='App'>
      <div className='App__btns'>
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
                setPage={setPage} 
              />
            </>
            : <h1>Posts list is empty!</h1>
      }
    </div>
  );
}

export default App;
