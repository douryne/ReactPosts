import React, { useState } from 'react';
import { usePosts } from '../../hooks/usePosts';
import PostFilter from '../PostFilter';
import PostForm from '../PostForm';
import PostList from '../PostList';
import MyButton from '../UI/Button/MyButton';
import MyModal from '../UI/Modal/MyModal';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'A' },
    { id: 2, title: 'Python', body: 'C' },
    { id: 3, title: 'C++', body: 'B' }
  ]);

  const [filter, setFilter] = useState({searchQuery: '', selectedSort: ''})
  const [modal, setModal] = useState(false);
  const sortedAndFiltered = usePosts(posts, filter.searchQuery, filter.selectedSort);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (postToRemove) => {
    setPosts(posts.filter(post => post.id !== postToRemove.id));
  }

  return (
    <div className='App'>
      <MyButton onClick={() => setModal(true)}>Create Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      { posts.length
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
