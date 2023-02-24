import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/store';
import { Item } from '../../../store/cartSlice';
import NoResults from '../SearchComponents/NoResults';
import { CardSorting } from './Sorting';

const ResultsCard = () => {
  const [data, setData] = useState<Item[]>([]);
  const [active, setActive] = useState('fee');
  const storeData = useSelector<ReducerType, Item[]>((state) => state.searchCard);
  const newData = storeData?.slice();

  // 정렬
  useEffect(() => {
    if (newData) {
      if (active === 'fee') {
        const sortedFee = newData.sort((a: any, b: any) => a.annualFee - b.annualFee);
        setData(sortedFee);
      } else if (active === 'name') {
        const sortedName = newData?.sort((a: any, b: any) => a.productName - b.productName);
        setData(sortedName);
      }
    }
  }, [active, storeData]);

  // 상세보기 이동
  const navigate = useNavigate();
  const handleLi = (id: number) => {
    navigate(`/detail/card/${id}`);
  };

  return (
    <Container>
      {data && data.length !== 0 ? (
        <>
          <CardSorting active={active} setActive={setActive} />
          <div>
            {data.map((list) => (
              <>
                <ResultsList key={list.productId} onClick={() => handleLi(list.productId)}>
                  <div>
                    <Thumbnail>
                      <img src={list.thumbnail} alt={`${list.productName}카드이미지`} />
                    </Thumbnail>
                    <Desc>
                      <h3 className="benefits">{list.benefits && list.benefits[0]}</h3>
                      <p className="productname">{list.productName}</p>
                    </Desc>
                  </div>
                  <Fee>
                    <dt>연회비</dt>
                    <dd>{list.annualFee && list.annualFee.toLocaleString()}원</dd>
                  </Fee>
                </ResultsList>
              </>
            ))}
          </div>
        </>
      ) : (
        <NoResults />
      )}
    </Container>
  );
};

const Container = styled.ol`
  padding: 30px 0;

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
    align-items: center;
    width: 100%;
  }

  & + li {
    margin-top: 10px;
  }
`;

const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0px;
  min-width: 50px;
  height: 40px;
  margin-right: 20px;

  img {
    max-width: 40px;
    max-height: 40px;
  }
`;

const Desc = styled.div`
  margin-right: 20px;

  .benefits {
    margin-bottom: 5px;
    color: var(--black-color);
    font-size: var(--font-m);
    font-weight: 500;
    line-height: 1.4;
  }

  .productname {
    color: var(--gray-color);
    font-size: var(--font-s);
  }
`;

const Fee = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100px;

  font-size: var(--font-xs);

  dd {
    order: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 5px 8px;
    margin-bottom: 5px;

    border-radius: 10px;
    background-color: var(--lightblue-color);

    color: #3f6cd4;

    font-weight: 700;
    text-align: center;
    word-break: nowrap;
  }

  dt {
    order: 2;
    padding-right: 7px;
    color: #6d7582;
  }
`;

export default ResultsCard;
