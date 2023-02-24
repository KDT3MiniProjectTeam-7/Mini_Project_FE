import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/store';
import { Item } from '../../../store/cartSlice';
import NoResults from '../SearchComponents/NoResults';
import { ProductSorting } from './Sorting';

const ResultsSubscription = () => {
  const [data, setData] = useState<Item[]>([]);
  const [active, setActive] = useState('highRate');
  const storeData = useSelector<ReducerType, Item[]>((state) => state.searchSubscription);
  const newData = storeData?.slice();

  // 정렬
  useEffect(() => {
    if (newData) {
      if (active === 'highRate') {
        const sortedHighRate = newData.sort((a: any, b: any) => b.highRate - a.highRate);
        setData(sortedHighRate);
      } else if (active === 'name') {
        const sortedName = newData?.sort((a: any, b: any) => a.productName - b.productName);
        setData(sortedName);
      }
    }
  }, [active, storeData]);

  // 상세보기로 이동
  const navigate = useNavigate();
  const handleLi = (id: number) => {
    navigate(`/detail/subscription/${id}`);
  };

  return (
    <Container>
      {data && data.length !== 0 ? (
        <>
          <ProductSorting active={active} setActive={setActive} />
          <div>
            {data.map((list) => (
              <ResultsList key={list.productId} onClick={() => handleLi(list.productId)}>
                <div>
                  <CompanyImage>
                    <img src={list.companyImage} alt={`${list.companyName} 로고`} />
                  </CompanyImage>
                  <Desc>
                    <h3 className="companyName">{list.companyName}</h3>
                    <p className="productname">{list.productName}</p>
                  </Desc>
                </div>
                <Rate>
                  최고
                  <br />연 {list.highRate}%
                </Rate>
              </ResultsList>
            ))}
          </div>
        </>
      ) : (
        <NoResults />
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 0;
  line-height: 1.4;

  & > li:active {
    scale: 0.98;
    background-color: var(--lightgray-color);
  }
`;

const ResultsList = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 13px 20px;
  transition: all 0.3s ease-in-out;

  & > div {
    display: flex;
  }

  & + li {
    margin-top: 10px;
  }
`;

const CompanyImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  min-width: 50px;
  height: 40px;
  margin-right: 20px;

  img {
    max-width: 50px;
    max-height: 40px;
  }
`;

const Desc = styled.dl`
  display: flex;
  flex-direction: column;

  margin-right: 20px;

  .productname {
    order: 1;
    margin-bottom: 5px;
    color: var(--black-color);
    font-size: var(--font-m);
    font-weight: 500;
  }

  .companyName {
    order: 2;
    color: var(--gray-color);
    font-size: var(--font-s);
  }
`;

const Rate = styled.strong`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: right;
  width: 90px;

  color: #4880ee;
  font-weight: 700;
  font-size: var(--font-m);
  text-align: right;
`;

export default ResultsSubscription;
