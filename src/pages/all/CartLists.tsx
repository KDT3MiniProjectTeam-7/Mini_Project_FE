import React from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { Item } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import { deleteCartItems } from '../../store/cartSlice';

const CartLists = ({ data }: { data: Item[] }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      {data.map((cartItem) => (
        <CartContainer key={cartItem.productId}>
          <Thumbnail>
            {cartItem.category === 'card' ? (
              <img src={cartItem.thumbnail} alt="cartItem Image" />
            ) : (
              <img src={cartItem.companyImage} alt="cartItem Image" />
            )}
          </Thumbnail>
          <div className="desc">
            <h1>{cartItem.productName}</h1>
            <p>{cartItem.companyName}</p>
          </div>
          <AiFillHeart
            size="26"
            className="wish"
            fill="red"
            color="red"
            onClick={() => {
              dispatch(deleteCartItems(cartItem));
            }}
          />
        </CartContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

const CartContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  height: 40px;
  .desc {
    width: 100%;
    h1 {
      font-size: var(--font-m);
    }
    p {
      margin-top: 6px;
      font-size: var(--font-s);
      color: var(--gray-color);
    }
  }
  .wish {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
  }
`;

const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0px;
  min-width: 50px;
  height: 40px;
  margin-right: 20px;
  img {
    max-width: 40px;
    max-height: 40px;
  }
`;

export default CartLists;
