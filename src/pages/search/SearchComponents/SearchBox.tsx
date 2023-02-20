import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/Bi';
import { TiDelete } from 'react-icons/ti';
import { IoChevronBackOutline } from 'react-icons/io5';
import { addSearchKeywords } from '../../../common/api/Api';

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

  useEffect(() => {
    params.keywords !== undefined ? setKeyword(params.keywords) : null;
  }, []);

  const handleBack = () => {
    navigate('/search');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    keyword !== '' ? navigate(`/search/${keyword}`) : alert('상품명을 입력해주세요.');
    addSearchKeywords(keyword);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleDeleteBtn = () => {
    setKeyword('');
  };

  return (
    <Container onSubmit={handleSubmit} className={findResultsPage ? 'results' : ''}>
      {findResultsPage ? (
        <IoChevronBackOutline size="22" color="#353D4A" onClick={handleBack} style={{ marginLeft: '-8px' }} />
      ) : null}
      <div>
        <span className="search">
          <BiSearch />
        </span>
        <input type="text" placeholder="필요한 상품을 찾아보세요" value={keyword} onChange={handleInputChange} />
        {keyword !== '' ? (
          <button type="button" className="delete" onClick={handleDeleteBtn}>
            <TiDelete />
          </button>
        ) : null}
      </div>
    </Container>
  );
};

const Container = styled.form`
  position: fixed;
  top: 56px;

  width: calc(100vw - 40px);
  max-width: 728px;
  padding: 14px 0;
  background-color: #fff;

  div {
    position: relative;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
    right: 15px;
  }

  span,
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-45%);

    font-size: 20px;
    color: var(--gray-color);

    &.search {
      left: 15px;
    }
  }

  input {
    width: 100%;
    height: var(--input-height);
    padding: 14px 40px;
    border-radius: 20px;
    border: none;
    background-color: #f2f4f6;
    font-size: var(--font-m);

    &::placeholder {
      color: #8c949f;
      font-size: var(--font-m);
    }

    &:focus {
      outline: none;
    }
  }

  &.results {
    top: 0;

    display: flex;
    align-items: center;
    gap: 10px;

    margin: 0 20px;

    div {
      width: 100%;
    }
  }
`;

export default SearchBox;
