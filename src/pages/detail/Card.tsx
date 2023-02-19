import React, { useState } from 'react';
import styled from 'styled-components';
import { FaAngellist } from 'react-icons/fa';
import DescriptionData from './DescriptionData';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';

const Card = () => {
  const [nav, setNav] = useState([true, false, false]);

  const navigate = useNavigate();

  // 데이터는 일단 목업데이터
  const data = {
    productId: 1,
    category: 'CARD',
    productName: '신한카드 EVerywhere',
    companyName: '신한카드',
    companyImage: 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditBTDD41.png',
    productURL: 'https://www.shinhancard.com/pconts/html/card/apply/credit/1219683_2207.html',
    thumbnail: null,
    benefits: ['전기차 충전요금 20~40% 캐시백', '생활 가맹점 5~20% 캐시백', '주차앱 5천원 캐시백'],
    annualFee: 22000,
  };

  return (
    <>
      <IoChevronBackOutline
        size="22"
        color="#353D4A"
        onClick={() => {
          navigate(-1);
        }}
        style={{ marginLeft: '-8px' }}
      />
      <IntroContainer>
        <p>{data.companyName}</p>
        <img src={data.companyImage} alt="cardImage" />
        <h1>{data.productName}</h1>
        <h2>파이낸스 세븐이 추천하는 최고의 혜택</h2>
      </IntroContainer>
      <BenefitContainer>
        {data.benefits.map((benefit, index) => {
          return (
            <li key={index}>
              <FaAngellist />
              <span>{benefit}</span>
            </li>
          );
        })}
      </BenefitContainer>
      {/* isSelected를 통해서 select된 nav는 다른 스타일 부여 */}
      <IndexContainer>
        <NavList isSelected={nav[0] ? true : false} onClick={() => setNav([true, false, false])}>
          연회비/브랜드
        </NavList>
        <NavList isSelected={nav[1] ? true : false} onClick={() => setNav([false, true, false])}>
          주요혜택
        </NavList>
        <NavList isSelected={nav[2] ? true : false} onClick={() => setNav([false, false, true])}>
          이용안내
        </NavList>
      </IndexContainer>
      {nav[0] && (
        <DescriptionContainer>
          <p>연회비</p>
          <ul>
            <li>{`· 국내전용 ${data.annualFee.toLocaleString()}원 (기본${data.annualFee.toLocaleString()}원)`}</li>
            <li>{`· 국내외겸용 (UPI) ${data.annualFee.toLocaleString()}원 (기본${data.annualFee.toLocaleString()}원)`}</li>
            <li>{`· 국내외겸용 (Visa/Mastercard/Amex) ${(data.annualFee + 1000).toLocaleString()}원 (기본${(
              data.annualFee + 1000
            ).toLocaleString()}원)`}</li>
          </ul>
          <p>브랜드</p>
          <ul>
            <li>· VISA/mastercard/국내전용/Amex/UPI</li>
          </ul>
        </DescriptionContainer>
      )}
      {nav[1] && (
        <DescriptionContainer>
          <p>주요혜택</p>
          <ul>
            {data.benefits.map((benefit, index) => {
              return <li key={index}>{`· ${benefit}`}</li>;
            })}
          </ul>
        </DescriptionContainer>
      )}
      {nav[2] && (
        <DescriptionContainer>
          {/* description너무 길어서 따로 component로 뺌 */}
          <DescriptionData />
        </DescriptionContainer>
      )}
      <Link to={data.productURL}>
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
    box-shadow: -5px 5px 12px 0px;
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
  border-radius: 20px;
  cursor: pointer;
`;
export default Card;
