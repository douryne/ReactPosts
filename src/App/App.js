import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from '../pages/Posts/Posts';
import About from '../pages/About';
import Error from '../pages/Error';
import MyNavbar from '../components/UI/Navbar/MyNavbar';

function App() {
return (
    <div className='App'>
      <BrowserRouter>
      <MyNavbar />
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
