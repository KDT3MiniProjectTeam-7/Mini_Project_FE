import { useNavigate } from 'react-router';
import styled from 'styled-components';

const MyPage = () => {
  const navigate = useNavigate();

  const postLogout = async () => {
    try {
      const res = await fetch('http://finance-seven.store/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${document.cookie.slice(12)}`,
        },
      });
      const json = await res.json();
      console.log('요청 결과', json);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserInfo = async () => {
    try {
      const res = await fetch('http://finance-seven.store/user', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${document.cookie.slice(12)}`,
        },
      });
      const json = await res.json();
      console.log('요청 결과', json);
    } catch (error) {
      console.log(error);
    }
  };
  getUserInfo();

  const user = {
    name: '김효진',
    email: 'hanssan@naver.com',
    birth: 19960713,
    age: 28,
    favorite: ['쇼핑', '여행', '대중교통'],
  };

  const logoutClick = async () => {
    postLogout();
    document.cookie = `${document.cookie}; expires=Thu, 01 Jan 1999 00:00:10 GMT;`;
    navigate('/login');
  };

  return (
    <main>
      <User>
        <div>
          <div className="name">
            <span>{user.name}</span> 님
          </div>
          <Button className="change">수정</Button>
        </div>
        <div>
          <p>
            <span>{user.email}</span>
          </p>
          <p>
            <span>{user.birth}</span> <span>(만{user.age}세)</span>
          </p>
        </div>
      </User>

      <Interest>
        <div>
          <p>{user.name}님의 관심 목록</p>
          <Button> 테스트 다시하기 </Button>
        </div>

        <div className="itemSection">
          {user.favorite.map((item, index) => (
            <div className="item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </Interest>

      <Logout onClick={logoutClick}>로그아웃</Logout>
    </main>
  );
};

const User = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    .name {
      display: flex;
      font-size: var(--font-xl);

      span {
        color: var(--main-color);
      }
    }
  }

  & > div:last-child {
    margin-top: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 12px;
    color: var(--gray-color);
  }
`;

const Interest = styled.div`
  width: 100%;
  border: 1px solid var(--lightgray-color);
  border-radius: 10px;
  padding: 20px 10px;
  margin: 30px 0;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }

  & > div:last-child {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    div {
      padding: 5px 10px;
      background: #6e74b3;
      color: #fff;
      font-size: 14px;
      border-radius: 20px;
    }
  }
`;

const Button = styled.button`
  font-size: var(--font-s);
  color: #fff;
  height: 30px;
  border-radius: 20px;
  border: none;
  background: var(--main-color);
  padding: 0 15px;
`;

const Logout = styled(Button)`
  width: 100%;
  background-color: var(--lightgray-color);
  color: var(--black-color);
  height: 40px;
  font-size: 14px;
  font-weight: 500;
`;

export default MyPage;
