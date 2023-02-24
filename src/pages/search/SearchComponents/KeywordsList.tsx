import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { TfiClose } from 'react-icons/tfi';
import Toast from '../../../components/Toast';
import { getSearchKeywords, deleteSearchKeywordsSingle, deleteSearchKeywordsAll } from '../../../common/api/Api';

import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../../store/autosaveSlice';
import { ReducerType } from '../../../store/store';

interface StateObject {
  searchId: number;
  searchContent: string;
  createdAt: string;
}

export interface StateArray extends Array<StateObject> {}

const KeywordsList = () => {
  // 리덕스 자동저장 state
  const dispatch = useDispatch();
  const toggleAutosaveHandler = () => {
    dispatch(toggle());
  };
  const isToggleTrue = useSelector<ReducerType>((state) => state.autosave.isToggleTrue);

  const [data, setData] = useState<StateArray>([]);
  const [toast, setToast] = useState(false);
  const [deletedCount, setDeletedCount] = useState('');

  useEffect(() => {
    const getSeverSearchKeywordsData = async () => {
      const json = await getSearchKeywords();
      setData(json);
    };
    getSeverSearchKeywordsData();
  }, []);

  // 삭제
  const handleDeleteKeyword = (id: number) => {
    const deletedData = data.filter((element) => element.searchId !== id);
    setData(deletedData);
    deleteSearchKeywordsSingle(id);
  };

  const handleDeleteKeywordAll = async () => {
    if (confirm('최근 검색어를 모두 삭제하시겠습니까?')) {
      setData([]);
      const res = await deleteSearchKeywordsAll();

      // 00개 삭제 완료 토스트 띄우기
      res.status === 'success' && setToast(true);
      setDeletedCount(res.deletedNum);
    }
  };

  // 자동저장
  const handleAutoSave = () => {
    if (isToggleTrue) {
      confirm('최근 검색어 저장 기능을\n사용 중지하시겠습니까?') && toggleAutosaveHandler();
    } else {
      confirm('최근 검색어 저장 기능을\n사용 하시겠습니까?') && toggleAutosaveHandler();
    }
  };

  // 검색결과에서만 padding 값
  const location = useLocation();
  const findResultsPage = location.pathname.slice(0, 8) === '/search/';

  return (
    <Container className={findResultsPage ? 'resultPage' : ''}>
      <div>
        <h4>최근에 찾아봤던</h4>
        <button className="autoSave" onClick={handleAutoSave}>
          자동저장 {isToggleTrue ? '끄기' : '켜기'}
        </button>
      </div>
      {isToggleTrue ? (
        data && data.length !== 0 ? (
          <>
            <ol>
              {data
                .sort((a, b) => {
                  return +new Date(b.createdAt) - +new Date(a.createdAt);
                })
                .map((list) => (
                  <List key={list.searchId}>
                    <SearchLink to={`/search/${list.searchContent}`}>{list.searchContent}</SearchLink>
                    <button onClick={() => handleDeleteKeyword(list.searchId)}>
                      <TfiClose />
                    </button>
                  </List>
                ))}
            </ol>
            <button className="deleteAll" onClick={handleDeleteKeywordAll}>
              모두 지우기
            </button>
          </>
        ) : (
          <Info>최근 찾아봤던 내역이 없습니다.</Info>
        )
      ) : (
        <Info>검색어 저장 기능이 꺼져있습니다.</Info>
      )}
      <Toast isTrue={toast} message={`${deletedCount}개가 삭제됐어요`} />
    </Container>
  );
};

const Container = styled.div`
  font-size: var(--font-m);

  &.resultPage {
    padding: 0 20px;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;

    color: var(--gray-color);
    font-size: var(--font-s);
    transition: all 0.3s ease-in-out;

    &:active {
      opacity: 0.7;
    }
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
`;

const List = styled.li`
  display: flex;
  justify-content: space-between;

  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebebeb;

  color: var(--black-color);
  transition: all 0.2s ease-in-out;

  button {
    font-size: 12px;
  }

  &:active {
    opacity: 0.7;
  }
`;

const Info = styled.p`
  color: var(--black-color);
  padding: 60px 0;
  text-align: center;
  border-bottom: 0.5px solid #ebebeb;
`;

const SearchLink = styled(Link)`
  width: 100%;
`;

export default KeywordsList;
