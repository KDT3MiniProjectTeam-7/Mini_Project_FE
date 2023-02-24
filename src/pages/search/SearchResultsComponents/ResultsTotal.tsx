import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/store';
import { Item } from '../../../store/cartSlice';
import { IoChevronForwardOutline } from 'react-icons/io5';

interface TabProps {
  setTabIndex: (index: number) => void;
}

const ResultsTotal = ({ setTabIndex }: TabProps) => {
  const navigate = useNavigate();

  const cardData = useSelector<ReducerType, Item[]>((state) => state.searchCard);
  const loanData = useSelector<ReducerType, Item[]>((state) => state.searchLoan);
  const savingsData = useSelector<ReducerType, Item[]>((state) => state.searchSavings);
  const subscriptionData = useSelector<ReducerType, Item[]>((state) => state.searchSubscription);

  const title = ['카드', '대출', '예적금', '청약'];

  const handleBtnViewAll = (e: any) => {
    const h3Value = e.target.parentElement.previousSibling.innerText;
    const isH3Value = (el: string) => el === h3Value;
    const titleIndex = title.findIndex(isH3Value) + 1;
    setTabIndex(titleIndex);
  };

  const handleLi = (category: string, id: number) => {
    navigate(`/detail/${category}/${id}`);
  };

  return (
    <>
      {title.map((list) => (
        <Container key={list}>
          <h3 key={list}>{list}</h3>
          <Desc>
            {list === '카드'
              ? cardData &&
                cardData.slice(0, 3).map((data) => (
                  <Product key={data.productId} onClick={() => handleLi('card', data.productId)}>
                    <div>
                      <Image>
                        <img src={data.thumbnail} alt={`${data.productName}카드이미지`} />
                      </Image>
                      <div>
                        <h4>{data.benefits && data.benefits[0]}</h4>
                        <p>{data.productName}</p>
                      </div>
                    </div>
                    <Icon>
                      <IoChevronForwardOutline color="#969696" size="16" />
                    </Icon>
                  </Product>
                ))
              : ''}
            {list === '대출'
              ? loanData &&
                loanData.slice(0, 3).map((data) => (
                  <Product key={data.productId} onClick={() => handleLi('loan', data.productId)}>
                    <div>
                      <Image>
                        <img src={data.companyImage} alt={`${data.companyName} 로고`} />
                      </Image>
                      <div>
                        <h4>{data.productName}</h4>
                        <p>{data.companyName}</p>
                      </div>
                    </div>
                    <Icon>
                      <IoChevronForwardOutline color="#969696" size="21" />
                    </Icon>
                  </Product>
                ))
              : ''}
            {list === '예적금'
              ? savingsData &&
                savingsData.slice(0, 3).map((data) => (
                  <Product key={data.productId} onClick={() => handleLi('savings', data.productId)}>
                    <div>
                      <Image>
                        <img src={data.companyImage} alt={`${data.companyName} 로고`} />
                      </Image>
                      <div>
                        <h4>{data.productName}</h4>
                        <p>{data.companyName}</p>
                      </div>
                    </div>
                    <Icon>
                      <IoChevronForwardOutline color="#969696" size="21" />
                    </Icon>
                  </Product>
                ))
              : ''}
            {list === '청약'
              ? subscriptionData &&
                subscriptionData.slice(0, 3).map((data) => (
                  <Product key={data.productId} onClick={() => handleLi('subscription', data.productId)}>
                    <div>
                      <Image>
                        <img src={data.companyImage} alt={`${data.companyName} 로고`} />
                      </Image>
                      <div>
                        <h4>{data.productName}</h4>
                        <p>{data.companyName}</p>
                      </div>
                    </div>
                    <Icon>
                      <IoChevronForwardOutline color="#969696" size="15" />
                    </Icon>
                  </Product>
                ))
              : ''}
            <button onClick={handleBtnViewAll}>모두 보기</button>
          </Desc>
        </Container>
      ))}
    </>
  );
};

const Container = styled.section`
  h3 {
    margin-bottom: 20px;
    padding: 30px 20px 0;
    font-size: var(--font-l);
    font-weight: 700;
  }
`;

const Desc = styled.ol`
  border-bottom: 20px solid var(--lightgray-color);

  button {
    border: none;
    background-color: transparent;

    width: 100%;
    height: 50px;
    margin-top: 20px;
    border-top: 1px solid #ebebeb;
    color: var(--main-color);
    text-align: center;
    font-size: var(--font-m);

    &:active {
      opacity: 0.7;
    }
  }

  li + li {
    margin-top: 15px;
  }
`;

const Product = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;

  &:active {
    scale: 0.98;
    background-color: var(--lightgray-color);
  }

  & > div {
    display: flex;
  }

  div > div {
    h4 {
      margin-bottom: 5px;
      color: var(--black-color);
      font-size: var(--font-m);
      font-weight: 500;
      line-height: 1.4;
    }

    p {
      color: var(--gray-color);
      font-size: var(--font-s);
    }
  }
`;

const Image = styled.div`
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

const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 30px;
  width: 23px;
`;

export default ResultsTotal;
