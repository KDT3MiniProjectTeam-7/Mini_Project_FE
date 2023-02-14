import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import Error from './components/Error';
import Main from './pages/main/mainPage';
<<<<<<< HEAD
import Test from './pages/TestPage';
import Intro from './pages/intro/Intro';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import MyPage from './pages/myPage/MyPage';
=======
import ALL from './pages/all/allPage';
>>>>>>> 12700f3d5ae7a2fadd21bd4ca3ac15b7e5ea99ca

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Main /> },
<<<<<<< HEAD
      { path: '/test', element: <Test /> },
      { path: '/intro', element: <Intro /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/mypage', element: <MyPage /> },
=======
      { path: '/all', element: <ALL /> },
>>>>>>> 12700f3d5ae7a2fadd21bd4ca3ac15b7e5ea99ca
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);
