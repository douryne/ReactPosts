import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import { AuthContext } from '../context/index';
import { publicRoutes, privateRoutes } from '../router/index';

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext);
  return (
    <Routes>
      {
        isAuth
        ?
        privateRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        )
        :
        publicRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.element {...route.props}/>}
          />
        )
      }
    </Routes>
  );
};

export default AppRouter;