import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login';
import SignUp from '../pages/signup';
import MyPage from '../pages/mypage';
import Hobby from '../pages/hobby';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'mypage',
    element: <MyPage />,
  },
  {
    path: 'hobby',
    element: <Hobby />,
  },
]);

export default router;
