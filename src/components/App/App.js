import React, { useState } from 'react';
import PostForm from '../PostForm';
import PostList from '../PostList';
import MySelect from '../UI/Select/MySelect';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
    { id: 3, title: 'JavaScript', body: 'Description' }
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (postToRemove) => {
    setPosts(posts.filter(post => post.id !== postToRemove.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
      {
        posts.length 
        ? <>
          <hr style={{ color: 'whitesmoke', margin: '15px 0' }} />
          <MySelect
            value={selectedSort}
            onSelectChange={sortPosts}
            options={[
              { name: 'Sort by title', value: 'title', },
              { name: 'Sort by description', value: 'body', }
            ]}
            defaultValue='Sort by'
          />
          <hr style={{ color: 'whitesmoke', margin: '15px 0' }} />
          <PostList removePost={removePost} posts={posts} title={'JS posts'} />
        </>
        : <h1>Posts list is empty!</h1>
      }
    </div>
  );
}

export default App;
