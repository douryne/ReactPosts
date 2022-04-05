import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
    { id: 3, title: 'JavaScript', body: 'Description' }
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (postToRemove) => {
    setPosts(posts.filter(post => post.id !== postToRemove.id));
  }

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
      <PostList removePost={removePost} posts={posts} title={'JS posts'}/>
    </div>
  );
}

export default App;
