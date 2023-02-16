import styled from 'styled-components';

const ResultsCard = () => {
  const data = [
    {
      productId: 1234,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditBTDD41.png',
      benefits: ['전기차 충전요금 20~40% 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천 원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 5678,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.hyundaicard.com/img/com/card/028879GT_h.png',
      benefits: ['전기차 충전요금 10~40% 캐시백', '생활 가맹점 10~20% 캐시백', '주차앱 6천 원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 5679,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.hyundaicard.com/img/com/card/028879GT_h.png',
      benefits: ['전기차 충전요금 10~40% 캐시백', '생활 가맹점 10~20% 캐시백', '주차앱 6천 원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 1834,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditBTDD41.png',
      benefits: ['전기차 충전요금 20~40% 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천 원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 9847,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.hyundaicard.com/img/com/card/028879GT_h.png',
      benefits: ['전기차 충전요금 10~40% 캐시백', '생활 가맹점 10~20% 캐시백', '주차앱 6천 원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 8834,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditBTDD41.png',
      benefits: ['전기차 충전요금 20~40% 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천 원 캐시백'],
      annualFee: 10000,
    },
  ];

  return (
    <Container>
      {data.map((list) => (
        <li key={list.productId}>
          <div>
            <img src={list.thumbnail} alt={`${list.productName}카드이미지`} className="thumbnail" />
          </div>
          <div>
            <h3 className="benefits">{list.benefits[0]}</h3>
            <p className="productname">{list.productName}</p>
          </div>
          <p className="fee">연회비 {list.annualFee}</p>
        </li>
      ))}
    </Container>
  );
};

const Container = styled.ol`
  padding: 30px 20px;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    border: 1px solid #000;

    & + li {
      margin-top: 30px;
    }

    .thumbnail {
      width: 40px;
      height: 25px;

      img {
        width: inherit;
        height: inherit;
      }
    }

    .benefits {
      color: #505866;
      font-weight: 700;
    }

    .productname {
      color: #6d7582;
      font-size: 12px;
    }

    .fee {
      color: #4880ee;
    }
  }
`;

export default ResultsCard;
