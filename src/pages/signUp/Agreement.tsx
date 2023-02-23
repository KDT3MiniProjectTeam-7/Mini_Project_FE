import React from 'react';
import styled from 'styled-components';

const Agreement = (props: any) => {
  const handleClick = () => {
    props.setPage('UserInformation');
  };

  return (
    <>
      <BottomContainer>
        <button className="nextButton" onClick={handleClick}>
          동의하고 계속하기
        </button>
      </BottomContainer>
    </>
  );
};

export default Agreement;

const BottomContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;

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
    z-index: 1000;
  }
`;
