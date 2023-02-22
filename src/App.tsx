import { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCartItems } from './store/cartSlice';
import { GlobalStyle } from './common/style/Style';
import { getCart, getUserInfo } from './common/api/Api';
import Header from './components/Header';
import TabBar from './components/TabBar';
import { setUserItems } from './store/userSlice';

// 전체 공통 적용
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await getUserInfo()
        console.log(userData)
        dispatch(setUserItems(userData));
      }catch(err){
        console.log(err)
      }      
    }
    // getUserData()
    
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
