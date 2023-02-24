import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import CategoryTab from '../search/SearchResultsComponents/CategoryTab';
import LoanLists from './LoanLists';
import CardLists from './CardLists';
import SubscriptionLists from './SubscriptionLists';
import SavingsLists from './SavingsLists';
import { getCategoryItem } from '../../common/api/Api';
import { makeTagString } from '../../utils/makeTagString';
import { useInView } from 'react-intersection-observer';
import { Item } from '../../store/cartSlice';

const ALL = () => {
  const [tabIndex, setTabIndex] = useState(0);

  // 현재 select박스에서 선택된 태그들 모아놓음
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [resultData, setResultData] = useState<Item[]>([]);

  const [curPage, setCurPage] = useState(1);

  const [totalPage, setTotalPage] = useState(1);

  // 무한스크롤용
  const [ref, inView] = useInView();

  useEffect(() => {
    setCurPage(1);
    const fetchData = async (page: number) => {
      const data = await getCategoryItem(makeTagString(selectedTags), categoryArr[tabIndex].category, page);
      setTotalPage(data.totalPage);

      setResultData(data?.resultData);
    };
    fetchData(curPage);
  }, [tabIndex, selectedTags]);

  useEffect(() => {
    // 데이터 페칭 여기다 구현.
    const fetchData = async (page: number) => {
      const data = await getCategoryItem(makeTagString(selectedTags), categoryArr[tabIndex].category, page);
      setTotalPage(data.totalPage);

      setResultData(data?.resultData);
    };
    if (curPage === 1) {
      fetchData(curPage);
    }
  }, [curPage]);

  useEffect(() => {
    // 데이터 페칭 여기다 구현.
    const fetchData = async (page: number) => {
      const data = await getCategoryItem(makeTagString(selectedTags), categoryArr[tabIndex].category, page);
      let copy = [...resultData, ...data?.resultData];
      setResultData(copy);
    };

    if (inView && curPage < totalPage) {
      fetchData(curPage + 1);
      setCurPage(curPage + 1);
    }
  }, [inView]);

  const [categoryArr, setCategoryArr] = useState([
    { category: 'card', title: '카드', content: <CardLists data={resultData} /> },
    { category: 'loan', title: '대출', content: <LoanLists data={resultData} /> },
    { category: 'savings', title: '예적금', content: <SavingsLists data={resultData} /> },
    { category: 'subscription', title: '청약', content: <SubscriptionLists data={resultData} /> },
  ]);

  // tagOptions에 가능한 모든 태그들 삽입
  const tagOptions = [
    { value: '미성년자', label: '미성년자' },
    { value: '청년', label: '청년' },
    { value: '중년', label: '중년' },
    { value: '장년', label: '장년' },
    { value: '노년', label: '노년' },
    { value: '학생', label: '학생' },
    { value: '직장인', label: '직장인' },
    { value: '사업자', label: '사업자' },
    { value: '무직', label: '무직' },
    { value: '기혼', label: '기혼' },
    { value: '미혼', label: '미혼' },
    { value: '자차', label: '자차' },
    { value: '대중교통', label: '대중교통' },
    { value: '주택소유', label: '주택소유' },
    { value: '무주택자', label: '무주택자' },
    { value: '저소득', label: '저소득' },
    { value: '중위소득', label: '중위소득' },
    { value: '고소득', label: '고소득' },
    { value: '문화생활', label: '문화생활' },
    { value: '헬스케어', label: '헬스케어' },
    { value: '반려동물', label: '반려동물' },
    { value: '쇼핑', label: '쇼핑' },
    { value: '뷰티', label: '뷰티' },
    { value: '여행', label: '여행' },
    { value: '통신', label: '통신' },
    { value: '외식', label: '외식' },
    { value: '베이커리', label: '베이커리' },
  ];

  let ItemLists = <></>;
  switch (tabIndex) {
    case 0:
      ItemLists = <CardLists data={resultData} />;
      break;
    case 1:
      ItemLists = <LoanLists data={resultData} />;
      break;
    case 2:
      ItemLists = <SavingsLists data={resultData} />;
      break;
    case 3:
      ItemLists = <SubscriptionLists data={resultData} />;
      break;
    default:
      alert('카테고리를 표시해주세요.');
  }

  return (
    <>
      {/* 일단 카테고리 변경될때마다 요청도보내야함. 즉 onchange는 태그와 카테고리에 필요. */}
      <HeaderNav style={{ margin: '0 auto', maxWidth: '768px' }}>
        <CategoryTab tabIndex={tabIndex} setTabIndex={setTabIndex} categoryArr={categoryArr} isOnAllPage={true} />
      </HeaderNav>
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
        <ContainerBox>{ItemLists}</ContainerBox>
        <div ref={ref}></div>
      </Container>
    </>
  );
};

const HeaderNav = styled.div`
  margin: 0 auto;
  max-width: 768px;
  ol {
    z-index: 10;
  }
`;

const Container = styled.main`
  margin: 0 auto;
  margin-top: 108px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .select__control {
    border-radius: 20px;
    .select__multi-value {
      border-radius: 20px;
    }
    .select__placeholder {
      font-size: var(--font-s);
    }
  }
`;

const ButtonContainer = styled.div`
  z-index: 1;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default ALL;
