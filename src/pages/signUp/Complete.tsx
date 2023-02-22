import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Complete = () => {
  const navigate = useNavigate();

  // 테스트용입니다.
  const getUserInfo = async () => {
    try {
      const res = await fetch('http://finance-seven.store/user', {
        method: 'GET',
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
  getUserInfo();

  const passClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <h2>가입 완료</h2>
      <div>김효진 님, 가입해주셔서 감사합니다!</div>
      <button onClick={passClick}>홈으로</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0;
  gap: 20px;
`;

export default Complete;
