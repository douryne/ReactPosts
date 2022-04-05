import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
    { id: 3, title: 'JavaScript', body: 'Description' }
  ]);

  return (
    <div className='App'>
      <form>
        <input type='text' placeholder='Post name'/>
        <input type='text' placeholder='Post description'/>
        <MyButton disabled>Create post</MyButton>
      </form>
      <PostList posts={posts} title={'JS posts'}/>
    </div>
  );
}

export default App;
