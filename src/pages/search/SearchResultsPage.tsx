import React, { useState, useMemo } from 'react';
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

  return (
    <>
      <Container>
        <SearchBox />
        <CategoryTab>
          {categoryArr.map((list, index) => (
            <li key={list.title} className={index === category ? 'clicked' : ''} onClick={() => setCategory(index)}>
              {list.title}
            </li>
          ))}
        </CategoryTab>
        <CategoryDesc>{categoryArr[category].content}</CategoryDesc>
      </Container>
    </>
  );
};

const Container = styled.main`
  margin-top: 125px;
`;
const CategoryTab = styled.ol`
  display: flex;
  justify-content: space-between;
  gap: 13px;
  border-bottom: 1px solid #ebebeb;

  font-size: 14px;
  font-weight: 500;

  li {
    padding: 12px 17px;
    color: #5b5c5e;
    transition: all 0.3ms ease-in;

    &.clicked {
      color: #0e76ff;
      border-bottom: 3px solid #0e76ff;
    }
  }
`;
const CategoryDesc = styled.div``;

export default SearchResults;
