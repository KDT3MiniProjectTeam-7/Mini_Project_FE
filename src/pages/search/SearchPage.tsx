import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BiHistory } from 'react-icons/Bi';
import { IoChevronForwardOutline } from 'react-icons/io5';

import SearchBox from './SearchComponents/SearchBox';
import KeywordsList from './SearchComponents/KeywordsList';
import { getRecentProduct } from '../../common/api/Api';

interface StateProps {
  productName: string;
  productId: number;
  category: string;
}

const Search = () => {
  const [recentProduct, setRecentProduct] = useState<StateProps | undefined>();
  const [keywordAutoSave, setKeywordAutoSave] = useState(true);

  useEffect(() => {
    const getSeverRecentProductData = async () => {
      const json = await getRecentProduct();
      setRecentProduct(json.slice(-1)[0]);
    };
    getSeverRecentProductData();

    const getLocalStorageAutoSave = localStorage.getItem('auto') === 'true';
    setKeywordAutoSave(getLocalStorageAutoSave);
  }, []);

  return (
    <Container>
      <SearchBox keywordAutoSave={keywordAutoSave} />
      {recentProduct && (
        <RecentProducts>
          <h4>최근에 자세히 봤던</h4>
          <DetailLink to={`/detail/${recentProduct.category}/${recentProduct.productId}`}>
            <div>
              <span className="history">
                <BiHistory />
              </span>
              {recentProduct.productName}
            </div>
            <div className="info">
              상세정보
              <span className="move">
                <IoChevronForwardOutline />
              </span>
            </div>
          </DetailLink>
        </RecentProducts>
      )}
      <RecentKeywords>
        <KeywordsList keywordAutoSave={keywordAutoSave} setKeywordAutoSave={setKeywordAutoSave} />
      </RecentKeywords>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 140px;
  padding-bottom: 30px;
  gap: 30px;

  h4 {
    margin-bottom: 20px;
    color: var(--gray-color);
    font-size: var(--font-s);
  }
`;

const RecentProducts = styled.section``;

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
      font-size: var(--font-s);
      color: var(--main-color);
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
