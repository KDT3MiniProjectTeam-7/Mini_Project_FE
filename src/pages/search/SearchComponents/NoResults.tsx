import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const NoResults = () => {
  const params = useParams();
  return (
    <Container>
      <Desc>
        <p>
          <strong>'{params.keywords}'</strong>의 검색결과가 없어요
        </p>
        <p>
          * 단어의 철자가 정확한지 확인해보세요.
          <br />
          * 한글을 영어로 혹은 영어를 한글로 입력해보세요.
          <br />* 두 단어 이상의 검색어인 경우, 띄어쓰기를 변경해보세요.
        </p>
      </Desc>
    </Container>
  );
};

const Container = styled.div``;
const Desc = styled.div`
  text-align: center;

  p {
    &:first-child {
      margin: 20px 0;
      font-size: 15px;
      strong {
        color: #0e76ff;
        font-weight: 700;
      }
    }

    &:last-child {
      font-size: 8px;
      line-height: 1.5;
      color: #7d838f;
    }
  }
`;

export default NoResults;
