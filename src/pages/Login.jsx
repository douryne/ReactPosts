import React, { useContext } from 'react';
import { AuthContext } from '../context/index';
import MyButton from '../components/UI/Button/MyButton';
import MyInput from '../components/UI/Input/MyInput';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    navigate('/');
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <MyInput type='text' placeholder='Username'/>
        <MyInput type='password'  placeholder='Password'/>
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;