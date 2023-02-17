import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import TabBar from './components/TabBar';
import { ScrollRestoration } from 'react-router-dom';
import { GlobalStyle } from './common/style/Style';

const App = () => {
  const location = useLocation();
  const findResultsPage = location.pathname.slice(0, 8) === '/search/';
  return (
    <>
      <ScrollRestoration />
      <GlobalStyle />
      {findResultsPage ? (
        <Outlet />
      ) : (
        <>
          <Header />
          <Outlet />
          <TabBar />
        </>
      )}
    </>
  );
};

export default App;
