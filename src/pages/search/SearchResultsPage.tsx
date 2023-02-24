import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SearchBox from './SearchComponents/SearchBox';
import CategoryTab from './SearchResultsComponents/CategoryTab';
import ResultsTotal from './SearchResultsComponents/ResultsTotal';
import ResultsCard from './SearchResultsComponents/ResultsCard';
import ResultsLoan from './SearchResultsComponents/ResultsLoan';
import ResultsSavings from './SearchResultsComponents/ResultsSavings';
import ResultsSubscription from './SearchResultsComponents/ResultsSubscription';

import { useDispatch } from 'react-redux';
import { getSearchResults } from '../../common/api/Api';
import { addCardResults, addLoanResults, addSavingsResults, addSubscriptionResults } from '../../store/searchSlice';

const SearchResults = () => {
  // 검색결과
  const dispatch = useDispatch();
  const params = useParams();
  const [keywordParams, setKeywordParams] = useState('');

  useEffect(() => {
    params.keywords !== undefined && setKeywordParams(params.keywords);
  }, [params]);

  useEffect(() => {
    const getServerResultData = async () => {
      const cardData = await getSearchResults(keywordParams, 'card', 1);
      dispatch(addCardResults(cardData.resultData));
      const loanData = await getSearchResults(keywordParams, 'loan', 1);
      dispatch(addLoanResults(loanData.resultData));
      const savingsData = await getSearchResults(keywordParams, 'savings', 1);
      dispatch(addSavingsResults(savingsData.resultData));
      const subscriptionData = await getSearchResults(keywordParams, 'subscription', 1);
      dispatch(addSubscriptionResults(subscriptionData.resultData));
    };
    keywordParams && getServerResultData();
  }, [keywordParams]);

  const [tabIndex, setTabIndex] = useState(0);
  const [category, setCategory] = useState([
    { category: 'total', title: '통합', content: <ResultsTotal setTabIndex={setTabIndex} /> },
    { category: 'card', title: '카드', content: <ResultsCard /> },
    { category: 'loan', title: '대출', content: <ResultsLoan /> },
    { category: 'savings', title: '예적금', content: <ResultsSavings /> },
    { category: 'subscription', title: '청약', content: <ResultsSubscription /> },
  ]);

  return (
    <Container>
      <Wrab>
        <SearchBox />
        <CategoryTab tabIndex={tabIndex} setTabIndex={setTabIndex} categoryArr={category} isOnAllPage={false} />
      </Wrab>
      {category
        .filter((list, index) => index === tabIndex)
        .map((list) => (
          <CategoryDesc key={list.title}>{list.content}</CategoryDesc>
        ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 768px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 106px;

  li {
    cursor: pointer;
  }
`;

const Wrab = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: fit-content;
  background-color: #fff;
`;

const CategoryDesc = styled.div``;

export default SearchResults;
