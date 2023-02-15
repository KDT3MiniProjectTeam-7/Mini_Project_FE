import styled from 'styled-components';

const ResultsTotal = () => {
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
  gap: 50px;

  margin-top: 20px;

  button {
    background-color: transparent;
    border: none;
  }

  section {
    h3 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
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
