import About from "../pages/About";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts/Posts";
import Error from "../pages/Error";
import Login from "../pages/Login";
import { Navigate } from 'react-router-dom';

export const privateRoutes = [
  {path: '/', element: Posts},
  {path: '/about', element: About},
  {path: '/:id', element: PostPage},
  {path: '/*', element: Error}
]

export const publicRoutes = [
  {path: '/login', element: Login, props: {}},
  {path: '/*', element: Navigate, props: {to: '/login', replace: true,}},
]