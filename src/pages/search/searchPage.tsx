import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { BiSearch, BiHistory } from 'react-icons/Bi';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { TiDeleteOutline } from 'react-icons/ti';
import { TfiClose } from 'react-icons/tfi';

const Search = () => {
  // 임시 검색 키워드
  const keywordsArr = [
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
  ];

  const inputRef = useRef(null);
  const handleDeleteBtn = () => {
    inputRef.current ? (inputRef.current.value = '') : '';
  };

  return (
    <>
      <Container>
        <SearchBox>
          <span className="search">
            <BiSearch />
          </span>
          <input type="text" placeholder="필요한 상품을 찾아보세요" ref={inputRef} />
          <span className="delete" onClick={handleDeleteBtn}>
            <TiDeleteOutline />
          </span>
        </SearchBox>
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
          <ol>
            {keywordsArr.map((list) => (
              <li key={list}>
                <SearchLink to={`/search/${list}`}>{list}</SearchLink>
                <button>
                  <TfiClose />
                </button>
              </li>
            ))}
          </ol>
          <button className="deleteAll">전체삭제</button>
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
    color: #a2a5a6;
    font-size: 13px;
    font-weight: 700;
  }
`;

const SearchBox = styled.div`
  position: fixed;
  top: 56px;

  width: calc(100vw - 40px);
  max-width: 728px;
  padding: 14px 0;
  background-color: #fff;

  span {
    position: absolute;
    top: 50%;
    transform: translateY(-45%);

    font-size: 20px;
    color: #5b5c5e;

    &.search {
      left: 15px;
    }

    &.delete {
      right: 15px;
      cursor: pointer;
    }
  }

  input {
    width: 100%;
    height: 40px;
    padding: 14px 40px;
    border-radius: 20px;
    border: none;
    background-color: #e9e9eb;
    font-size: 15px;

    &::placeholder {
      color: #c7cacc;
      font-weight: 700;
      font-size: 15px;
    }

    &:focus {
      outline: none;
    }
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
    border-bottom: 0.5px solid #ebebeb;

    color: #000;

    button {
      font-size: 12px;
    }
  }

  button {
    color: #5b5c5e;

    &.deleteAll {
      color: #8a8b8b;
      font-size: 13px;
    }
  }
`;

const SearchLink = styled(Link)`
  width: 100%;
`;

export default Search;
