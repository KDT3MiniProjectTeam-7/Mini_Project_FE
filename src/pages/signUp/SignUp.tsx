import { useState } from 'react';
import styled from 'styled-components';
import Agreement from './Agreement';
import Complete from './Complete';
import UserInformation from './UserInformation';
import { BsCheck2 } from 'react-icons/bs';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';

const SignUp = () => {
  const [page, setPage] = useState('Agreement');

  return (
    <MainContainer>
      {/* <Title>회원가입</Title> */}
      {/* <StepContainer>
        <div className="step">
          <RiNumber1 />
          <span>약관 동의</span>
        </div>

        <div className="step">
          <div className="line"></div>
          <RiNumber2 />
          <span>정보 입력</span>
        </div>
        <div className="step">
          <div className="line"></div>
          <RiNumber3 />
          <span>가입 완료</span>
        </div>
      </StepContainer> */}
      {(page === 'Agreement' && <Agreement setPage={setPage} />) ||
        (page === 'UserInformation' && <UserInformation setPage={setPage} />) ||
        (page === 'Complete' && <Complete />)}
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
`;

const StepContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .step {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--main-color);
    font-size: var(--font-s);

    svg {
      margin-bottom: 5px;
      padding: 4px;
      width: 20px;
      height: 20px;
      color: #ffffff;
      border-radius: 50%;
      background-color: var(--main-color);
    }
  }

  .line {
    height: 1px;
    width: calc(140px);
    top: 10px;
    right: 30px;
    position: absolute;
    background-color: var(--main-color);
  }
`;

const Title = styled.h1`
  font-size: var(--font-xxl);
`;

export default SignUp;
