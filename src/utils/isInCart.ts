import { useSelector } from 'react-redux';
import cart, { Item } from '../store/cartSlice';
import { ReducerType } from '../store/store';

// 모아보기, 장바구니 페이지에서 하트가 채워져있는지 없는지 판단하는 유틸

export const isInCart = (id: number) => {
  // cartItem을 불러오고
  const cartItems = useSelector<ReducerType, Item[]>((state) => state.cart);

  let flag = false;

  cartItems.forEach((item) => {
    if (item.productId === id) {
      flag = true;
    }
  });
  return flag;
};
