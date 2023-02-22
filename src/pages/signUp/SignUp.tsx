import { useState } from 'react';
import styled from 'styled-components';
import Agreement from './Agreement';
import Complete from './Complete';
import UserInformation from './UserInformation';

const SignUp = () => {
  const [page, setPage] = useState('Agreement');

  return (
    <MainContainer>
      <Title>회원 가입</Title>
      {(page === 'Agreement' && <Agreement setPage={setPage} />) ||
        (page === 'UserInformation' && <UserInformation setPage={setPage} />) ||
        (page === 'Complete' && <Complete />)}
      <BottomContainer>
        <div className="step">
          <span>1/3</span>
          <div className="line"></div>
          <div className="line line--blue"></div>
        </div>
        <button className="nextButton">다음</button>
      </BottomContainer>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
`;

const BottomContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 20px 20px;

  .nextButton {
    width: 100%;
    background-color: var(--main-color);
    height: var(--input-height);
    font-size: var(--font-m);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
    font-weight: bold;
    margin-top: 50px;
  }
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  padding: 20px 20px;
  font-size: var(--font-xxl);
`;

export default SignUp;
