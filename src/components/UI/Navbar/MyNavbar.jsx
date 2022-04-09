import React from 'react';
import {Link} from 'react-router-dom';
import classes from './MyNavbar.module.css';

const MyNavbar = () => {
  return (
    <div className={classes.navbar}>
      <Link to='/'>Posts</Link>
      <Link to='/about'>About</Link>
    </div>
  );
};

export default MyNavbar;