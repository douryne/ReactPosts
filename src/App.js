import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/Input/MyInput';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
    { id: 3, title: 'JavaScript', body: 'Description' }
  ]);

  const [post, setPost] = useState({title: '', body: ''})

  const createNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className='App'>
      <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type='text' 
          placeholder='Post name'
        />
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type='text' 
          placeholder='Post name'
        />
        <MyButton onClick={createNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title={'JS posts'}/>
    </div>
  );
}

export default App;
