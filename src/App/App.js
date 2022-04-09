import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from '../components/UI/Navbar/MyNavbar';
import AppRouter from '../components/AppRouter';

function App() {
return (
    <div className='App'>
      <BrowserRouter>
      <MyNavbar />
      <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
