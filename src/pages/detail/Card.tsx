import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaAngellist } from 'react-icons/fa';
import DescriptionData from './DescriptionData';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { getDetailItem } from '../../common/api/Api';
import { useParams } from 'react-router-dom';
import { isInCart } from '../../utils/isInCart';
import { changeCartStatus } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

const Card = () => {
  const [nav, setNav] = useState([true, false, false]);

  const [data, setData] = useState({
    productId: 0,
    category: 'card',
    productName: '',
    companyName: '',
    companyImage: '',
    thumbnail: '',
    productURL: '',
    benefits: [],
    annualFee: 0,
  });

  const { category, id } = useParams();

  const [color, setColor] = useState(isInCart(Number(id)) ? 'red' : 'black');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetailItem(Number(id));
      setData(data?.resultData[0]);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header>
        <IoChevronBackOutline
          size="22"
          color="#353D4A"
          onClick={() => {
            navigate(-1);
          }}
          style={{ marginLeft: '-8px' }}
        />
        <AiOutlineHeart
          size="23"
          color={isInCart(Number(id)) ? 'red' : 'black'}
          onClick={() => {
            dispatch(changeCartStatus(data));
          }}
        />
      </Header>

      <IntroContainer>
        <p>{data.companyName}</p>
        <img src={data.thumbnail} alt="cardImage" />
        <h1>{data.productName}</h1>
        <h2>파이낸스 세븐이 추천하는 최고의 혜택</h2>
      </IntroContainer>

      <BenefitContainer>
        {data?.benefits?.map((benefit, index) => {
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
            <li>{`· 국내전용 ${data?.annualFee?.toLocaleString()}원 (기본${data?.annualFee?.toLocaleString()}원)`}</li>
            <li>{`· 국내외겸용 (UPI) ${data.annualFee?.toLocaleString()}원 (기본${data?.annualFee?.toLocaleString()}원)`}</li>
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
            {data?.benefits?.map((benefit, index) => {
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
      <Link to={data?.productURL}>
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

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
