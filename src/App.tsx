import { useEffect } from 'react';
import { Outlet, ScrollRestoration, useNavigate } from 'react-router-dom';
import { GlobalStyle } from './common/style/Style';
import Header from './components/Header';
import TabBar from './components/TabBar';


// 전체 공통 적용
const App = () => {
  return (
    <>
      <ScrollRestoration />
      <GlobalStyle />
    </>
  );
};

// 헤더, 탭바 있음
const IncludedLayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if(!document.cookie) navigate("/intro")
  }, []);

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
