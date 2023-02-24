import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsCheckCircle } from 'react-icons/bs';

const Complete = () => {
  const navigate = useNavigate();

  const passClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <i>
        <BsCheckCircle />
      </i>
      <h2>가입완료</h2>
      <p>
        카드부터 예/적금, 대출 상품까지
        <br />
        다양한 맞춤형 금융상품을 만나보세요!
      </p>
      <BottomContainer>
        <button className="nextButton" onClick={passClick}>
          시작하기
        </button>
      </BottomContainer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding: 100px 20px 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  position: relative;

  i {
    height: 70px;
    display: flex;
    align-items: center;
  }
  svg {
    width: 50px;
    height: 50px;
    color: var(--main-color);

    animation-name: checkframe;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;

    @keyframes checkframe {
      from {
        width: 50px;
        height: 50px;
      }

      20% {
        width: 70px;
        height: 70px;
      }
      50% {
        width: 40px;
        height: 40px;
      }
      75% {
        width: 55px;
        height: 55px;
      }

      to {
        width: 50px;
        height: 50px;
      }
    }
  }

  h2 {
    color: var(--main-color);
    font-size: var(--font-xl);
    margin-bottom: 14px;
    font-weight: 500;
  }

  p {
    font-size: var(--font-m);
    margin: 4px 0;
    line-height: 1.3;
    text-align: center;
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  box-sizing: border-box;

  .nextButton {
    width: 100%;
    background-color: var(--main-color);
    height: 50px;
    font-size: var(--font-m);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
    font-weight: bold;
    margin-top: 10px;
    border-radius: 50px;
  }
`;

export default Complete;
