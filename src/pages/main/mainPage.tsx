import axios from "axios";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

const Main = () => {
  interface data {
    status : string
    email : string
    name : string
    tag : string[]
  }
  
  // toggle state
  const [toggleBtn1, setToggleBtn1] = useState<boolean>(false);
  const [toggleBtn2, setToggleBtn2] = useState<boolean>(false);
  const [toggleBtn3, setToggleBtn3] = useState<boolean>(false);
  const [toggleBtn4, setToggleBtn4] = useState<boolean>(false);

  // 설문 유무 임의 state
  const [userState, setUserState] = useState(false);

  const toggleFn = (btnType:number) => {
    switch(btnType){
      case 1 :
        toggleBtn1 ? setToggleBtn1(false) : setToggleBtn1(true)
        break
      case 2 :  
        toggleBtn2 ? setToggleBtn2(false) : setToggleBtn2(true)
        break
      case 3 : 
        toggleBtn3 ? setToggleBtn3(false) : setToggleBtn3(true)
        break
      case 4 : 
        toggleBtn4 ? setToggleBtn4(false) : setToggleBtn4(true)
        break
      default :
        null
        break
    }
  }

  const data = {
    card : [
      {
        name : '신한은행',
        title : '신한카드 EVerywhere',
        img : 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditBTDD41.png',
      },
      {
        name : '신한은행',
        title : '신한카드 플리',
        img : 'https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditPLAD26.png',
      },
      {
        name : '현대카드',
        title : 'My First Seduction the Pin',
        img : 'https://www.hyundaicard.com/img/com/card/028879GT_h.png',
      },
    ],
    savings : [
      {
        name : '하나은행',
        title : '청년내일저축계좌',
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hana_Bank_Logo_%28kor%29.svg/2560px-Hana_Bank_Logo_%28kor%29.svg.png',
      },
      {
        name : 'DGB대구은행',
        title : '영플러스(YoungPlus)적금',
        img : 'https://ifh.cc/g/tN8fPq.png',
      },
      {
        name : '우리은행',
        title : '스무살 우리 자유적금',
        img : 'https://simg.wooribank.com/img/intro/header/h1_01.png',
      },
    ],
    loan : [
      {
        name : '케이뱅크',
        title : '신용대출',
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png',
        min : '6.44%',
        max : '10.49%'
      },
      {
        name : '광주은행',
        title : '모바일프라임론',
        img : 'https://mblogthumb-phinf.pstatic.net/MjAyMTAxMjRfMTg2/MDAxNjExNDcyNDQwNjMz.c4nA0jGYMPxo1ZkOCb9DxtC_pMoZJWo14c_VsdXbeuIg.3XJxeZziXV4TUIowr4dAJBJMY0xmVTIchgzH56o_C3sg.PNG.yeosu_bada/%EA%B4%91%EC%A3%BC%EC%9D%80%ED%96%89_%EB%A1%9C%EA%B3%A0_PNG_AI_%EC%9B%90%EB%B3%B8_%EB%8B%A4%EC%9A%B4.png?type=w800',
        min : '6.44%',
        max : '10.49%'
      },
      {
        name : '토스뱅크',
        title : '신용대출',
        img : 'https://ifh.cc/g/joRq1Q.png',
        min : '6.44%',
        max : '10.49%'
      },
    ],
    subscription : [
      {
        name : '우리은행',
        title : '주택청약종합저축',
        img : 'https://simg.wooribank.com/img/intro/header/h1_01.png',
        max : '2.1%'
      },
      {
        name : '우리은행',
        title : '청년 우대형 주택청약종합저축',
        img : 'https://simg.wooribank.com/img/intro/header/h1_01.png',
        max : '3.6%'
      },
    ]

  }

  return (
    <>
        <Container>
            <Title>
              안녕하세요 <span>한수산</span>님
              <br/>
              맞춤 추천 상품입니다.
            </Title>
      {
        userState ? 
          <>
            <RecommenSection>
              <h2 onClick={() => {toggleFn(1)}} className={toggleBtn1 ? "showMenu" : undefined}>추천 카드 상품</h2>
              <div className={toggleBtn1 ? "showMenu" : undefined} style={{'maxHeight':(data.card.length * 170) + (data.card.length * 10) + 'px'}}>
              {
                data.card.map((item, index) => {
                  return (
                    <ContainerBox key={index}>
                      <CardContainer>
                        <p>
                          <span>{item.name}</span>
                          {item.title}
                        </p>
                        <img  src={item.img} alt="카드 이미지" />
                      </CardContainer>
                    </ContainerBox>
                  )
                })
              }
              </div>
            </RecommenSection>

            <RecommenSection>
              <h2 onClick={() => {toggleFn(2)}} className={toggleBtn2 ? "showMenu" : undefined}>추천 예적금 상품</h2>
              <div className={toggleBtn2 ? "showMenu" : undefined} style={{'maxHeight':(data.savings.length * 170) + (data.savings.length * 10) + 'px'}}>
              {
                data.savings.map((item, index) => {
                  return (
                    <SavingsContainer key={index}>
                      <img src={item.img} alt="카드 이미지" />
                      <p>
                        <span>{item.name}</span>
                        {item.title}
                      </p>
                    </SavingsContainer>
                  )
                })
              }
              </div>
            </RecommenSection>

            <RecommenSection>
              <h2 onClick={() => {toggleFn(3)}} className={toggleBtn3 ? "showMenu" : undefined}>추천 대출 상품</h2>
              <div className={toggleBtn3 ? "showMenu" : undefined} style={{'maxHeight':(data.loan.length * 170) + (data.loan.length * 10) + 'px'}}>
              {
                data.loan.map((item, index) => {
                  return (
                    <LoanContainer key={index}>
                        <div>
                          <img src={item.img} alt="카드 이미지" />
                          <p>
                            <span>{item.name}</span>
                            {item.title}
                          </p>
                        </div>
                        <div>
                          <p>금리 <span>{item.min}</span>~<span>{item.max}</span></p>
                        </div>
                    </LoanContainer>
                  )
                })
              }
              </div>
            </RecommenSection>

            <RecommenSection>
              <h2 onClick={() => {toggleFn(4)}} className={toggleBtn4 ? "showMenu" : undefined}>추천 청약 상품</h2>
              <div className={toggleBtn4 ? "showMenu" : undefined } style={{'maxHeight':(data.subscription.length * 170) + (data.subscription.length * 10) + 'px'}}> 
              {
                data.subscription.map((item, index) => {
                  return (
                    <SubscriptionContainer key={index}>
                      <div>
                        <img src={item.img} alt="카드 이미지" />
                        <p>
                          <span>{item.name}</span>
                          {item.title}
                        </p>
                      </div>
                      <div>
                        <p>최고금리<span> {item.max}</span></p>
                      </div>
                    </SubscriptionContainer>
                  )
                })
              }
              </div>
            </RecommenSection>
          </>
          :
          <DefaultStateContainer>
            <h2>
              아직 설문조사를 하지 않으셨습니다! <br/>
              간단한 설문조사를 거치면 <br/>
              상품을 추천받으실 수 있습니다.
            </h2>
            <button>
              <Link to="/survey">설문하기</Link>
            </button>
          </DefaultStateContainer>
        } 
      </Container>
    </>
  )
}

const Container = styled.main`
  display:flex;
  flex-direction:column;
  gap:20px;
`

const Title = styled.h1`
  font-size:22px;
  font-weight:500;
  line-height:1.5;
  margin-top:30px;

  span {
    color:rgb(14, 118, 255)
  }
`

const RecommenSection = styled.section`
  display:flex;
  flex-direction:column;
  gap:10px;
  overflow:hidden;

  h2 {
    border:none;
    background:#fff;
    padding:10px;
    font-size:16px;
    font-weight:500;
    position:relative;
    text-align:left;
    z-index: 2;

    &::before {
      content:'';
      display:block;
      position:absolute;
      width:7px;
      height:7px;
      border-right:2px solid rgb(14, 118, 255);
      border-bottom:2px solid rgb(14, 118, 255);
      top:50%;
      right:15px;
      transform:translateY(-25%) rotate(225deg);
    }

    &.showMenu::before {
      transform:translateY(-75%) rotate(45deg);
    }
  }

  & > div {
    display:flex;
    flex-direction:column;
    gap:10px;
    transition:.5s all;

    &.showMenu {
      transition:.5s all;
      z-index:-1;
      max-height:0 !important;
    }
  }
`

const ContainerBox = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
`

const CardContainer = styled.div`
  height:170px;
  display:flex;
  justify-content:space-between;
  align-items:end;
  padding:50px 15px 25px;
  background:linear-gradient( to bottom, #61bdf3, #3936f3 );
  border-radius:10px;
  
  p {
    font-size:20px;
    font-weight:500;
    line-height:1.2;
    color:#eee;
    padding-right:10px;

    span {
      display:block;
      margin-bottom:10px;
      font-size:15px;
    }
  }
  
  img {
    max-height:110px;
    max-width:140px;
    box-shadow:-5px 5px 12px 0px;
    border-radius:5%;
    overflow:hidden;
    position:relative;
  }
`

const SavingsContainer = styled.div`
  height:170px;
  padding:20px;
  border-radius:10px;
  background:linear-gradient( to bottom, #c7ff6d, #00d10e );

  p {
    margin-top:55px;
    font-size:20px;
    font-weight:500;
    line-height:1.2;
    color:#eee;

    span {
      display:block;
      margin-bottom:10px;
      font-size:15px;
    }
  }

  img {
    max-height: 25px;
    max-width:110px;
  }
`

const LoanContainer = styled.div`
  display:flex;
  flex-direction:row !important;
  align-items:end;
  background:linear-gradient( to bottom, #e089fd, #b400eb );
  padding:20px;
  height:170px;
  border-radius:10px;

  img {
    width:100px;
  }

  & > div {
    width:50%;
  }

  & > div:nth-child(1) {
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:130px;
    
    p { 
      font-size:20px;
      font-weight:500;
      color:#eee;
      
      span {
        display:block;
        margin-bottom:10px;
        font-size:15px;
      }
    }
  }

  & > div:nth-child(2) {
    p {
      font-size:15px;
      font-weight:500;
      text-align:end;
      color:#eee;
    }
  }
`

const SubscriptionContainer = styled.div`
display:flex;
  flex-direction:row !important;
  align-items:end;
  background:linear-gradient( to bottom, #faa4f3, #ff29a6 );
  padding:20px;
  height:170px;
  border-radius:10px;

  img {
    width:100px;
  }

  & > div {
    width:50%;
  }

  & > div:nth-child(1) {
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:130px;
    
    p { 
      font-size:20px;
      font-weight:500;
      color:#eee;
      line-height:1.2;
      
      span {
        display:block;
        margin-bottom:10px;
        font-size:15px;
      }
    }
  }

  & > div:nth-child(2) {
    p {
      font-size:15px;
      font-weight:500;
      text-align:end;
      color:#eee;
    }
  }
`

const DefaultStateContainer = styled.section`
  width:300px;
  display:flex;
  flex-direction:column;
  align-items:center;
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);

  h2 {
    line-height:1.5;
    font-size:15px;
    font-weight: 500;
  }

  button {
    margin-top:20px;
    padding:7px 15px;
    background:rgb(14,118,255);
    border:none;
    border-radius:20px;

    a {
      display:block;
      color:#fff;
      font-size:15px;
      font-weight:500;
    }
  }
`

export default Main