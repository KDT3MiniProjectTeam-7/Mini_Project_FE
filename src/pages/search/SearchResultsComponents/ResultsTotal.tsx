import styled from 'styled-components';

const ResultsTotal = () => {
  const data = [
    {
      productId: 1234,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'image/thumbnail/card/OOO.png',
      benefits: ['전기차 충전요금 20~40% 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천 원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 5678,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'image/thumbnail/card/OOO.png',
      benefits: ['전기차 충전요금 10~40% 캐시백', '생활 가맹점 10~20% 캐시백', '주차앱 6천 원 캐시백'],
      annualFee: 10000,
    },
  ];

  return (
    <>
      <Container>
        <Card>
          <div>
            <h3>카드</h3>
            <button className="viewAll">전체보기</button>
          </div>
          <ul>
            <li>
              <h4>상품명</h4>
              <img src="#" alt="상품명 카드이미지" />
              <p>혜택</p>
            </li>
          </ul>
        </Card>
        <Loan>
          <div>
            <h3>대출</h3>
            <button className="viewAll">전체보기</button>
          </div>
          <ul>
            <li>
              <h4>상품명</h4>
              <img src="#" alt="상품명 은행로고 이미지" />
              <p>최저 4.75%</p>
            </li>
          </ul>
        </Loan>
        <Savings>
          <div>
            <h3>예적금</h3>
            <button className="viewAll">전체보기</button>
          </div>
          <ul>
            <li>
              <h4>상품명</h4>
              <img src="#" alt="상품명 은행로고 이미지" />
              <p>기본 4.75%</p>
              <p>최고 4.75%</p>
            </li>
          </ul>
        </Savings>
        <Subcription>
          <div>
            <h3>청약</h3>
            <button className="viewAll">전체보기</button>
          </div>
          <ul>
            <li>
              <h4>상품명</h4>
              <strong>은행명</strong>
              <img src="#" alt="상품명 은행로고 이미지" />
              <p>최저 4.75%</p>
            </li>
          </ul>
        </Subcription>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;

  button {
    background-color: transparent;
    border: none;
  }

  section {
    padding: 0 5px;
    border-bottom: 20px solid #f2f4f6;

    h3 {
      margin-top: 40px;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
const Card = styled.section``;
const Loan = styled.section``;
const Savings = styled.section``;
const Subcription = styled.section``;

export default ResultsTotal;
