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
              <dt className="companyName">{list.companyName}</dt>
              <dd className="productname">{list.productName}</dd>
              <dd>최고 연{list.highRate}%</dd>
            </Desc>
          </div>
        </li>
      ))}
    </Container>
  );
};

const Container = styled.div``;
const CompanyImage = styled.div`
  img {
    max-width: 40px;
    max-height: 40px;
  }
`;
const Desc = styled.dl``;

export default ResultsSubscription;
