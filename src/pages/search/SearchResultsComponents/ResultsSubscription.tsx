import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ResultsSubscription = () => {
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
      {data.map((list) => (
        <li key={list.productId} onClick={() => handleLi(list.productId)}>
          <div>
            <CompanyImage>
              <img src={list.companyImage} alt={`${list.companyName} 로고`} />
            </CompanyImage>
            <Desc>
              <h3 className="companyName">{list.companyName}</h3>
              <p className="productname">{list.productName}</p>
            </Desc>
          </div>
          <Rate>최고 연 {list.highRate}%</Rate>
        </li>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 20px;

  li {
    display: flex;
    justify-content: space-between;
    width: 100%;

    > div {
      display: flex;
    }

    & + li {
      margin-top: 40px;
    }
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
    color: #5e6675;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
  }

  .companyName {
    order: 2;
    color: #676f7b;
    font-size: 10.5px;
    font-weight: 500;
  }
`;

const Rate = styled.strong`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: right;
  width: 120px;

  color: #4880ee;
  font-weight: 700;
  font-size: 14px;
  text-align: right;
`;

export default ResultsSubscription;
