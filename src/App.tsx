import { useEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation, useNavigate } from 'react-router-dom';
import { GlobalStyle } from './common/style/Style';
import Header from './components/Header';
import TabBar from './components/TabBar';
import { getTokenFromCookies } from './utils/getTokenFromCookies';

// 전체 공통 적용
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 쿠키에 토큰이 없을 때, 접속 페이지로 보내기
    if (
      !getTokenFromCookies() &&
      location.pathname !== '/intro' &&
      location.pathname !== '/login' &&
      location.pathname !== '/signup'
    ) {
      navigate('/intro');
    }
    // 쿠키에 토큰이 있을 때, 접속/회원가입/로그인으로 이동 막기
    else if (
      getTokenFromCookies() &&
      (location.pathname === '/intro' || location.pathname === '/login' || location.pathname === '/signup')
    ) {
      navigate('/');
    }
  });

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
