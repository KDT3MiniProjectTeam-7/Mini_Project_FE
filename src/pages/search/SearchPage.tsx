import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiHistory } from 'react-icons/Bi';
import { IoChevronForwardOutline } from 'react-icons/io5';
import SearchBox from './SearchComponents/SearchBox';
import KeywordsList from './SearchComponents/KeywordsList';

const Search = () => {
  return (
    <Container>
      <SearchBox />
      <RecentProducts>
        <h4>최근에 자세히 봤던</h4>
        <DetailLink to={`/detail/:category/:id`}>
          <div>
            <span className="history">
              <BiHistory />
            </span>
            상품명
          </div>
          <div className="info">
            상세정보
            <span className="move">
              <IoChevronForwardOutline />
            </span>
          </div>
        </DetailLink>
      </RecentProducts>
      <RecentKeywords>
        <KeywordsList />
      </RecentKeywords>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 30px;
  gap: 30px;

  h4 {
    margin-bottom: 20px;
    color: #505a66;
    font-size: 13px;
  }
`;

const RecentProducts = styled.section`
  margin-top: 70px;
`;

const DetailLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding-bottom: 10px;
  border-bottom: 0.5px solid #ebebeb;

  div {
    display: flex;
    align-items: center;

    &.info {
      font-size: 11px;
      color: #0e76ff;
    }
  }

  span {
    color: #b6babd;

    &.history {
      margin-right: 10px;
      font-size: 20px;
    }

    &.move {
      margin-left: 5px;
    }
  }
`;

const RecentKeywords = styled.section``;

export default Search;
