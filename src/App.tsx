import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import TabBar from './components/TabBar';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ScrollRestoration } from 'react-router-dom';

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

  header, nav {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 9999;
  }

  main {
    margin:70px auto 150px
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ::-webkit-scrollbar {
  display: none;
}
`;

const App = () => {
  return (
    <>
      <ScrollRestoration />
      <GlobalStyle />
      <Header />
      <Outlet />
      <TabBar />
    </>
  );
};

export default App;
