import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Complete = () => {
  const navigate = useNavigate();

  const passClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <h2>가입 완료</h2>
      <div>김효진 님, 가입해주셔서 감사합니다!</div>
      <BottomContainer>
        <button className="nextButton" onClick={passClick}>
          홈으로
        </button>
      </BottomContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  padding: 60px 20px 110px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
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
    height: 60px;
    font-size: var(--font-m);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
    font-weight: bold;
    margin-top: 10px;
  }
`;

// const Container = styled.div`
//   width: 100%;
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;

//   margin: 0;
//   gap: 20px;
// `;

export default Complete;
