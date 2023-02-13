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
          <button>카드 추천 상품</button>
          <ContainerBox>
            <CardContainer>
              <p>
                <span>신한은행</span>
                신한카드 EVerywhere
              </p>
              <img src="https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditBTDD41.png" alt="카드 이미지" />
            </CardContainer>
          </ContainerBox>

          <ContainerBox>
            <CardContainer>
              <p>
                <span>현대카드</span>
                LOCA Mobility 반띵 카드
              </p>
              <img src="https://vertical.pstatic.net/vertical-cardad/creatives/LO/10227/LO_10227_20230131-123810_ver.png" alt="카드 이미지" />
            </CardContainer>
          </ContainerBox>
        </RecommenSection>


      </Container>
    </>
  )
}

const Container = styled.main`
  display:flex;
  flex-direction:column;
  gap:20px;
  border:1px solid #ddd;
  height:500px;

`

const Title = styled.h1`
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
`

const ContainerBox = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
`

const CardContainer = styled.div`
  max-height:150px;
  display:flex;
  justify-content:space-between;
  align-items:end;
  padding:50px 15px 20px;
  background:linear-gradient( to bottom, #cecece, #333333 );
  border-radius:10px;

  p {
    font-size:20px;
    font-weight:900;
    line-height:1.2;
    color:#fff;

    span {
      display:block;
      margin-bottom:10px;
      font-size:15px;
    }
  }
  
  img {
    width:40%;
    max-width:200px;
    box-shadow:-5px 5px 10px 0px;
    border-radius:5%;
  }
`

export default Main