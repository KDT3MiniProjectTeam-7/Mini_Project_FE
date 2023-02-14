import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaAngellist } from 'react-icons/fa';
import DescriptionData from './DescriptionData';

const Loan = () => {
  const [nav, setNav] = useState([true, false, false]);
  const data = {
    category: 'loan',
    productTitle: '모바일 프라임론 직장인 대출',
    bankName: '광주은행',
    productImageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMTAxMjRfMTg2/MDAxNjExNDcyNDQwNjMz.c4nA0jGYMPxo1ZkOCb9DxtC_pMoZJWo14c_VsdXbeuIg.3XJxeZziXV4TUIowr4dAJBJMY0xmVTIchgzH56o_C3sg.PNG.yeosu_bada/%EA%B4%91%EC%A3%BC%EC%9D%80%ED%96%89_%EB%A1%9C%EA%B3%A0_PNG_AI_%EC%9B%90%EB%B3%B8_%EB%8B%A4%EC%9A%B4.png?type=w800',
    applicationUrl:
      'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&pkid=731&os=29654553&qvt=0&query=%EA%B4%91%EC%A3%BC%EC%9D%80%ED%96%89%20%EB%AA%A8%EB%B0%94%EC%9D%BC%ED%94%84%EB%9D%BC%EC%9E%84%EB%A1%A0',
    lowestRates: 6.91,
    highestRates: 12.71,
    limits: '1백만원 ~ 1억 5천만원',
  };

  return (
    <>
      <IntroContainer>
        <p>{data.bankName}</p>
        <img src={data.productImageUrl} alt="cardImage" />
        <h1>{data.productTitle}</h1>
        <h2>파이낸스 세븐이 추천하는 최적의 대출</h2>
      </IntroContainer>
      <BenefitContainer>
        <li>
          <FaAngellist />
          <span>{`최저 ${data.lowestRates}%, 최고 ${data.highestRates}% 의 금리`}</span>
        </li>
        <li>
          <FaAngellist />
          <span>{`${data.limits}의 한도`}</span>
        </li>
      </BenefitContainer>
      {/* isSelected를 통해서 select된 nav는 다른 스타일 부여 */}
      <IndexContainer>
        <NavList isSelected={nav[0] ? true : false} onClick={() => setNav([true, false, false])}>
          금리정보/한도
        </NavList>
        <NavList isSelected={nav[1] ? true : false} onClick={() => setNav([false, true, false])}>
          우대금리
        </NavList>
        <NavList isSelected={nav[2] ? true : false} onClick={() => setNav([false, false, true])}>
          이용안내
        </NavList>
      </IndexContainer>
      {nav[0] && (
        <DescriptionContainer>
          <p>금리정보</p>
          <ul>
            <li>{`· 최저금리(연체이자율 포함): 연 ${data.lowestRates}%`}</li>
            <li>{`· 최고금리(연체이자율 포함): 연 ${data.highestRates}%`}</li>
            <li>{`· 연체이자율 : 적용금리 + 연 3%(최고 연 12%)`}</li>
          </ul>
          <p>한도</p>
          <ul>
            <li>{`· ${data.limits}`}</li>
          </ul>
        </DescriptionContainer>
      )}
      {nav[1] && (
        <DescriptionContainer>
          <p>우대금리</p>
          <ul>
            <li>
              {`· ${data.bankName} 계좌로 매월 급여이체 : 연 0.3%p 대량 급여이체/급여지정일 입금/회사명의 입금 등을 통해 매월 100만원 이상의 급여가 입금될 경우 실적인정 적용`}
            </li>
            <li>· 신용카드 당행계좌 결제 실적(매월 30만원 이상) : 연 0.2%p</li>
            <li>· WON뱅킹 매월 1회 이상 로그인 : 연 0.2%p</li>
            <li>
              {`· 대출 미보유 고객 우대금리 쿠폰 : 연 0.3%p 신청일 현재 ${data.bankName} 대출이 없는 고객(1회 발급/사용 가능하며, 최초 약정기간만 적용하고 연장 시는 적용
불가)`}
            </li>
          </ul>
        </DescriptionContainer>
      )}
      {nav[2] && (
        <DescriptionContainer>
          {/* description너무 길어서 따로 component로 뺌 */}
          <DescriptionData />
        </DescriptionContainer>
      )}
      <Link to={data.applicationUrl}>
        <SubmitButton>온라인 신청</SubmitButton>
      </Link>
    </>
  );
};

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 30px;
  }
  img {
    max-height: 150px;
    max-width: 220px;
    border-radius: 5%;
    margin-bottom: 50px;
  }
  h1 {
    font-weight: 800;
    font-size: 21px;
  }
  h2 {
    margin-top: 15px;
    font-size: 15px;
    color: #888888;
  }
`;

const BenefitContainer = styled.ul`
  width: 230px;
  margin: 25px auto 0;

  li {
    margin-top: 5px;
    text-align: left;
    span {
      word-break: break-all;
      margin-left: 10px;
      font-size: 13px;
      font-weight: 700;
    }
  }
`;

const IndexContainer = styled.ul`
  margin-top: 30px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
`;

const NavList = styled.li<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? '#000000' : '#888')};
  font-weight: ${(props) => (props.isSelected ? 800 : 500)};
  border-bottom: ${(props) => (props.isSelected ? '3px solid #333333' : 'none')};
  margin-right: 15px;
  font-size: 15px;
  padding: 16px 0;
`;

const DescriptionContainer = styled.div`
  p {
    font-size: 15px;
    font-weight: 800;
    margin-top: 30px;
  }
  ul {
    margin-top: 20px;
    li {
      font-size: 14px;
      margin: 5px 0;
      line-height: 1.5;
    }
  }
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 48px;
  padding: 3px 8px;
  color: #ffffff;
  font-size: 17px;
  background-color: rgb(14, 118, 255);
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

export default Loan;
