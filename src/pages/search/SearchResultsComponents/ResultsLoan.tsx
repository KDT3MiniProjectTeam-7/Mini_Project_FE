import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NoResults from '../SearchComponents/NoResults';

const ResultsLoan = () => {
  const navigate = useNavigate();
  const data = [
    // {
    //   productId: 2111,
    //   category: 'loan',
    //   productName: '신용대출',
    //   companyName: '케이뱅크',
    //   companyImage:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png',
    //   lowRate: 6.44,
    //   highRate: 10.49,
    //   bound: '최대 2억원',
    // },
    // {
    //   productId: 2112,
    //   category: 'loan',
    //   productName: '모바일 프라임론 직장인 대출',
    //   companyName: '광주은행',
    //   companyImage:
    //     'https://mblogthumb-phinf.pstatic.net/MjAyMTAxMjRfMTg2/MDAxNjExNDcyNDQwNjMz.c4nA0jGYMPxo1ZkOCb9DxtC_pMoZJWo14c_VsdXbeuIg.3XJxeZziXV4TUIowr4dAJBJMY0xmVTIchgzH56o_C3sg.PNG.yeosu_bada/%EA%B4%91%EC%A3%BC%EC%9D%80%ED%96%89_%EB%A1%9C%EA%B3%A0_PNG_AI_%EC%9B%90%EB%B3%B8_%EB%8B%A4%EC%9A%B4.png?type=w800',
    //   lowRate: 6.91,
    //   highRate: 12.71,
    //   bound: '1백만 원 ~ 1억 5천만 원',
    // },
    // {
    //   productId: 2113,
    //   category: 'loan',
    //   productName: '사장님대출',
    //   companyName: '토스뱅크',
    //   companyImage: 'https://static.toss.im/logos/png/4x/logo-bank.png',
    //   lowRate: 5.99,
    //   highRate: 15,
    //   bound: '1백만원 ~ 1억원',
    // },
    // {
    //   productId: 2114,
    //   category: 'loan',
    //   productName: '개인사업자대출',
    //   companyName: 'KB국민카드',
    //   companyImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/KB_logo.svg/2560px-KB_logo.svg.png',
    //   lowRate: 7.4,
    //   highRate: 19.9,
    //   bound: '1백만원 ~ 2.5억원',
    // },
    // {
    //   productId: 2115,
    //   category: 'loan',
    //   productName: '신용대출플러스',
    //   companyName: '케이뱅크',
    //   companyImage:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png',
    //   lowRate: 7.35,
    //   highRate: 10.86,
    //   bound: '최대 1억 5천원',
    // },
    // {
    //   productId: 2116,
    //   category: 'loan',
    //   productName: '신용대출',
    //   companyName: '케이뱅크',
    //   companyImage:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png',
    //   lowRate: 6.44,
    //   highRate: 10.49,
    //   bound: '최대 2억원',
    // },
    // {
    //   productId: 2117,
    //   category: 'loan',
    //   productName: '모바일 프라임론 직장인 대출',
    //   companyName: '광주은행',
    //   companyImage:
    //     'https://mblogthumb-phinf.pstatic.net/MjAyMTAxMjRfMTg2/MDAxNjExNDcyNDQwNjMz.c4nA0jGYMPxo1ZkOCb9DxtC_pMoZJWo14c_VsdXbeuIg.3XJxeZziXV4TUIowr4dAJBJMY0xmVTIchgzH56o_C3sg.PNG.yeosu_bada/%EA%B4%91%EC%A3%BC%EC%9D%80%ED%96%89_%EB%A1%9C%EA%B3%A0_PNG_AI_%EC%9B%90%EB%B3%B8_%EB%8B%A4%EC%9A%B4.png?type=w800',
    //   lowRate: 6.91,
    //   highRate: 12.71,
    //   bound: '1백만 원 ~ 1억 5천만 원',
    // },
    // {
    //   productId: 2118,
    //   category: 'loan',
    //   productName: '사장님대출',
    //   companyName: '토스뱅크',
    //   companyImage: 'https://static.toss.im/logos/png/4x/logo-bank.png',
    //   lowRate: 5.99,
    //   highRate: 15,
    //   bound: '1백만원 ~ 1억원',
    // },
    // {
    //   productId: 2119,
    //   category: 'loan',
    //   productName: '개인사업자대출',
    //   companyName: 'KB국민카드',
    //   companyImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/KB_logo.svg/2560px-KB_logo.svg.png',
    //   lowRate: 7.4,
    //   highRate: 19.9,
    //   bound: '1백만원 ~ 2.5억원',
    // },
    // {
    //   productId: 21110,
    //   category: 'loan',
    //   productName: '신용대출플러스',
    //   companyName: '케이뱅크',
    //   companyImage:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png',
    //   lowRate: 7.35,
    //   highRate: 10.86,
    //   bound: '최대 1억 5천원',
    // },
  ];

  const handleLi = (id: number) => {
    navigate(`/detail/loan/${id}`);
  };

  return (
    <Container>
      {data.length !== 0 ? (
        data.map((list) => (
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
            <Rate>최저 연 {list.lowRate}%</Rate>
          </li>
        ))
      ) : (
        <NoResults />
      )}
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
  width: 120px;
  color: #4880ee;
  font-weight: 700;
  font-size: 14px;
  text-align: right;
`;

export default ResultsLoan;
