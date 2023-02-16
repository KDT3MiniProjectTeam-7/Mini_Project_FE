import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ResultsCard = () => {
  const navigate = useNavigate();
  const data = [
    {
      productId: 1234,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditBTDD41.png',
      benefits: ['전기차 충전요금 20~40% 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 5678,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditAXKD3X.png',
      benefits: ['주차앱 6천원 캐시백', '생활 가맹점 10~20% 캐시백', '주차앱 6천원 캐시백'],
      annualFee: 5000,
    },
    {
      productId: 5679,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://vertical.pstatic.net/vertical-cardad/creatives/SK/4056/SK_4056_hor.PNG',
      benefits: ['주차앱 6천원 캐시백', '생활 가맹점 10~20% 캐시백', '주차앱 6천원 캐시백'],
      annualFee: 200000,
    },
    {
      productId: 1834,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://vertical.pstatic.net/vertical-cardad/creatives/LO/10227/LO_10227_20230131-123810_ver.png',
      benefits: ['주차앱 6천 원 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천원 캐시백'],
      annualFee: 15000,
    },
    {
      productId: 9847,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.hyundaicard.com/img/com/card/028879GT_h.png',
      benefits: ['전기차 충전요금 10~40% 캐시백', '생활 가맹점 10~20% 캐시백', '주차앱 6천원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 8834,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditBTDD41.png',
      benefits: ['전기차 충전요금 20~40% 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 8831,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.hyundaicard.com/img/com/card/028879GT_h.png',
      benefits: ['전기차 충전요금 20~40% 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천원 캐시백'],
      annualFee: 18000,
    },
  ];

  const handleLi = (id: number) => {
    navigate(`/detail/card/${id}`);
  };

  return (
    <Container>
      {data.map((list) => (
        <li key={list.productId} onClick={() => handleLi(list.productId)}>
          <div>
            <Thumbnail>
              <img src={list.thumbnail} alt={`${list.productName}카드이미지`} />
            </Thumbnail>
            <Desc>
              <h3 className="benefits">{list.benefits[0]}</h3>
              <p className="productname">{list.productName}</p>
            </Desc>
          </div>
          <Fee>
            <dt>연회비</dt>
            <dd>{list.annualFee.toLocaleString()}원</dd>
          </Fee>
        </li>
      ))}
    </Container>
  );
};

const Container = styled.ol`
  padding: 30px 20px;

  li,
  li > div {
    display: flex;
    align-items: center;
    width: 100%;

    & + li {
      margin-top: 15px;
    }
  }
`;

const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  min-width: 40px;
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
    color: #5e6675;
    font-weight: 700;
    line-height: 1.4;
  }

  .productname {
    color: #6d7582;
    font-size: 12px;
  }
`;

const Fee = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100px;
  height: 70px;

  font-size: 12px;

  dd {
    order: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 5px 8px;
    margin-bottom: 5px;

    border-radius: 10px;
    background-color: #e0ebfb;

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
