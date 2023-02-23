import { Link } from "react-router-dom"
import styled from "styled-components"

const SurveyComplate = () => {
  return (
    <Container>
        <div>
            <p>설문이 완료되었습니다.</p>
            <button><Link to={"/"}>추천 상품 보기</Link></button>
        </div>
    </Container>
  )
}

const Container = styled.main`
    position:relative;
    height:100vh;

    div {
        position:absolute;
        width:calc(100% - 40px);
        text-align: center;
        top:40%;
        transform:translateY(-50%);

        p {
            font-size:20px;
        }

        button {
            margin-top:20px;
            background:var(--main-color);
            height:30px;
            border-radius:20px;
            border:none;
            padding:5px 10px;
        
            a{
                color:#fff;
            }
        }
    }
`


export default SurveyComplate