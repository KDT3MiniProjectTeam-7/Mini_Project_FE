import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { Item } from '../../store/cartSlice';

// interface loanItem {
//   productId: number;
//   productName: string;
//   companyName: string;
//   companyImage: string;
//   lowRate: number;
//   highRate: number;
//   bound: string;
// }

const LoanLists = ({ data }: { data: Item[] }) => {
  return (
    <Container>
      {data.map((loan) => (
        <LoanContainer key={loan.productId}>
          <Thumbnail>
            <img src={loan.companyImage} alt="loan Image" />
          </Thumbnail>
          <div className="desc">
            <h1>{loan.productName}</h1>
            <p>{loan.companyName}</p>
          </div>
          <AiOutlineHeart size="26" className="wish" />
        </LoanContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

const LoanContainer = styled.div`
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

export default LoanLists;
