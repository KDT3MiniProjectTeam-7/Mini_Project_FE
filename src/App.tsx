import { useEffect } from 'react';
import { Outlet, ScrollRestoration, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from './store/cartSlice';
import { GlobalStyle } from './common/style/Style';
import { getCart, getUserInfo } from './common/api/Api';
import Header from './components/Header';
import TabBar from './components/TabBar';
import { setUserItems } from './store/userSlice';
import { user } from './store/userSlice';
import { ReducerType } from './store/store';

// 전체 공통 적용
const App = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!document.cookie) {
      navigate('/intro');
    }

    const getUserData = async () => {
      if (document.cookie) {
        try {
          const userData = await getUserInfo();
          dispatch(setUserItems(userData));
        } catch (err) {
          console.log(err);
        }
      }
    };
    getUserData();

    const getCartData = async () => {
      const data = await getCart();

      dispatch(setCartItems(data!.resultData));
    };
    getCartData();
  }, []);

  return (
    <>
      <ScrollRestoration />
      <GlobalStyle />
    </>
  );
};

// 헤더, 탭바 있음
const IncludedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <TabBar />
    </>
  );
};

// 헤더, 탭바 없음
const ExcludedLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export { App, IncludedLayout, ExcludedLayout };
