import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/store';
import { Item } from '../../../store/cartSlice';
import NoResults from '../SearchComponents/NoResults';
import { LoanSorting } from './Sorting';

const ResultsLoan = () => {
  const data = useSelector<ReducerType, Item[]>((state) => state.searchLoan);

  const navigate = useNavigate();
  const handleLi = (id: number) => {
    navigate(`/detail/loan/${id}`);
  };

  return (
    <Container>
      {data && data.length !== 0 ? (
        <>
          <LoanSorting />
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
                  최저
                  <br />연 {list.lowRate}%
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
  padding: 30px 20px;
  line-height: 1.4;
`;

const ResultsList = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
  }

  & + li {
    margin-top: 40px;
  }
`;

const CompanyImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
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
  width: 90px;
  color: #4880ee;
  font-weight: 700;
  font-size: var(--font-m);
  text-align: right;
`;

export default ResultsLoan;
