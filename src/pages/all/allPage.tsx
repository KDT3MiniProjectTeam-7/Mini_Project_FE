import React, { useState } from 'react';
import styled from 'styled-components';

const ALL = () => {
  const [category, setCategory] = useState('card');

  const handleCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  return (
    <Container>
      <Title>
        원하시는 상품만 <span>쏙쏙</span> 골라보세요.
      </Title>
      <ButtonContainer>
        <RadioInput type="radio" value="card" name="credit" id="card-type" defaultChecked onChange={handleCategory} />
        <Label htmlFor="card-type">카드</Label>
        <RadioInput type="radio" value="loan" name="credit" id="loan-type" onChange={handleCategory} />
        <Label htmlFor="loan-type">대출</Label>
        <RadioInput type="radio" value="savings" name="credit" id="savings-type" onChange={handleCategory} />
        <Label htmlFor="savings-type">예/적금</Label>
        <RadioInput type="radio" value="subscription" name="credit" id="subscription-type" onChange={handleCategory} />
        <Label htmlFor="subscription-type">청약</Label>
      </ButtonContainer>
      <ButtonContainer>
        <select name="tag1" id="tag1">
          <option value="default">1번 태그</option>
          <option value="default">1번 태그</option>
          <option value="default">1번 태그</option>
        </select>
        <select name="tag2" id="tag2">
          <option value="default">2번 태그</option>
          <option value="default">2번 태그</option>
          <option value="default">2번 태그</option>
        </select>
        <select name="tag3" id="tag3">
          <option value="default">3번 태그</option>
          <option value="default">3번 태그</option>
          <option value="default">3번 태그</option>
        </select>
      </ButtonContainer>
      <ContainerBox>
        <CardContainer>
          <p>
            <span>신한은행</span>
            신한카드 플리
          </p>
          <img
            src="https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditPLAD26.png"
            alt="카드 이미지"
          />
        </CardContainer>
      </ContainerBox>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  select {
    display: flex;
    margin: 0 5px;
    border: 1px solid #ced4da;
    color: #495057;
    font-size: 14px;
    border-radius: 5px;
    box-shadow: inset 0 0 0 1px #ced4da;
    background-color: #fff;
    opacity: 1;
    height: 25px;
  }
`;

const RadioInput = styled.input`
  display: none;
  &:checked + label {
    color: red;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  width: auto;
  height: 35px;
  padding: 4px 16px;
  margin: 0 12px;
  border: 1px solid #ced4da;
  color: #495057;
  font-size: 14px;
  border-radius: 5px;
  box-shadow: inset 0 0 0 1px #ced4da;
  background-color: #fff;
  opacity: 1;
  cursor: pointer;
`;

const Title = styled.h1`
  margin-top: 20px;
  font-weight: 900;
  line-height: 1.5;
  span {
    color: rgb(14, 118, 255);
  }
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardContainer = styled.div`
  height: 170px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 50px 15px 25px;
  background: linear-gradient(to bottom, #cecece, #333333);
  border-radius: 10px;

  p {
    font-size: 20px;
    font-weight: 900;
    line-height: 1.2;
    color: #fff;

    span {
      display: block;
      margin-bottom: 10px;
      font-size: 15px;
    }
  }

  img {
    max-height: 110px;
    max-width: 150px;
    box-shadow: -5px 5px 10px 0px;
    border-radius: 5%;
    overflow: hidden;
    position: relative;
  }
`;

export default ALL;
