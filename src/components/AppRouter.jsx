import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { routes } from '../router/index';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route =>
        <Route
          path={route.path}
          element={<route.element />}
        />
      )}
    </Routes>
  );
};

export default AppRouter;