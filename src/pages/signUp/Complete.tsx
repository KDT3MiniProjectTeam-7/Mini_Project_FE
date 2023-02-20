import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Complete = () => {
  const navigate = useNavigate();

  const getUserInfo = async () => {
    try {
      const res = await fetch('http://3.36.178.242:8080/user/recent-products/user', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: document.cookie.slice(12),
        },
      });
      if (!res.ok) throw new Error('요청 실패');
      console.log('요청성공');
      const json = await res.json();
      console.log(json);
      // if (json.status === 'success') {

      //   console.log(document.cookie);
      // } else {
      //   setLoginFail(true);
      // }
    } catch (error) {
      console.log(error);
    }
  };
  getUserInfo();
  const surveyClick = () => {
    navigate('/survey');
  };

  const passClick = () => {
    navigate('/');
  };
  return (
    <Container>
      <h2>가입 완료</h2>
      <div>
        김효진 님, 반갑습니다!
        <br />
        설문조사를 하시면 맞춤 상품을 추천해드립니다.
      </div>
      <button onClick={surveyClick}>설문조사 참여하기</button>
      <button onClick={passClick}>나중에 할게요</button>
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
  height: 100vh;
  margin: 0;
  gap: 20px;
`;

export default Complete;
