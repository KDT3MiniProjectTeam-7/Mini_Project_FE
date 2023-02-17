import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import TabBar from './components/TabBar';
import { ScrollRestoration } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCartItems } from './store/cartSlice';
import { GlobalStyle } from './common/style/Style';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      async function getCart() {
        const data = await axios.get(
          'https://7102b765-02ea-4b41-983b-addf4c37adea.mock.pstmn.io/user/recent-products/cart'
        );
        console.log(data);
        if (data.status !== 200) {
          throw new Error();
        }
        dispatch(setCartItems(data.data.resultData));
      }
      getCart();
    } catch (error: any) {
      console.log(`통신 오류: ${error.response}`);
    }
  }, []);

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
