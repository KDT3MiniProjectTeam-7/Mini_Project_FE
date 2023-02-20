import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Item } from '../../store/cartSlice';
import { isInCart } from '../../utils/isInCart';
import { useDispatch } from 'react-redux';
import { addCartItems, deleteCartItems } from '../../store/cartSlice';

// interface savingsItem {
//   productId: number;
//   productName: string;
//   companyName: string;
//   companyImage: string;
//   basicRate: number;
//   primeRate: number;
// }

const SavingsLists = ({ data }: { data: Item[] }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      {data.map((savings) => (
        <SavingsContainer key={savings.productId}>
          <Thumbnail>
            <img src={savings.companyImage} alt="savings Image" />
          </Thumbnail>
          <div className="desc">
            <h1>{savings.productName}</h1>
            <p>{savings.companyName}</p>
          </div>
          {isInCart(savings.productId) ? (
            <AiFillHeart
              size="26"
              className="wish"
              fill="red"
              color="red"
              onClick={() => {
                dispatch(deleteCartItems(savings));
              }}
            />
          ) : (
            <AiOutlineHeart
              size="26"
              className="wish"
              onClick={() => {
                dispatch(addCartItems(savings));
              }}
            />
          )}
          {/* <AiFillHeart
            size="26"
            className="wish"
            fill="red"
            color="red"
            onClick={() => {
              dispatch(deleteCartItems(savings));
            }}
          />
          <AiOutlineHeart
            size="26"
            className="wish"
            onClick={() => {
              dispatch(addCartItems(savings));
            }}
          /> */}
        </SavingsContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

const SavingsContainer = styled.div`
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

export default SavingsLists;
