import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import { App, IncludedLayout, ExcludedLayout } from './App';
import Error from './components/Error';

import Main from './pages/main/MainPage';
import Survey from './pages/survey/Survey';
import ALL from './pages/all/allPage';
import Cart from './pages/cart/CartPage';
import Search from './pages/search/SearchPage';
import MyPage from './pages/myPage/MyPage';

import Intro from './pages/intro/Intro';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import SearchResults from './pages/search/SearchResultsPage';
import Detail from './pages/detail/detailPage';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import SurveyComplate from './pages/survey/SurveyComplate';

const persistor = persistStore(store);

const router = createBrowserRouter([
  // 헤더, 탭바 있음
  {
    path: '/',
    element: [<App key={1}/>, <IncludedLayout key={2}/>],
    errorElement: <Error />,
    children: [
      { index: true, element: <Main /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/search', element: <Search /> },
      { path: '/all', element: <ALL /> },
    ],
  },

  // 헤더, 탭바 없음
  {
    path: '/',
    element: [<App key={3}/>, <ExcludedLayout key={4}/>],
    errorElement: <Error />,
    children: [
      { path: '/intro', element: <Intro /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/search/:keywords', element: <SearchResults /> },
      { path: '/detail/:category/:id', element: <Detail /> },
      { path: '/cart', element: <Cart /> },
      { path: '/surveyComplate', element: <SurveyComplate /> },
      { path: '/survey', element: <Survey /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </>
);
