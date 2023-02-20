import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NoResults from '../SearchComponents/NoResults';
import { ProductSorting } from './Sorting';

const ResultsSubscription = () => {
  const location = useLocation();
  const data = [
    {
      productId: 4111,
      category: 'subscription',
      productName: '청년 우대형 주택청약종합저축',
      companyName: '우리은행',
      companyImage: 'https://simg.wooribank.com/img/intro/header/h1_01.png',
      highRate: 2.1,
    },
    {
      productId: 4112,
      category: 'subscription',
      productName: '주택청약종합저축',
      companyName: '신한은행',
      companyImage: 'https://simg.wooribank.com/img/intro/header/h1_01.png',
      highRate: 3.6,
    },
  ];

  const navigate = useNavigate();
  const handleLi = (id: number) => {
    navigate(`/detail/subscription/${id}`);
  };

  return (
    <Container>
      {data.length !== 0 ? (
        <>
          <ProductSorting />
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
  padding: 30px 20px;
  line-height: 1.4;
`;

const ResultsList = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > div {
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
    font-weight: 700;
  }

  .companyName {
    order: 2;
    color: var(--gray-color);
    font-size: var(--font-s);
    font-weight: 500;
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
