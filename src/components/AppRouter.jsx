import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Posts from '../pages/Posts/Posts';
import About from '../pages/About';
import Error from '../pages/Error';
import PostPage from '../pages/PostPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Posts />} />
      <Route path='/:id' element={<PostPage />} />
      <Route path='about' element={<About />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default AppRouter;