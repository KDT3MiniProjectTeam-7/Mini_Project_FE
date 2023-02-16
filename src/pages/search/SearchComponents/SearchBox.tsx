import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/Bi';
import { TiDeleteOutline } from 'react-icons/ti';

const SearchBox = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  // 검색어 조회 api
  // 기존 검색어에 없으면 추가
  // 기존 검색어에 있으면 검색어 수정

  // 자동완성 기능

  const findResultsPage = location.pathname.slice(0, 8) === '/search/';
  console.log(findResultsPage);

  useEffect(() => {
    params.keywords !== undefined ? setKeyword(params.keywords) : null;
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    keyword !== '' ? navigate(`/search/${keyword}`) : alert('상품명을 입력해주세요.');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleDeleteBtn = () => {
    setKeyword('');
  };

  return (
    <>
      <Container onSubmit={handleSubmit} className={findResultsPage ? 'resultsMargin' : ''}>
        <span className="search">
          <BiSearch />
        </span>
        <input type="text" placeholder="필요한 상품을 찾아보세요" value={keyword} onChange={handleInputChange} />
        <button type="button" className="delete" onClick={handleDeleteBtn}>
          <TiDeleteOutline />
        </button>
      </Container>
    </>
  );
};

const Container = styled.form`
  position: fixed;
  top: 56px;

  width: calc(100vw - 40px);
  max-width: 728px;
  padding: 14px 0;
  background-color: #fff;

  &.resultsMargin {
    margin: 0 20px;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
  }

  span,
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-45%);

    font-size: 20px;
    color: #5b5c5e;

    &.search {
      left: 15px;
    }
  }

  button {
    right: 15px;
    cursor: pointer;
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

export default SearchBox;
