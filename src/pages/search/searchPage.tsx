import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiHistory } from 'react-icons/Bi';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { TfiClose } from 'react-icons/tfi';
import SearchBox from './SearchComponents/SearchBox';

const Search = () => {
  const [savedKeyword, setSavedKeyword] = useState([
    'dd',
    '주택',
    '적금',
    '카드',
    '쇼핑',
    '고고..',
    '화이팅',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
  ]);

  // 최근검색어
  const handleDeleteKeyword = () => {
    // 검색어 단일삭제 api 요청
  };

  const handleDeleteKeywordAll = () => {
    alert('최근 검색어를 모두 삭제하시겠습니까?');
    // 검색어 전체삭제 api 요청
    // 00개 삭제완료 토스트 띄우기
  };

  return (
    <>
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
          <h4>내가 찾아봤던</h4>
          {savedKeyword.length !== 0 ? (
            <>
              <ol>
                {savedKeyword.map((list) => (
                  <li key={list}>
                    <SearchLink to={`/search/${list}`}>{list}</SearchLink>
                    <button onClick={handleDeleteKeyword}>
                      <TfiClose />
                    </button>
                  </li>
                ))}
              </ol>
              <button className="deleteAll" onClick={handleDeleteKeywordAll}>
                전체삭제
              </button>
            </>
          ) : (
            <p>최근 찾아봤던 내역이 없습니다.</p>
          )}
        </RecentKeywords>
      </Container>
    </>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
  }
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

const RecentKeywords = styled.section`
  li {
    display: flex;
    justify-content: space-between;

    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebebeb;

    color: #000;

    button {
      font-size: 12px;
    }
  }

  button {
    color: #5b5c5e;

    &.deleteAll {
      color: #505a66;
      font-size: 13px;
    }
  }

  p {
    color: #797a7a;
    padding: 60px 0;
    text-align: center;
    border-bottom: 0.5px solid #ebebeb;
  }
`;

const SearchLink = styled(Link)`
  width: 100%;
`;

export default Search;
