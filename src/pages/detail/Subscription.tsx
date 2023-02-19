import React, { useState } from 'react';
import styled from 'styled-components';
import { FaAngellist } from 'react-icons/fa';
import DescriptionData from './DescriptionData';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';

const Subscription = () => {
  const [nav, setNav] = useState([true, false, false]);

  const navigate = useNavigate();
  const data = {
    productId: 16,
    category: 'SUBSCRIPTION',
    productName: '주택청약종합저축',
    companyName: '우리은행',
    companyImage: 'https://simg.wooribank.com/img/intro/header/h1_01.png',
    productURL: 'https://spot.wooribank.com/pot/Dream?withyou=PODEP0019&cc=c007095:c009166',
    thumbnail: null,
    highRate: '2.10',
    aboutRate: ['1개월 이내: 무이자', '1개월 초과 1년 미만: 1.3', '1년 이상 2년 미만: 1.8', '2년 이상: 2.1'],
    bound: null,
    purchase: ['매월 2~ 50만원 자유 납입', '납부 총액이 1,500만원 도달 시 까지는 50만원 초과하여 자유적립 가능'],
    qualification: ['무주택자'],
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
        <h2>파이낸스 세븐이 추천하는 당신만을 위한 청약</h2>
      </IntroContainer>
      <BenefitContainer>
        <li>
          <FaAngellist />
          <span>{`최고 ${data.highRate}% 의 금리`}</span>
        </li>
        {data.purchase.map((purchase, index) => {
          return (
            <li key={index}>
              <FaAngellist />
              <span>{purchase}</span>
            </li>
          );
        })}
      </BenefitContainer>
      {/* isSelected를 통해서 select된 nav는 다른 스타일 부여 */}
      <IndexContainer>
        <NavList isSelected={nav[0] ? true : false} onClick={() => setNav([true, false, false])}>
          금리정보
        </NavList>
        <NavList isSelected={nav[1] ? true : false} onClick={() => setNav([false, true, false])}>
          납입금액
        </NavList>
        <NavList isSelected={nav[2] ? true : false} onClick={() => setNav([false, false, true])}>
          이용안내
        </NavList>
      </IndexContainer>
      {nav[0] && (
        <DescriptionContainer>
          <p>금리정보</p>
          <ul>
            <li>{`· 최고 ${data.highRate}% 의 금리`}</li>
            {data.aboutRate.map((aboutRate, index) => {
              return (
                <li key={index}>
                  <span>{`· ${aboutRate}`}</span>
                </li>
              );
            })}
          </ul>
        </DescriptionContainer>
      )}
      {nav[1] && (
        <DescriptionContainer>
          <p>납입금액</p>
          <ul>
            {data.purchase.map((purchase, index) => {
              return <li key={index}>{`· ${purchase}`}</li>;
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
export default Subscription;
