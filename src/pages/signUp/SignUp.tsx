import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Agreement from './Agreement';
import Complete from './Complete';
import UserInformation from './UserInformation';

interface StepData {
  step: string;
}

const SignUp = () => {
  const [page, setPage] = useState('Agreement');
  const [step, setStep] = useState('0');

  useEffect(() => {
    if (page === 'Agreement') {
      setStep('1');
    } else if (page === 'UserInformation') {
      setStep('2');
    } else if (page === 'Complete') {
      setStep('3');
    }
  }, [page]);

  return (
    <MainContainer>
      <Title>회원 가입</Title>
      {(page === 'Agreement' && <Agreement setPage={setPage} />) ||
        (page === 'UserInformation' && <UserInformation setPage={setPage} />) ||
        (page === 'Complete' && <Complete />)}
      <BottomContainer step={step}>
        <div className="step">
          <span className="stepNumber">{step} / 3</span>
          <div className="line"></div>
          <div className="line line--blue"></div>
        </div>
      </BottomContainer>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  min-height: 100vh;
  padding: 0;
  margin: 0 auto;
  position: relative;
`;

const BottomContainer = styled.div<StepData>`
  width: 100%;
  position: absolute;
  bottom: 60px;
  padding: 20px;

  .step {
    position: relative;
  }

  .stepNumber {
    position: absolute;
    font-size: var(--font-xs);
    color: var(--gray-color);
    bottom: 8px;
    right: 0;
  }

  .line {
    position: absolute;
    bottom: 0;
    height: 4px;
    width: 100%;
    background-color: var(--lightgray-color);
    border-radius: 10px;
  }

  .line--blue {
    width: 0%;
    opacity: 0;
    background-color: var(--main-color);
    transition-property: width, opacity;
    transition-duration: 0.7s;
    transition-timing-function: ease;
    border-radius: 10px;
    ${({ step }) =>
      step === '1'
        ? css`
            opacity: 0.33;
            width: 33%;
          `
        : step === '2'
        ? css`
            opacity: 0.66;
            width: 66%;
          `
        : step === '3'
        ? css`
            opacity: 1;
            width: 100%;
          `
        : ''}
  }
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  padding: 20px;
  font-size: var(--font-xxl);
`;

export default SignUp;
