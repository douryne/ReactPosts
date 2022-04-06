import React, { useMemo, useState } from 'react';
import PostFilter from '../PostFilter';
import PostForm from '../PostForm';
import PostList from '../PostList';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'A' },
    { id: 2, title: 'Python', body: 'C' },
    { id: 3, title: 'C++', body: 'B' }
  ]);

  const [filter, setFilter] = useState({searchQuery: '', selectedSort: ''})

  const sortedPosts = useMemo(() => {
    if(!filter.selectedSort) return posts;
    return [...posts].sort((a, b) => a[filter.selectedSort].localeCompare(b[filter.selectedSort]));
  }, [filter.selectedSort, posts])

  const sortedAndFiltered = useMemo(() => {
    if(!filter.searchQuery) return sortedPosts;
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.searchQuery.toLowerCase()))
  }, [sortedPosts, filter.searchQuery])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (postToRemove) => {
    setPosts(posts.filter(post => post.id !== postToRemove.id));
  }

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
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
