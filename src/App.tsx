import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import TabBar from './components/TabBar';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import SearchHeader from './pages/search/components/searchHeader';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing:border-box;
  }

  main, header, nav {
    max-width:768px;
    padding:0 20px;
    box-sizing: border-box;
    margin:0 auto;
  }

  nav {
    position: fixed;
    left: 0;
    right: 0;
  }

  main {
    margin:30px auto 150px
  }

  a {
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <TabBar />
    </>
  );
};

export default App;
