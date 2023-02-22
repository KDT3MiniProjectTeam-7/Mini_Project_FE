import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TfiClose } from 'react-icons/tfi';
import Toast from '../../../components/Toast';
import { getSearchKeywords, deleteSearchKeywordsSingle, deleteSearchKeywordsAll } from '../../../common/api/Api';

type Props = {
  keywordAutoSave: boolean;
  setKeywordAutoSave: (el: boolean) => void;
};

interface StateObject {
  searchId: number;
  searchContent: string;
  createdAt: string;
}

export interface StateArray extends Array<StateObject> {}

const KeywordsList = ({ keywordAutoSave, setKeywordAutoSave }: Props) => {
  const [data, setData] = useState<StateArray>([]);
  const [toast, setToast] = useState({ isTrue: false, count: 0 });

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
      res.status === 'success' && setToast({ isTrue: true, count: res.deletedNum });
    }
  };

  // 자동저장
  const handleAutoSave = () => {
    const btnOff = () => {
      localStorage.setItem('auto', 'false');
      setKeywordAutoSave(false);
    };

    const btnOn = () => {
      localStorage.setItem('auto', 'true');
      setKeywordAutoSave(true);
    };

    if (keywordAutoSave) {
      confirm('최근 검색어 저장 기능을\n사용 중지하시겠습니까?') && btnOff();
    } else {
      confirm('최근 검색어 저장 기능을\n사용 하시겠습니까?') && btnOn();
    }
  };

  return (
    <Container>
      <div>
        <h4>최근에 찾아봤던</h4>
        <button className="autoSave" onClick={handleAutoSave}>
          자동저장 {keywordAutoSave ? '끄기' : '켜기'}
        </button>
      </div>
      {keywordAutoSave ? (
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
      <Toast toast={toast} message={`${toast.count}개가 삭제됐어요`} />
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
`;

const List = styled.li`
  display: flex;
  justify-content: space-between;

  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebebeb;

  color: var(--black-color);

  button {
    font-size: 12px;
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
