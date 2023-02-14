import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import Error from './components/Error';

import Main from './pages/main/mainPage';
import Test from './pages/TestPage';
import Intro from './pages/intro/Intro';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import MyPage from './pages/myPage/MyPage';
import ALL from './pages/all/allPage';
import Search from './pages/search/searchPage';
import ResultsTotal from './pages/search/resultsTotalPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Main /> },
      { path: '/test', element: <Test /> },
      { path: '/intro', element: <Intro /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/all', element: <ALL /> },
      { path: '/search', element: <Search /> },
      { path: '/search/:keywords', element: <ResultsTotal /> },
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
