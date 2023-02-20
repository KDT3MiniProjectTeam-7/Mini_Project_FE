import styled from 'styled-components';

const ResultsTotal = () => {
  const cardData = [
    {
      productId: 1111,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditBTDD41.png',
      benefits: ['전기차 충전요금 20~40% 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천 원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 1112,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditAXKD3X.png',
      benefits: ['주차앱 6천 원 캐시백', '생활 가맹점 10~20% 캐시백', '주차앱 6천 원 캐시백'],
      annualFee: 5000,
    },
    {
      productId: 1113,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://vertical.pstatic.net/vertical-cardad/creatives/SK/4056/SK_4056_hor.PNG',
      benefits: ['주차앱 6천 원 캐시백', '생활 가맹점 10~20% 캐시백', '주차앱 6천 원 캐시백'],
      annualFee: 200000,
    },
    {
      productId: 1114,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://vertical.pstatic.net/vertical-cardad/creatives/LO/10227/LO_10227_20230131-123810_ver.png',
      benefits: ['주차앱 6천 원 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천 원 캐시백'],
      annualFee: 15000,
    },
    {
      productId: 1115,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.hyundaicard.com/img/com/card/028879GT_h.png',
      benefits: ['전기차 충전요금 10~40% 캐시백', '생활 가맹점 10~20% 캐시백', '주차앱 6천 원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 1116,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditBTDD41.png',
      benefits: ['전기차 충전요금 20~40% 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천 원 캐시백'],
      annualFee: 10000,
    },
  ];

  const loanData = [
    {
      productId: 2111,
      category: 'loan',
      productName: '신용대출',
      companyName: '케이뱅크',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png',
      lowRate: 6.44,
      highRate: 10.49,
      bound: '최대 2억원',
    },
    {
      productId: 2112,
      category: 'loan',
      productName: '모바일 프라임론 직장인 대출',
      companyName: '광주은행',
      companyImage:
        'https://mblogthumb-phinf.pstatic.net/MjAyMTAxMjRfMTg2/MDAxNjExNDcyNDQwNjMz.c4nA0jGYMPxo1ZkOCb9DxtC_pMoZJWo14c_VsdXbeuIg.3XJxeZziXV4TUIowr4dAJBJMY0xmVTIchgzH56o_C3sg.PNG.yeosu_bada/%EA%B4%91%EC%A3%BC%EC%9D%80%ED%96%89_%EB%A1%9C%EA%B3%A0_PNG_AI_%EC%9B%90%EB%B3%B8_%EB%8B%A4%EC%9A%B4.png?type=w800',
      lowRate: 6.91,
      highRate: 12.71,
      bound: '1백만 원 ~ 1억 5천만 원',
    },
    {
      productId: 2113,
      category: 'loan',
      productName: '사장님대출',
      companyName: '토스뱅크',
      companyImage: 'https://ifh.cc/v-joRq1Q',
      lowRate: 5.99,
      highRate: 15,
      bound: '1백만원 ~ 1억원',
    },
    {
      productId: 2114,
      category: 'loan',
      productName: 'KB국민 개인사업자대출',
      companyName: 'KB국민카드',
      companyImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/KB_logo.svg/2560px-KB_logo.svg.png',
      lowRate: 7.4,
      highRate: 19.9,
      bound: '1백만원 ~ 2.5억원',
    },
    {
      productId: 2115,
      category: 'loan',
      productName: '신용대출플러스',
      companyName: '케이뱅크',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png',
      lowRate: 7.35,
      highRate: 10.86,
      bound: '최대 1억 5천원',
    },
    {
      productId: 2115,
      category: 'loan',
      productName: '신용대출플러스',
      companyName: '케이뱅크',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png',
      lowRate: 7.35,
      highRate: 10.86,
      bound: '최대 1억 5천원',
    },
  ];

  const savingsData = [
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
  const subscriptionData = [
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

  const title = ['카드', '대출', '예적금', '청약'];

  return (
    <Container>
      {title.map((list) => (
        <>
          <h3>{list}</h3>
          <Desc>
            {list === '카드'
              ? cardData.slice(0, 5).map((data) => (
                  <Product>
                    <h4>{data.benefits}</h4>
                    <Image>
                      <img src={data.thumbnail} alt={`${data.productName}카드이미지`} />
                    </Image>
                    <p>{data.productName}</p>
                  </Product>
                ))
              : ''}
            {list === '대출'
              ? loanData.slice(0, 5).map((data) => (
                  <Product>
                    <h4>{data.productName}</h4>
                    <Image>
                      <img src={data.companyImage} alt={`${data.companyName} 로고`} />
                    </Image>
                    <p>{data.companyName}</p>
                    <strong>{data.lowRate}</strong>
                  </Product>
                ))
              : ''}
            {list === '예적금'
              ? savingsData.slice(0, 5).map((data) => (
                  <Product>
                    <h4>{data.productName}</h4>
                    <Image>
                      <img src={data.companyImage} alt={`${data.companyName} 로고`} />
                    </Image>
                    <p>{data.companyName}</p>
                    <strong>{data.primeRate}</strong>
                  </Product>
                ))
              : ''}
            {list === '청약'
              ? subscriptionData.slice(0, 5).map((data) => (
                  <Product>
                    <h4>{data.productName}</h4>
                    <Image>
                      <img src={data.companyImage} alt={`${data.companyName} 로고`} />
                    </Image>
                    <p>{data.companyName}</p>
                    <strong>{data.highRate}</strong>
                  </Product>
                ))
              : ''}
            <button>더보기</button>
          </Desc>
        </>
      ))}
    </Container>
  );
};
const Container = styled.div`
  h3 {
    margin-bottom: 20px;
    padding: 20px 20px 0;
    font-size: var(--font-l);
  }
`;

const Desc = styled.section`
  border-bottom: 20px solid var(--lightgray-color);

  button {
    border: none;
    background-color: transparent;

    width: 100%;
    height: 40px;
    margin-top: 20px;
    border-top: 1px solid #ebebeb;
    color: var(--main-color);
    text-align: center;
  }
`;
const Product = styled.div`
  padding: 0 20px;
`;

const Image = styled.div`
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

export default ResultsTotal;
