import React, {useState} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from '../components/UI/Navbar/MyNavbar';
import AppRouter from '../components/AppRouter';
import { AuthContext } from '../context/index';

function App() {
  const [isAuth, setIsAuth] = useState(false);
return (
    <div className='App'>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <BrowserRouter>
        <MyNavbar />
        <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
