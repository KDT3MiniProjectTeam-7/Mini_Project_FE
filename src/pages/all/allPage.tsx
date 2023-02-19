import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import CategoryTab from '../search/SearchResultsComponents/CategoryTab';
import LoanLists from './LoanLists';
import CardLists from './CardLists';
import SubscriptionLists from './SubscriptionLists';
import SavingsLists from './SavingsLists';

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

  //아래는 목업데이터.
  const cardData = [
    {
      productId: 1234,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditBTDD41.png',
      benefits: ['전기차 충전요금 20~40% 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 5678,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditAXKD3X.png',
      benefits: ['주차앱 6천원 캐시백', '생활 가맹점 10~20% 캐시백', '주차앱 6천원 캐시백'],
      annualFee: 5000,
    },
    {
      productId: 5679,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://vertical.pstatic.net/vertical-cardad/creatives/SK/4056/SK_4056_hor.PNG',
      benefits: ['주차앱 6천원 캐시백', '생활 가맹점 10~20% 캐시백', '주차앱 6천원 캐시백'],
      annualFee: 200000,
    },
    {
      productId: 1834,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://vertical.pstatic.net/vertical-cardad/creatives/LO/10227/LO_10227_20230131-123810_ver.png',
      benefits: ['주차앱 6천 원 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천원 캐시백'],
      annualFee: 15000,
    },
    {
      productId: 9847,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.hyundaicard.com/img/com/card/028879GT_h.png',
      benefits: ['전기차 충전요금 10~40% 캐시백', '생활 가맹점 10~20% 캐시백', '주차앱 6천원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 8834,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditBTDD41.png',
      benefits: ['전기차 충전요금 20~40% 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천원 캐시백'],
      annualFee: 10000,
    },
    {
      productId: 8831,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      thumbnail: 'https://www.hyundaicard.com/img/com/card/028879GT_h.png',
      benefits: ['전기차 충전요금 20~40% 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천원 캐시백'],
      annualFee: 18000,
    },
  ];

  const loanData = [
    {
      productId: 2111,
      category: 'loan',
      productName: '신용대출',
      companyName: '케이뱅크',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png',
      lowRate: 6.44,
      highRate: 10.49,
      bound: '최대 2억원',
    },
    {
      productId: 2112,
      category: 'loan',
      productName: '모바일 프라임론 직장인 대출',
      companyName: '광주은행',
      companyImage:
        'https://mblogthumb-phinf.pstatic.net/MjAyMTAxMjRfMTg2/MDAxNjExNDcyNDQwNjMz.c4nA0jGYMPxo1ZkOCb9DxtC_pMoZJWo14c_VsdXbeuIg.3XJxeZziXV4TUIowr4dAJBJMY0xmVTIchgzH56o_C3sg.PNG.yeosu_bada/%EA%B4%91%EC%A3%BC%EC%9D%80%ED%96%89_%EB%A1%9C%EA%B3%A0_PNG_AI_%EC%9B%90%EB%B3%B8_%EB%8B%A4%EC%9A%B4.png?type=w800',
      lowRate: 6.91,
      highRate: 12.71,
      bound: '1백만 원 ~ 1억 5천만 원',
    },
    {
      productId: 2113,
      category: 'loan',
      productName: '사장님대출',
      companyName: '토스뱅크',
      companyImage: 'https://static.toss.im/logos/png/4x/logo-bank.png',
      lowRate: 5.99,
      highRate: 15,
      bound: '1백만원 ~ 1억원',
    },
    {
      productId: 2114,
      category: 'loan',
      productName: '개인사업자대출',
      companyName: 'KB국민카드',
      companyImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/KB_logo.svg/2560px-KB_logo.svg.png',
      lowRate: 7.4,
      highRate: 19.9,
      bound: '1백만원 ~ 2.5억원',
    },
    {
      productId: 2115,
      category: 'loan',
      productName: '신용대출플러스',
      companyName: '케이뱅크',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png',
      lowRate: 7.35,
      highRate: 10.86,
      bound: '최대 1억 5천원',
    },
    {
      productId: 2116,
      category: 'loan',
      productName: '신용대출',
      companyName: '케이뱅크',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png',
      lowRate: 6.44,
      highRate: 10.49,
      bound: '최대 2억원',
    },
    {
      productId: 2117,
      category: 'loan',
      productName: '모바일 프라임론 직장인 대출',
      companyName: '광주은행',
      companyImage:
        'https://mblogthumb-phinf.pstatic.net/MjAyMTAxMjRfMTg2/MDAxNjExNDcyNDQwNjMz.c4nA0jGYMPxo1ZkOCb9DxtC_pMoZJWo14c_VsdXbeuIg.3XJxeZziXV4TUIowr4dAJBJMY0xmVTIchgzH56o_C3sg.PNG.yeosu_bada/%EA%B4%91%EC%A3%BC%EC%9D%80%ED%96%89_%EB%A1%9C%EA%B3%A0_PNG_AI_%EC%9B%90%EB%B3%B8_%EB%8B%A4%EC%9A%B4.png?type=w800',
      lowRate: 6.91,
      highRate: 12.71,
      bound: '1백만 원 ~ 1억 5천만 원',
    },
    {
      productId: 2118,
      category: 'loan',
      productName: '사장님대출',
      companyName: '토스뱅크',
      companyImage: 'https://static.toss.im/logos/png/4x/logo-bank.png',
      lowRate: 5.99,
      highRate: 15,
      bound: '1백만원 ~ 1억원',
    },
    {
      productId: 2119,
      category: 'loan',
      productName: '개인사업자대출',
      companyName: 'KB국민카드',
      companyImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/KB_logo.svg/2560px-KB_logo.svg.png',
      lowRate: 7.4,
      highRate: 19.9,
      bound: '1백만원 ~ 2.5억원',
    },
    {
      productId: 21110,
      category: 'loan',
      productName: '신용대출플러스',
      companyName: '케이뱅크',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png',
      lowRate: 7.35,
      highRate: 10.86,
      bound: '최대 1억 5천원',
    },
    {
      productId: 21110,
      category: 'loan',
      productName: '신용대출플러스',
      companyName: '케이뱅크',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png',
      lowRate: 7.35,
      highRate: 10.86,
      bound: '최대 1억 5천원',
    },
  ];

  const savingsData = [
    {
      productId: 3111,
      category: 'savings',
      productName: '청년내일저축계좌',
      companyName: '하나은행',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hana_Bank_Logo_(kor).svg/2560px-Hana_Bank_Logo_(kor).svg.png',
      basicRate: 2.0,
      primeRate: 3.0,
    },
    {
      productId: 3112,
      category: 'savings',
      productName: '스무살 우리 자유적금',
      companyName: '우리은행',
      companyImage: 'https://simg.wooribank.com/img/intro/header/h1_01.png',
      basicRate: 2.8,
      primeRate: 3.9,
    },
    {
      productId: 3113,
      category: 'savings',
      productName: '직장인우대예금',
      companyName: 'DGB대구은행',
      companyImage: 'https://ifh.cc/g/tN8fPq.png',
      basicRate: 3.66,
      primeRate: 4.21,
    },
    {
      productId: 3114,
      category: 'savings',
      productName: '직장인우대예금',
      companyName: 'DGB대구은행',
      companyImage:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdLrsWe%2FbtrGI0Sscvk%2FOWqTiEq6Q8JIVZSBHjYHcK%2Fimg.png',
      basicRate: 3.26,
      primeRate: 3.81,
    },
    {
      productId: 3115,
      category: 'savings',
      productName: 'IBK평생한가족통장',
      companyName: 'IBK기업은행',
      companyImage: 'https://blog.kakaocdn.net/dn/tUFqP/btq5QOAMjv3/pQgStk8N7muGHKPj7Ph600/img.png',
      basicRate: 3.45,
      primeRate: 3.65,
    },
  ];

  const subscriptionData = [
    {
      productId: 4111,
      category: 'subscription',
      productName: '청년 우대형 주택청약종합저축',
      companyName: '우리은행',
      companyImage: 'https://simg.wooribank.com/img/intro/header/h1_01.png',
      highRate: 2.1,
    },
    {
      productId: 4112,
      category: 'subscription',
      productName: '주택청약종합저축',
      companyName: '신한은행',
      companyImage: 'https://simg.wooribank.com/img/intro/header/h1_01.png',
      highRate: 3.6,
    },
  ];

  let ItemLists = <></>;
  switch (tabIndex) {
    case 0:
      ItemLists = <CardLists data={cardData} />;
      break;
    case 1:
      ItemLists = <LoanLists data={loanData} />;
      break;
    case 2:
      ItemLists = <SavingsLists data={savingsData} />;
      break;
    case 3:
      ItemLists = <SubscriptionLists data={subscriptionData} />;
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
