import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBox from './SearchResultsComponents/SearchBox';
import ResultsTotal from './SearchComponents/ResultsTotal';
import ResultsCard from './SearchComponents/ResultsCard';
import ResultsLoan from './SearchComponents/ResultsLoan';
import ResultsSavings from './SearchComponents/ResultsSavings';
import ResultsSubscription from './SearchComponents/ResultsSubscription';

const SearchResults = () => {
  const [category, setCategory] = useState(0);

  const categoryArr = [
    { title: '통합', content: <ResultsTotal /> },
    { title: '카드', content: <ResultsCard /> },
    { title: '대출', content: <ResultsLoan /> },
    { title: '예적금', content: <ResultsSavings /> },
    { title: '청약', content: <ResultsSubscription /> },
  ];

  const selectCategory = (index: number) => {
    setCategory(index);
  };

  return (
    <>
      <Container>
        <SearchBox />
        <CategoryTab>{categoryArr[category].title}</CategoryTab>
        <CategoryDesc>{categoryArr[category].content}</CategoryDesc>
      </Container>
    </>
  );
};

const Container = styled.main``;
const CategoryTab = styled.ol``;
const CategoryDesc = styled.div``;

export default SearchResults;
