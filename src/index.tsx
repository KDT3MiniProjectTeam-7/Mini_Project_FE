import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import Error from './components/Error';

import Main from './pages/main/MainPage';
import Intro from './pages/intro/Intro';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import MyPage from './pages/myPage/MyPage';
import Search from './pages/search/SearchPage';
import ALL from './pages/all/allPage';
import ResultsTotal from './pages/search/ResultsTotalPage';
import Survey from './pages/survey/Survey';
import Detail from './pages/detail/detailPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Main /> },
      { path: '/intro', element: <Intro /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/search', element: <Search /> },
      { path: '/search/:keywords', element: <ResultsTotal /> },
      { path: '/survey', element: <Survey /> },
      { path: '/all', element: <ALL /> },
      { path: '/detail/:category/:id', element: <Detail /> },
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
