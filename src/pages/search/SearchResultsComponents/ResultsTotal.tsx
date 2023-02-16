import styled from 'styled-components';

const ResultsTotal = () => {
  return (
    <Container>
      <Card>
        <h3>대출</h3>
        <ul>
          <li>
            <h4>상품명</h4>
            <img src="#" alt="상품명 은행로고 이미지" />
            <p>최저 4.75%</p>
          </li>
        </ul>
        <button className="viewAll">더보기</button>
      </Card>
      <Loan>
        <h3>대출</h3>
        <ul>
          <li>
            <h4>상품명</h4>
            <img src="#" alt="상품명 은행로고 이미지" />
            <p>최저 4.75%</p>
          </li>
        </ul>
        <button className="viewAll">더보기</button>
      </Loan>
      <Savings>
        <h3>대출</h3>
        <ul>
          <li>
            <h4>상품명</h4>
            <img src="#" alt="상품명 은행로고 이미지" />
            <p>최저 4.75%</p>
          </li>
        </ul>
        <button className="viewAll">더보기</button>
      </Savings>
      <Subcription>
        <h3>대출</h3>
        <ul>
          <li>
            <h4>상품명</h4>
            <img src="#" alt="상품명 은행로고 이미지" />
            <p>최저 4.75%</p>
          </li>
        </ul>
        <button className="viewAll">더보기</button>
      </Subcription>
    </Container>
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
    padding: 0 20px;
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
