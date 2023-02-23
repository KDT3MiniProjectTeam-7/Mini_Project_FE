import styled from "styled-components"

const SurveyComplate = () => {
  return (
    <Container>
        <div>
            <p>설문이 완료되었습니다</p>
            <button>추천 상품 보기</button>
        </div>
    </Container>
  )
}

const Container = styled.main`
    position:relative;
    height:100vh;

    div {
        position:absolute;
        text-align: center;
        top:50%;
        transform:translate(-50%, -50%);

        p {
            font-size:20px;
        }
    }
`


export default SurveyComplate