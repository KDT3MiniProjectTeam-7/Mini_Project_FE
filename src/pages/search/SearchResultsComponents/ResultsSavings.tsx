import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NoResults from '../SearchComponents/NoResults';
import { ProductSorting } from './Sorting';

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
                  <strong className="prime">최고 연 {list.primeRate}%</strong>
                  <span className="basic">기본 {list.basicRate}%</span>
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

const Rate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: right;
  width: 120px;

  .prime {
    color: #4880ee;
    font-weight: 700;
    font-size: 14px;
    text-align: right;
  }

  .basic {
    color: #676f7b;
    font-size: 10.5px;
  }
`;

export default ResultsSavings;
