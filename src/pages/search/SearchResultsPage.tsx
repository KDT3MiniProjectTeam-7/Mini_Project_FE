import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import SearchBox from './SearchComponents/SearchBox';
import CategoryTab from './SearchResultsComponents/CategoryTab';
import ResultsTotal from './SearchResultsComponents/ResultsTotal';
import ResultsCard from './SearchResultsComponents/ResultsCard';
import ResultsLoan from './SearchResultsComponents/ResultsLoan';
import ResultsSavings from './SearchResultsComponents/ResultsSavings';
import ResultsSubscription from './SearchResultsComponents/ResultsSubscription';

const SearchResults = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [categoryArr, setCategoryArr] = useState([
    { title: '통합', content: <ResultsTotal /> },
    { title: '카드', content: <ResultsCard /> },
    { title: '대출', content: <ResultsLoan /> },
    { title: '예적금', content: <ResultsSavings /> },
    { title: '청약', content: <ResultsSubscription /> },
  ]);

  return (
    <>
      <Container>
        <SearchBox />
        <CategoryTab tabIndex={tabIndex} setTabIndex={setTabIndex} categoryArr={categoryArr} />
        <CategoryDesc>{categoryArr[tabIndex].content}</CategoryDesc>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 768px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 106px;
`;

const CategoryDesc = styled.div``;

export default SearchResults;
