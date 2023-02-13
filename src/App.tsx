import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import SearchHeader from './pages/search/components/searchHeader';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing:border-box;
  }

  main, header, footer {
    max-width:768px;
    padding:0 20px;
    box-sizing: border-box;
    margin:0 auto;
  }

  footer {
    position: fixed;
    left: 0;
    right: 0;
  }

  main {
    margin:30px auto 150px
  }
`;

const App = () => {
  const location = useLocation();
  const findSearchPage = location.pathname.slice(0, 7) === '/search';
  return (
    <>
      <GlobalStyle />
      {findSearchPage ? <SearchHeader /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
