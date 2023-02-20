import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TfiClose } from 'react-icons/tfi';
import { getSearchKeywords, deleteSearchKeywordsSingle, deleteSearchKeywordsAll } from '../../../common/api/Api';

const KeywordsList = () => {
  const [autoSave, setAutoSave] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getSeverData = async () => {
      try {
        const json = await getSearchKeywords();
        return json;
      } catch (err) {}
    };
    getSeverData();
  }, []);

  // const data = [
  //   {
  //     searchId: 1,
  //     searchContent: '1',
  //     createdAt: '2021-10-28T05:18:51.868Z',
  //   },
  //   {
  //     searchId: 2,
  //     searchContent: '2',
  //     createdAt: '2021-10-29T05:18:51.868Z',
  //   },
  //   {
  //     searchId: 3,
  //     searchContent: '3',
  //     createdAt: '2021-10-28T05:18:51.868Z',
  //   },
  //   {
  //     searchId: 4,
  //     searchContent: '4',
  //     createdAt: '2021-10-30T05:18:51.868Z',
  //   },
  //   {
  //     searchId: 5,
  //     searchContent: '5',
  //     createdAt: '2021-10-28T05:18:51.868Z',
  //   },
  //   {
  //     searchId: 6,
  //     searchContent: '6',
  //     createdAt: '2021-10-28T05:18:51.868Z',
  //   },
  //   {
  //     searchId: 7,
  //     searchContent: '7',
  //     createdAt: '2021-10-28T05:18:51.868Z',
  //   },
  //   {
  //     searchId: 8,
  //     searchContent: '8',
  //     createdAt: '2021-10-28T05:18:51.868Z',
  //   },
  //   {
  //     searchId: 9,
  //     searchContent: '9',
  //     createdAt: '2021-10-28T05:18:51.868Z',
  //   },
  //   {
  //     searchId: 10,
  //     searchContent: '10',
  //     createdAt: '2021-10-28T05:18:51.868Z',
  //   },
  //   {
  //     searchId: 11,
  //     searchContent: '11',
  //     createdAt: '2021-10-28T05:18:51.868Z',
  //   },
  // ];

  // 삭제
  const handleDeleteKeyword = () => {
    // 검색어 단일삭제 api 요청
  };

  const handleDeleteKeywordAll = () => {
    alert('최근 검색어를 모두 삭제하시겠습니까?');
    // 검색어 전체삭제 api 요청
    // 00개 삭제완료 토스트 띄우기
  };

  // 자동저장
  const handleAutoSave = () => {
    if (autoSave) {
      confirm('최근 검색어 저장 기능을\n사용 중지하시겠습니까?') && setAutoSave((e) => !e);
    } else {
      confirm('최근 검색어 저장 기능을\n사용 하시겠습니까?') && setAutoSave((e) => !e);
    }
  };

  return (
    <Container>
      <div>
        <h4>최근에 찾아봤던</h4>
        <button className="autoSave" onClick={handleAutoSave}>
          자동저장 {autoSave ? '끄기' : '켜기'}
        </button>
      </div>
      {autoSave ? (
        data.length !== 0 ? (
          <>
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
            <button className="deleteAll" onClick={handleDeleteKeywordAll}>
              모두 지우기
            </button>
          </>
        ) : (
          <p>최근 찾아봤던 내역이 없습니다.</p>
        )
      ) : (
        <p>검색어 저장 기능이 꺼져있습니다.</p>
      )}
    </Container>
  );
};

const Container = styled.div`
  font-size: var(--font-m);

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;

    color: var(--gray-color);
    font-size: var(--font-s);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  h4 {
    margin-bottom: 20px;
    color: var(--gray-color);
    font-size: var(--font-s);
  }

  li {
    display: flex;
    justify-content: space-between;

    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebebeb;

    color: var(--black-color);

    button {
      font-size: 12px;
    }
  }

  p {
    color: var(--black-color);
    padding: 60px 0;
    text-align: center;
    border-bottom: 0.5px solid #ebebeb;
  }
`;

const SearchLink = styled(Link)`
  width: 100%;
`;

export default KeywordsList;
