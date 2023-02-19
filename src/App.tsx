import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import TabBar from './components/TabBar';
import { ScrollRestoration } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCartItems } from './store/cartSlice';
import { GlobalStyle } from './common/style/Style';
import { getCart } from './common/api/Api';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCartData = async () => {
      const data = await getCart();
      dispatch(setCartItems(data!.data.resultData));
    };
    getCartData();
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
