import { useRef, useEffect, useState } from "react"
import styled from "styled-components"

const Main = () => {

  return (
    <>
      <Container>
        <Title>
          안녕하세요 <span>한수산</span>님 
          <br/>
          맞춤 추천 상품입니다.
        </Title>

        <RecommenSection>
          <button>추천 카드 상품</button>
          <div>
            <ContainerBox>
              <CardContainer>
                <p>
                  <span>신한은행</span>
                  신한카드 EVerywhere
                </p>
                <img  src="https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditBTDD41.png" alt="카드 이미지" />
              </CardContainer>
            </ContainerBox>

            <ContainerBox>
              <CardContainer>
                <p>
                  <span>현대카드</span>
                  My First Seduction the Pin
                </p>
                <img src="https://www.hyundaicard.com/img/com/card/028879GT_h.png" alt="카드 이미지" />
              </CardContainer>
            </ContainerBox>

            <ContainerBox>
              <CardContainer>
                <p>
                  <span>신한은행</span>
                  신한카드 플리
                </p>
                <img src="https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditPLAD26.png" alt="카드 이미지" />
              </CardContainer>
            </ContainerBox>
          </div>
        </RecommenSection>

        <RecommenSection>
          <button>추천 예적금 상품</button>
          <SavingsContainer>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hana_Bank_Logo_%28kor%29.svg/2560px-Hana_Bank_Logo_%28kor%29.svg.png" alt="카드 이미지" />
              <p>
                <span>하나은행</span>
                청년내일저축계좌
              </p>
          </SavingsContainer>
          <SavingsContainer>
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0135eb5e-1001-46a7-b26e-117f94c4fe99/20118_12809_1350_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230213T114759Z&X-Amz-Expires=86400&X-Amz-Signature=6c4b5d7f4b8f01a22e318ab55a82cc67cd183cc27589f1884f087e460d885ccb&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%2220118_12809_1350%2520%281%29.png%22&x-id=GetObject" alt="카드 이미지" />
              <p>
                <span>DGB대구은행</span>
                영플러스(YoungPlus)적금
              </p>
          </SavingsContainer>
          <SavingsContainer>
              <img src="https://simg.wooribank.com/img/intro/header/h1_01.png" alt="카드 이미지" />
              <p>
                <span>우리은행</span>
                스무살 우리 자유적금
              </p>
          </SavingsContainer>
        </RecommenSection>

        <RecommenSection>
          <button>추천 대출 상품</button>
          <LoanContainer>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kbank_logo.svg/2560px-Kbank_logo.svg.png" alt="카드 이미지" />
                <p>
                  <span>케이뱅크</span>
                  신용대출
                </p>
              </div>

              <div>
                <p>금리 <span>6.44%</span>~<span>10.49</span></p>
              </div>
          </LoanContainer>

          <LoanContainer>
              <div>
                <img src="https://mblogthumb-phinf.pstatic.net/MjAyMTAxMjRfMTg2/MDAxNjExNDcyNDQwNjMz.c4nA0jGYMPxo1ZkOCb9DxtC_pMoZJWo14c_VsdXbeuIg.3XJxeZziXV4TUIowr4dAJBJMY0xmVTIchgzH56o_C3sg.PNG.yeosu_bada/%EA%B4%91%EC%A3%BC%EC%9D%80%ED%96%89_%EB%A1%9C%EA%B3%A0_PNG_AI_%EC%9B%90%EB%B3%B8_%EB%8B%A4%EC%9A%B4.png?type=w800" alt="카드 이미지" />
                <p>
                  <span>광주은행</span>
                  모바일프라임론
                </p>
              </div>

              <div>
                <p>금리 <span>6.91%</span>~<span>12.71%</span></p>
              </div>
          </LoanContainer>

          <LoanContainer>
              <div>
                <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4f1d45c8-4451-4cc7-8323-e205dabb325f/IETVG3ZQIBHCDG3KZ3FSNPH7TQ_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230213T113921Z&X-Amz-Expires=86400&X-Amz-Signature=684480bc7ec0cf52c16b139c9935f2321a84d47889529e8238f16a194903b563&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22IETVG3ZQIBHCDG3KZ3FSNPH7TQ%2520%281%29.png%22&x-id=GetObject" alt="카드 이미지" />
                <p>
                  <span>토스뱅크</span>
                  신용대출
                </p>
              </div>

              <div>
                <p>금리 <span>6.44%</span>~<span>10.49</span></p>
              </div>
          </LoanContainer>
        </RecommenSection>

        <RecommenSection>
          <button>추천 청약 상품</button>
          <SubscriptionContainer>
              <div>
                <img src="https://simg.wooribank.com/img/intro/header/h1_01.png" alt="카드 이미지" />
                <p>
                  <span>우리은행</span>
                  주택청약종합저축
                </p>
              </div>

              <div>
                <p>최고금리<span> 2.1%</span></p>
              </div>
          </SubscriptionContainer>

          <SubscriptionContainer>
              <div>
                <img src="https://simg.wooribank.com/img/intro/header/h1_01.png" alt="카드 이미지" />
                <p>
                  <span>우리은행</span>
                  청년 우대형 주택청약종합저축
                </p>
              </div>

              <div>
                <p>최고금리<span> 3.6%</span></p>
              </div>
          </SubscriptionContainer>
        </RecommenSection>
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
  font-weight:900;
  line-height:1.5;

  span {
    color:rgb(14, 118, 255)
  }
`

const RecommenSection = styled.section`
  display:flex;
  flex-direction:column;
  gap:10px;

  button {
    border:none;
    border-radius:10px;
    padding:10px;
    font-size:18px;
    font-weight:900;
    position:relative;

    &::before {
      content:'';
      display:block;
      position:absolute;
      width:10px;
      height:10px;
      border-right:3px solid #000;
      border-bottom:3px solid #000;
      top:50%;
      right:20px;
      transform:translateY(-75%) rotate(45deg);

    }
  }

  & > div {
    display:flex;
    flex-direction:column;
    gap:10px;
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
    font-weight:900;
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
    max-width:150px;
    box-shadow:-5px 5px 12px 0px;
    border-radius:5%;
    overflow:hidden;
    position:relative;
  }
`

const SavingsContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:180px;
  padding:20px;
  border-radius:10px;
  overflow:hidden;
  background:linear-gradient( to bottom, #c7ff6d, #00d10e );

  p {
    font-size:20px;
    font-weight:900;
    line-height:1.2;
    color:#eee;

    span {
      display:block;
      margin-bottom:10px;
      font-size:15px;
    }
  }

  img {
    width:110px;
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
    height:100%;
    
    p { 
      font-size:20px;
      font-weight:900;
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
      font-weight:900;
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
    height:100%;
    
    p { 
      font-size:20px;
      font-weight:900;
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
      font-weight:900;
      text-align:end;
      color:#eee;
    }
  }
`

export default Main