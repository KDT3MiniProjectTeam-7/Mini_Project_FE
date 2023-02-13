import styled from 'styled-components';
import { Container } from '../intro/Intro';

const MyPage = () => {
  const user = {
    name: '김효진',
    favorite: ['쇼핑', '여행', '대중교통'],
  };
  return (
    <main>
      <Container>
        <User>
          <div className="name">{user.name} 님</div>
          <Button className="change">
            회원정보
            <br />
            수정하기
          </Button>
        </User>
        <Interest>
          <div className="itemSection">
            {user.favorite.map((item) => (
              <div className="item">{item}</div>
            ))}
          </div>
          <Button>
            테스트
            <br />
            다시하기
          </Button>
        </Interest>
        <Logout>로그아웃</Logout>
      </Container>
    </main>
  );
};

const User = styled.div`
  background-color: whitesmoke;
  width: 100%;
  height: 100px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;

  .name {
    width: 80%;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Interest = styled(User)`
  height: 200px;

  .itemSection {
    display: flex;
    gap: 20px;
    height: 180px;
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 20px;
    padding: 10px;
    border-radius: 8px;
    background-color: gainsboro;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 80px;
  font-size: 14px;
  border: none;
  border-radius: 20px;

  :hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Logout = styled(Button)`
  width: 100%;
  background-color: whitesmoke;
  height: 40px;
`;

export default MyPage;
