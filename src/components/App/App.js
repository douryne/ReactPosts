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
import './App.css';

function App() {

  useEffect(() => {
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({searchQuery: '', selectedSort: ''})
  const [modal, setModal] = useState(false);
  const sortedAndFiltered = usePosts(posts, filter.searchQuery, filter.selectedSort);
  const [fetchPosts, isPostsLoading, error] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (postToRemove) => {
    setPosts(posts.filter(post => post.id !== postToRemove.id));
  }

  return (
    <div className='App'>
      <div className='App__btns'>
        <MyButton onClick={() => setModal(true)}>Create Post</MyButton>
        <MyButton onClick={() => setPosts([])}>Delete All Posts</MyButton>
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
              <PostList removePost={removePost} posts={sortedAndFiltered} title={'JS posts'} />
            </>
            : <h1>Posts list is empty!</h1>
      }
    </div>
  );
}

export default App;
