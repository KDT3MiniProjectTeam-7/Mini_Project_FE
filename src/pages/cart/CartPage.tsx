import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import cart, { Item } from '../../store/cartSlice';
import { ReducerType } from '../../store/store';

// 장바구니 전략필요.
// 조회, 삭제, 추가 모두 당연히 api를 사용해야함
// 그러나 state반영을 위하여 삭제와 추가는 redux와 연동을 할것임(action)
// 그러면 일단 받아온 데이터를 리덕스에 넣어두는것도 필요. 이걸 어디서 언제할것인가?
// 페이지 헤더에 장바구니 개수가 들어가므로, 사실상 앱시작(or 로그인) 과 동시에 받아와서 redux에 넣어놔야함
// persist로 구현하지않아도, app이나 index에서 불러오고 redux에 넣어두는 과정만 해두면 된다.
const Cart = () => {
  const cartItems = useSelector<ReducerType, Item[]>((state) => state.cart);

  console.log(cartItems);
  // 상품 넣기 완료.

  // 렌더링 단계에서는 카테고리에 맞는 카드 컨테이너를 잘 출력시키면 됨
  return (
    <main>
      <Title>
        관심있는 상품을 <span>한번</span>에 만나보세요.
      </Title>
      {/* 임시로 카트 렌더링 되는지만 확인하였습니다. */}
      {cartItems.length !== 0 && cartItems.map((item) => <p key={item.productId}>{item.productName}</p>)}
    </main>
  );
};

const Title = styled.h1`
  margin-top: 20px;
  font-weight: 900;
  line-height: 1.5;
  span {
    color: rgb(14, 118, 255);
  }
`;
export default Cart;
