import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ResultsSavings = () => {
  const data = [
    {
      productId: 3111,
      category: 'savings',
      productName: '청년내일저축계좌',
      companyName: '하나은행',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hana_Bank_Logo_(kor).svg/2560px-Hana_Bank_Logo_(kor).svg.png',
      basicRate: 2.0,
      primeRate: 3.0,
    },
    {
      productId: 3112,
      category: 'savings',
      productName: '스무살 우리 자유적금',
      companyName: '우리은행',
      companyImage: 'https://simg.wooribank.com/img/intro/header/h1_01.png',
      basicRate: 2.8,
      primeRate: 3.9,
    },
    {
      productId: 3113,
      category: 'savings',
      productName: '직장인우대예금',
      companyName: 'DGB대구은행',
      companyImage: 'https://ifh.cc/g/tN8fPq.png',
      basicRate: 3.66,
      primeRate: 4.21,
    },
    {
      productId: 3114,
      category: 'savings',
      productName: '직장인우대예금',
      companyName: 'DGB대구은행',
      companyImage:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdLrsWe%2FbtrGI0Sscvk%2FOWqTiEq6Q8JIVZSBHjYHcK%2Fimg.png',
      basicRate: 3.26,
      primeRate: 3.81,
    },
    {
      productId: 3115,
      category: 'savings',
      productName: 'IBK평생한가족통장',
      companyName: 'IBK기업은행',
      companyImage: 'https://blog.kakaocdn.net/dn/tUFqP/btq5QOAMjv3/pQgStk8N7muGHKPj7Ph600/img.png',
      basicRate: 3.45,
      primeRate: 3.65,
    },
  ];

  const navigate = useNavigate();
  const handleLi = (id: number) => {
    navigate(`/detail/savings/${id}`);
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
              <dd>최고 연 {list.primeRate}%</dd>
              <dd>기본 {list.basicRate}%</dd>
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

export default ResultsSavings;
