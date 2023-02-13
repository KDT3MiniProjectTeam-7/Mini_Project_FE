import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  main,header,footer {
    max-width:768px;
    margin:0 auto;
    padding:0 20px;
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
