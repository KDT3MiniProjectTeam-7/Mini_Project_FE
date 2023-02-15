import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiSearch, BiHistory } from 'react-icons/Bi';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { TiDeleteOutline } from 'react-icons/ti';
import { TfiClose } from 'react-icons/tfi';

const Search = () => {
  return (
    <>
      <Container>
        <SearchBox>
          <span className="search">
            <BiSearch />
          </span>
          <input type="text" placeholder="필요한 상품을 찾아보세요" />
          <span className="delete">
            <TiDeleteOutline />
          </span>
        </SearchBox>
        <RecentProducts>
          <h4>최근에 자세히 봤던</h4>
          <DetailLink to={`/items/:category/:productId`}>
            <BiHistory />
            <span>상품명</span>
            상품상세정보
            <IoChevronForwardOutline />
          </DetailLink>
        </RecentProducts>
        <RecentKeywords>
          <h4>내가 찾아봤던</h4>
          <ol>
            <li>
              <SearchLink to={`/search/검색어1`}>검색어1</SearchLink>
              <button>
                <TfiClose />
              </button>
            </li>
            <li>
              <SearchLink to={`/search/검색어1`}>검색어2</SearchLink>
              <button>
                <TfiClose />
              </button>
            </li>
            <li>
              <SearchLink to={`/search/검색어1`}>검색어3</SearchLink>
              <button>
                <TfiClose />
              </button>
            </li>
            <li>
              <SearchLink to={`/search/검색어1`}>검색어4</SearchLink>
              <button>
                <TfiClose />
              </button>
            </li>
            <li>
              <SearchLink to={`/search/검색어1`}>검색어5</SearchLink>
              <button>
                <TfiClose />
              </button>
            </li>
          </ol>
          <button>전체삭제</button>
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
    color: #b6babd;
    font-size: 14px;
    font-weight: 700;
  }
`;
const SearchBox = styled.div`
  position: relative;
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
    font-size: 14px;

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
  width: 100%;

  li {
    display: flex;
  }
`;

const DetailLink = styled(Link)``;

const RecentKeywords = styled.section`
  li {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 40px;
    border-radius: 20px;
    border-bottom: #ececec;

    color: #000;

    button {
      font-size: 15px;
    }
  }

  button {
    color: #5b5c5e;
  }
`;

const SearchLink = styled(Link)``;
export default Search;
