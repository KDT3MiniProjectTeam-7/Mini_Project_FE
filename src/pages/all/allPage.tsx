import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import CategoryTab from '../search/SearchResultsComponents/CategoryTab';

const ALL = () => {
  const [tabIndex, setTabIndex] = useState(0);

  // 현재 select박스에서 선택된 태그들 모아놓음
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    // 데이터 페칭 여기다 구현.
  }, [tabIndex, selectedTags]);

  // tagOptions에 가능한 모든 태그들 삽입
  const tagOptions = [
    { value: '미혼', label: '미혼' },
    { value: '직장인', label: '직장인' },
    { value: '기혼', label: '기혼' },
    { value: '학생', label: '학생' },
    { value: '백수', label: '백수' },
  ];

  const [categoryArr, setCategoryArr] = useState([
    { category: 'card', title: '카드' },
    { category: 'loan', title: '대출' },
    { category: 'savings', title: '예적금' },
    { category: 'subscription', title: '청약' },
  ]);

  return (
    <>
      {/* 일단 카테고리 변경될때마다 요청도보내야함. 즉 onchange는 태그와 카테고리에 필요. */}
      <CategoryTab tabIndex={tabIndex} setTabIndex={setTabIndex} categoryArr={categoryArr} />
      <Container>
        <Title>
          원하시는 상품만 <span>쏙쏙</span> 골라보세요.
        </Title>
        <ButtonContainer>
          <Select
            isMulti
            name="colors"
            options={tagOptions}
            onChange={(option) => {
              let copy: string[] = option.map((tag) => {
                return tag.value;
              });
              setSelectedTags(copy);
            }}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="원하시는 태그를 최대 3개 선택해주세요."
            isOptionDisabled={() => selectedTags.length >= 3}
          />
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
    </>
  );
};

const Container = styled.main`
  margin-top: 108px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
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
