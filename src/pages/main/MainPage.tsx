import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getRecommendation } from '../../common/api/Api';
import { ReducerType } from '../../store/store';
import { user } from '../../store/userSlice';

const Main = () => {
  const [data, setData] = useState<any>();

  // toggle state
  const [toggleBtn1, setToggleBtn1] = useState<boolean>(false);
  const [toggleBtn2, setToggleBtn2] = useState<boolean>(false);
  const [toggleBtn3, setToggleBtn3] = useState<boolean>(false);
  const [toggleBtn4, setToggleBtn4] = useState<boolean>(false);

  const toggleFn = (btnType: number) => {
    switch (btnType) {
      case 1:
        toggleBtn1 ? setToggleBtn1(false) : setToggleBtn1(true);
        break;
      case 2:
        toggleBtn2 ? setToggleBtn2(false) : setToggleBtn2(true);
        break;
      case 3:
        toggleBtn3 ? setToggleBtn3(false) : setToggleBtn3(true);
        break;
      case 4:
        toggleBtn4 ? setToggleBtn4(false) : setToggleBtn4(true);
        break;
      default:
        null;
        break;
    }
  };

  const userData = useSelector<ReducerType, user>((state) => state.user);

  useEffect(() => {
    const getUser = async () => {
      const getData = await getRecommendation(userData.tags.replaceAll('\\n', '&'));
      setData(getData);
    };
    getUser();
  }, [userData]);

  interface Product {
    annualFee?: number;
    benefits?: string[];
    category: string;
    companyImage: string;
    companyName: string;
    productId: number;
    productName: string;
    productURL: string;
    thumbnail: string | undefined;
    highRate?: string;
    lowRate?: string;
    qualification?: string[];
    bound?: string[] | number;
    aboutRate?: string[];
  }

  return (
    <>
      <Container>
        <Title>
          안녕하세요 <span>{userData.name}</span>님
          <br />
          맞춤 추천 상품입니다.
        </Title>
        
        {data ? (
          <>
            {data.card.length > 0 && (
              <RecommenSection>
                <h2
                  onClick={() => {
                    toggleFn(1);
                  }}
                  className={toggleBtn1 ? 'showMenu' : undefined}
                >
                  추천 카드 상품
                </h2>

                <div
                  className={toggleBtn1 ? 'showMenu' : undefined}
                  style={{ maxHeight: data.card.length * 170 + data.card.length * 10 + 'px' }}
                >
                  {data.card.map((item: Product) => {
                    return (
                      <ContainerBox key={item.productId}>
                        <CardContainer>
                          <p>
                            <span>{item.companyName}</span>
                            {item.productName}
                          </p>
                          <img src={item.thumbnail} alt="카드 이미지" />
                        </CardContainer>
                      </ContainerBox>
                    );
                  })}
                </div>
              </RecommenSection>
            )}

            {data.savings.length > 0 && (
              <RecommenSection>
                <h2
                  onClick={() => {
                    toggleFn(2);
                  }}
                  className={toggleBtn2 ? 'showMenu' : undefined}
                >
                  추천 예적금 상품
                </h2>

                <div
                  className={toggleBtn2 ? 'showMenu' : undefined}
                  style={{ maxHeight: data.savings.length * 170 + data.savings.length * 10 + 'px' }}
                >
                  {data.savings.map((item: Product) => {
                    return (
                      <SavingsContainer key={item.productId}>
                        <img src={item.companyImage} alt="회사 로고" />
                        <p>
                          <span>{item.companyName}</span>
                          {item.productName}
                        </p>
                      </SavingsContainer>
                    );
                  })}
                </div>
              </RecommenSection>
            )}

            {data.loan.length > 0 && (
              <RecommenSection>
                <h2
                  onClick={() => {
                    toggleFn(3);
                  }}
                  className={toggleBtn3 ? 'showMenu' : undefined}
                >
                  추천 대출 상품
                </h2>
                <div
                  className={toggleBtn3 ? 'showMenu' : undefined}
                  style={{ maxHeight: data.loan.length * 170 + data.loan.length * 10 + 'px' }}
                >
                  {data.loan.map((item: Product) => {
                    return (
                      <LoanContainer key={item.productId}>
                        <div>
                          <img src={item.companyImage} alt="카드 이미지" />
                          <p>
                            <span>{item.companyName}</span>
                            {item.productName}
                          </p>
                        </div>
                        <div>
                          <p>
                            금리 <span>{item.lowRate}</span>~<span>{item.highRate}</span>
                          </p>
                        </div>
                      </LoanContainer>
                    );
                  })}
                </div>
              </RecommenSection>
            )}

            {data.subscription.length > 0 && (
              <RecommenSection>
                <h2
                  onClick={() => {
                    toggleFn(4);
                  }}
                  className={toggleBtn4 ? 'showMenu' : undefined}
                >
                  추천 청약 상품
                </h2>
                <div
                  className={toggleBtn4 ? 'showMenu' : undefined}
                  style={{ maxHeight: data.subscription.length * 170 + data.subscription.length * 10 + 'px' }}
                >
                  {data.subscription.map((item: Product) => {
                    return (
                      <SubscriptionContainer key={item.productId}>
                        <div>
                          <img src={item.companyImage} alt="카드 이미지" />
                          <p>
                            <span>{item.companyName}</span>
                            {item.productName}
                          </p>
                        </div>
                        <div>
                          <p>
                            최고금리<span> {item.highRate}</span>
                          </p>
                        </div>
                      </SubscriptionContainer>
                    );
                  })}
                </div>
              </RecommenSection>
            )}
          </>
        ) : (
          <DefaultStateContainer>
            <h2>
              아직 설문조사를 하지 않으셨습니다! <br />
              간단한 설문조사를 거치면 <br />
              상품을 추천받으실 수 있습니다.
            </h2>
            <button>
              <Link to="/survey">설문하기</Link>
            </button>
          </DefaultStateContainer>
        )}
      </Container>
    </>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 30px;

  span {
    color: var(--main-color);
  }
`;

const RecommenSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;

  h2 {
    border: none;
    background: #fff;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    text-align: left;
    z-index: 2;

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 7px;
      height: 7px;
      border-right: 2px solid var(--main-color);
      border-bottom: 2px solid var(--main-color);
      top: 50%;
      right: 15px;
      transform: translateY(-25%) rotate(225deg);
    }

    &.showMenu::before {
      transform: translateY(-75%) rotate(45deg);
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: 0.5s all;

    &.showMenu {
      transition: 0.5s all;
      z-index: -1;
      max-height: 0 !important;
    }
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
  background: linear-gradient(to bottom, #61bdf3, #3936f3);
  border-radius: 10px;

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    color: #eee;
    padding-right: 10px;

    span {
      display: block;
      margin-bottom: 10px;
      font-size: 15px;
    }
  }

  img {
    max-height: 110px;
    max-width: 140px;
    box-shadow: -5px 5px 12px 0px;
    border-radius: 5%;
    overflow: hidden;
    position: relative;
  }
`;

const SavingsContainer = styled.div`
  height: 170px;
  padding: 20px;
  border-radius: 10px;
  background: linear-gradient(to bottom, #c7ff6d, #00d10e);

  p {
    margin-top: 55px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    color: #eee;

    span {
      display: block;
      margin-bottom: 10px;
      font-size: 15px;
    }
  }

  img {
    max-height: 25px;
    max-width: 110px;
  }
`;

const LoanContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: end;
  background: linear-gradient(to bottom, #e089fd, #b400eb);
  padding: 20px;
  height: 170px;
  border-radius: 10px;

  img {
    width: 100px;
  }

  & > div {
    width: 50%;
  }

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 130px;

    p {
      font-size: 20px;
      font-weight: 500;
      color: #eee;

      span {
        display: block;
        margin-bottom: 10px;
        font-size: 15px;
      }
    }
  }

  & > div:nth-child(2) {
    p {
      font-size: 15px;
      font-weight: 500;
      text-align: end;
      color: #eee;
    }
  }
`;

const SubscriptionContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: end;
  background: linear-gradient(to bottom, #faa4f3, #ff29a6);
  padding: 20px;
  height: 170px;
  border-radius: 10px;

  img {
    width: 100px;
  }

  & > div {
    width: 50%;
  }

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 130px;

    p {
      font-size: 20px;
      font-weight: 500;
      color: #eee;
      line-height: 1.2;

      span {
        display: block;
        margin-bottom: 10px;
        font-size: 15px;
      }
    }
  }

  & > div:nth-child(2) {
    p {
      font-size: 15px;
      font-weight: 500;
      text-align: end;
      color: #eee;
    }
  }
`;

const DefaultStateContainer = styled.section`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  h2 {
    line-height: 1.5;
    font-size: 15px;
    font-weight: 500;
  }

  button {
    margin-top: 20px;
    padding: 0 15px;
    background: var(--main-color);
    border: none;
    border-radius: 20px;
    height: 35px;

    a {
      display: block;
      color: #fff;
      font-size: 15px;
      font-weight: 500;
      line-height: 35px;
    }
  }
`;

export default Main;
