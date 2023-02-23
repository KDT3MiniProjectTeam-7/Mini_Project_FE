import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../../store/store';
import { addCardResults, addLoanResults, addSavingsResults, addSubscriptionResults } from '../../../store/searchSlice';
import { Item } from '../../../store/cartSlice';
import { getSearchResults } from '../../../common/api/Api';
import { IoChevronForwardOutline } from 'react-icons/io5';

interface TabProps {
  setTabIndex: (index: number) => void;
}

const ResultsTotal = ({ setTabIndex }: TabProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [keywordParams, setKeywordParams] = useState('');

  useEffect(() => {
    params.keywords !== undefined && setKeywordParams(params.keywords);

    const getServerResultData = async () => {
      const cardData = await getSearchResults(keywordParams, 'card', 1);
      console.log(cardData);
      dispatch(addCardResults(cardData));
      const loanData = await getSearchResults(keywordParams, 'loan', 1);
      dispatch(addLoanResults(loanData));
      const savingsData = await getSearchResults(keywordParams, 'savings', 1);
      dispatch(addSavingsResults(savingsData));
      const subscriptionData = await getSearchResults(keywordParams, 'subscription', 1);
      dispatch(addSubscriptionResults(subscriptionData));
    };
    keywordParams && getServerResultData();
  }, [keywordParams]);

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
                    <IoChevronForwardOutline color="#969696" />
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
                    <IoChevronForwardOutline color="#969696" />
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
                    <IoChevronForwardOutline color="#969696" />
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
                    <IoChevronForwardOutline color="#969696" />
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

  li + li {
    margin-top: 40px;
  }

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
  }
`;

const Product = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;

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

export default ResultsTotal;
