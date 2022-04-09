import About from "../pages/About";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts/Posts";
import Error from "../pages/Error";

export const routes = [
  {path: '/', element: Posts},
  {path: '/about', element: About},
  {path: '/:id', element: PostPage},
  {path: '*', element: Error}
]