import { RouterProvider } from 'react-router-dom';
import router from './route/route.tsx';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
