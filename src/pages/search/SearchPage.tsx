import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiHistory } from 'react-icons/Bi';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { TfiClose } from 'react-icons/tfi';
import SearchBox from './SearchComponents/SearchBox';

const Search = () => {
  const data = [
    {
      searchId: 1,
      searchContent: '1',
      createdAt: '2021-10-28T05:18:51.868Z',
    },
    {
      searchId: 2,
      searchContent: '2',
      createdAt: '2021-10-29T05:18:51.868Z',
    },
    {
      searchId: 3,
      searchContent: '3',
      createdAt: '2021-10-28T05:18:51.868Z',
    },
    {
      searchId: 4,
      searchContent: '4',
      createdAt: '2021-10-30T05:18:51.868Z',
    },
    {
      searchId: 5,
      searchContent: '5',
      createdAt: '2021-10-28T05:18:51.868Z',
    },
    {
      searchId: 6,
      searchContent: '6',
      createdAt: '2021-10-28T05:18:51.868Z',
    },
    {
      searchId: 7,
      searchContent: '7',
      createdAt: '2021-10-28T05:18:51.868Z',
    },
    {
      searchId: 8,
      searchContent: '8',
      createdAt: '2021-10-28T05:18:51.868Z',
    },
    {
      searchId: 9,
      searchContent: '9',
      createdAt: '2021-10-28T05:18:51.868Z',
    },
    {
      searchId: 10,
      searchContent: '10',
      createdAt: '2021-10-28T05:18:51.868Z',
    },
    {
      searchId: 11,
      searchContent: '11',
      createdAt: '2021-10-28T05:18:51.868Z',
    },
  ];

  const [savedKeyword, setSavedKeyword] = useState([]);
  const [autoSave, setAutoSave] = useState(true);

  // 삭제
  const handleDeleteKeyword = () => {
    // 검색어 단일삭제 api 요청
  };

  const handleDeleteKeywordAll = () => {
    alert('최근 검색어를 모두 삭제하시겠습니까?');
    // 검색어 전체삭제 api 요청
    // 00개 삭제완료 토스트 띄우기
  };

  //

  // 자동저장
  // const handleAutoSave = () => {
  //   if (autoSave) {
  //     if (alert('최근 검색어 저장 기능을\n사용 중지하시겠습니까?')) {
  //       setAutoSave((e) => !e);
  //     }
  //   } else {
  //     if (alert('최근 검색어 저장 기능을\n사용하시겠습니까?')) {
  //       setAutoSave((e) => !e);
  //     }
  //   }
  // };
  console.log(autoSave);

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
        {autoSave ? (
          data.length !== 0 ? (
            <>
              <div>
                <h4>최근에 찾아봤던</h4>
                <button className="deleteAll" onClick={handleDeleteKeywordAll}>
                  모두 지우기
                </button>
              </div>
              <ol>
                {data
                  .sort((a, b) => {
                    return +new Date(b.createdAt) - +new Date(a.createdAt);
                  })
                  .map((list) => (
                    <li key={list.searchId}>
                      <SearchLink to={`/search/${list.searchContent}`}>{list.searchContent}</SearchLink>
                      <button onClick={handleDeleteKeyword}>
                        <TfiClose />
                      </button>
                    </li>
                  ))}
              </ol>
            </>
          ) : (
            <p>최근 찾아봤던 내역이 없습니다.</p>
          )
        ) : (
          <p>검색어 저장 기능이 꺼져있습니다.</p>
        )}

        <button className="autoSave">자동저장 {autoSave ? '끄기' : '켜기'}</button>
      </RecentKeywords>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  div {
    display: flex;
    justify-content: space-between;
  }

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
