import React, { useContext, useState, useMemo } from 'react';
import { AuthContext } from '../context/index';
import MyButton from '../components/UI/Button/MyButton';
import MyInput from '../components/UI/Input/MyInput';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {setIsAuth} = useContext(AuthContext);
  const [isUserNameInpEmty, setIsUserNameInpEmty] = useState(true);
  const [IsPasswordInpEmty, setIsPasswordInpEmty] = useState(true);

  const navigate = useNavigate();

  const areInputsEmpty = useMemo(() => {
    return (isUserNameInpEmty === false && IsPasswordInpEmty === false);
  }, [isUserNameInpEmty, IsPasswordInpEmty])

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
        <MyInput onChange={() => setIsUserNameInpEmty(false)} type='text' placeholder='Username'/>
        <MyInput onChange={() => setIsPasswordInpEmty(false)} type='password'  placeholder='Password'/>
        <MyButton disabled={!areInputsEmpty}>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;