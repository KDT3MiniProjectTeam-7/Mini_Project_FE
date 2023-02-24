import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getCart, getRecommendation, getUserInfo } from '../../common/api/Api';
import { setCartItems } from '../../store/cartSlice';
import { ReducerType } from '../../store/store';
import { setRecommendProducts, ProductAll, Product } from '../../store/recommendProductsSlice';
import { setUserData, user } from '../../store/userSlice';

//state 를 객체로 선언
//useReducer 사용 가장 추천

const Main = () => {
  const [showProduct, setShowProduct] = useState(false);

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

  const dispatch = useDispatch();

  let userData = useSelector<ReducerType, user>((state) => state.user);
  let userRecommendProduct = useSelector<ReducerType, ProductAll>((state) => state.recommendProducts);

  useEffect(() => {
    // 유저데이터 받아서 로컬 저장
    const getUserData = async () => {
      const userData = await getUserInfo();
      dispatch(setUserData(userData));
    };
    getUserData();

    // 카트데이터 받아서 로컬 저장
    const getCartData = async () => {
      const data = await getCart();
      dispatch(setCartItems(data!.resultData));
    };
    getCartData();
  }, []);

  useEffect(() => {
    // 로컬에 저장된 유저데이터 활용 추천상품 로칼 저장
    const getUser = async () => {
      if (userData.tags) {
        const getData = await getRecommendation(userData.tags.replaceAll('\\n', '&'));
        dispatch(setRecommendProducts(getData));
        setShowProduct(true);
      } else {
        setShowProduct(false);
      }
    };
    getUser();
  }, [userData]);

  return (
    <>
      <Container>
        <Title>
          안녕하세요 <span>{userData.name}</span>님
          <br />
          맞춤 추천 상품입니다.
        </Title>

        {userRecommendProduct && showProduct ? (
          <>
            {userRecommendProduct.card?.length > 0 && (
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
                  style={{
                    maxHeight: userRecommendProduct.card.length * 170 + userRecommendProduct.card.length * 10 + 'px',
                  }}
                >
                  {userRecommendProduct.card.map((item: Product) => {
                    return (
                      <Link to={`/detail/card/${item.productId}`} key={item.productId}>
                        <ContainerBox>
                          <CardContainer>
                            <p>
                              <span>{item.companyName}</span>
                              {item.productName}
                            </p>
                            <img src={item.thumbnail} alt="카드 이미지" />
                          </CardContainer>
                        </ContainerBox>
                      </Link>
                    );
                  })}
                </div>
              </RecommenSection>
            )}

            {userRecommendProduct.savings?.length > 0 && (
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
                  style={{
                    maxHeight:
                      userRecommendProduct.savings.length * 170 + userRecommendProduct.savings.length * 10 + 'px',
                  }}
                >
                  {userRecommendProduct.savings.map((item: Product) => {
                    return (
                      <Link to={`/detail/savings/${item.productId}`} key={item.productId}>
                        <SavingsContainer>
                          <img src={item.companyImage} alt="회사 로고" />
                          <p>
                            <span>{item.companyName}</span>
                            {item.productName}
                          </p>
                        </SavingsContainer>
                      </Link>
                    );
                  })}
                </div>
              </RecommenSection>
            )}

            {userRecommendProduct.loan?.length > 0 && (
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
                  style={{
                    maxHeight: userRecommendProduct.loan.length * 170 + userRecommendProduct.loan.length * 10 + 'px',
                  }}
                >
                  {userRecommendProduct.loan.map((item: Product) => {
                    return (
                      <Link to={`/detail/loan/${item.productId}`} key={item.productId}>
                        <LoanContainer>
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
                      </Link>
                    );
                  })}
                </div>
              </RecommenSection>
            )}

            {userRecommendProduct.subscription?.length > 0 && (
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
                  style={{
                    maxHeight:
                      userRecommendProduct.subscription.length * 170 +
                      userRecommendProduct.subscription.length * 10 +
                      'px',
                  }}
                >
                  {userRecommendProduct.subscription.map((item: Product) => {
                    return (
                      <Link to={`/detail/subscription/${item.productId}`} key={item.productId}>
                        <SubscriptionContainer>
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
                      </Link>
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
  margin-bottom: 150px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 10px;

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
    padding-right: 30px;

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
    width: 80px;
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
    width: 80px;
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

const SubscriptionContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: end;
  background: linear-gradient(to bottom, #faa4f3, #ff29a6);
  padding: 20px;
  height: 170px;
  border-radius: 10px;

  img {
    width: 80px;
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
