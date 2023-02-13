import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  main, header, footer {
    max-width:768px;
    padding:0 20px;
    box-sizing: border-box;
  }

  header, footer {
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
  }

  main {
    margin: 70px auto;
  }
`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
