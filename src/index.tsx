import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import Error from './components/Error';
import Main from './pages/main/mainPage';
import Test from './pages/TestPage';
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
      { path: '/search', element: <Search /> },
      { path: '/search/:keywords/:category', element: <ResultsTotal /> },
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
