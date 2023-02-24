import React from 'react';
import styled from 'styled-components';
import { AiOutlineRight } from 'react-icons/ai';
import { Item } from '../../store/cartSlice';
import { isInCart } from '../../utils/isInCart';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SubscriptionLists = ({ data }: { data: Item[] }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      {data?.map((subscription) => (
        <SubscriptionContainer key={subscription.productId}>
          <Link to={`/detail/${subscription.category}/${subscription.productId}`}>
            <Thumbnail>
              <img src={subscription.companyImage} alt="subscription Image" />
            </Thumbnail>
            <div className="desc">
              <h1>{subscription.productName}</h1>
              <p>{subscription.companyName}</p>
            </div>
            <AiOutlineRight size="21" className="wish" color="rgb(150,150,150)" />
          </Link>
        </SubscriptionContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

const SubscriptionContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  height: 40px;
  a {
    width: 100%;
    display: flex;
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

export default SubscriptionLists;
