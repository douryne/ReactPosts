import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import MyButton from '../Button/MyButton';
import { AuthContext } from '../../../context/index';
import classes from './MyNavbar.module.css';

const MyNavbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  return (
    <div className={classes.navbar}>
      <MyButton disabled={!isAuth} onClick={() => setIsAuth(false)}>Log out</MyButton>
      <div className={classes.navbar__links}>
        <Link to='/'>Posts</Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  );
};

export default MyNavbar;