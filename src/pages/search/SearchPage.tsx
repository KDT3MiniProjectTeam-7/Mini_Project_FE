import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BiHistory } from 'react-icons/bi';
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
  // 최근 본 상품
  const [recentProduct, setRecentProduct] = useState<StateProps | undefined>();

  useEffect(() => {
    const getSeverRecentProductData = async () => {
      const json = await getRecentProduct();
      setRecentProduct(json.slice(-1)[0]);
    };
    getSeverRecentProductData();
  }, []);

  return (
    <Container>
      <SearchBox />
      {recentProduct && (
        <RecentProducts>
          <h4>최근에 자세히 봤던</h4>
          <DetailLink to={`/detail/${recentProduct.category.toLowerCase()}/${recentProduct.productId}`}>
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
        <KeywordsList />
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

const RecentProducts = styled.section`
  div {
    transition: all 0.3s ease-in-out;
    &:active {
      opacity: 0.7;
    }
  }
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
