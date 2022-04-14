import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/index';
import MyButton from '../components/UI/Button/MyButton';
import MyInput from '../components/UI/Input/MyInput';
import { useNavigate } from 'react-router-dom';
import { useBtnWithFilledForm } from '../hooks/useBtnWithFilledForm';

const Login = () => {
  const {setIsAuth} = useContext(AuthContext);
  const [form, setForm] = useState({username: '', password: ''});

  const navigate = useNavigate();

  const isFormFilled = useBtnWithFilledForm(form);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    navigate('/posts');
    localStorage.setItem('auth', true);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <MyInput 
          value={form.username}
          onChange={event => setForm({...form, username: event.target.value})}
          type='text'
          placeholder='Username'
        />
        <MyInput
          value={form.password}
          onChange={event => setForm({...form, password: event.target.value})}
          type='password' 
          placeholder='Password'
        />
        <MyButton disabled={!isFormFilled}>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;