import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login';
import SignUp from '../pages/signup';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
]);

export default router;
