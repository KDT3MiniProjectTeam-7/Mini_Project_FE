import React from 'react';
import Card from './Card';
import Loan from './Loan';
import Subscription from './Subscription';
import Savings from './Savings';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

//각 카테고리별로 레이아웃 제작후 detailPage에 어떤 카테고리 띄울지 결정

const Detail = () => {
  // useparams로 카테고리 가져오자.
  const { category, id } = useParams();

  let DetailPage = <></>;

  switch (category) {
    case 'card':
      DetailPage = <Card />;
      break;
    case 'loan':
      DetailPage = <Loan />;
      break;
    case 'subscription':
      DetailPage = <Subscription />;
      break;
    case 'savings':
      DetailPage = <Savings />;
      break;
    default:
      alert('카테고리를 표시해주세요.');
  }

  return <MainContainer>{DetailPage}</MainContainer>;
};

const MainContainer = styled.main`
  margin-top: 20px;
`;

export default Detail;
