import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import KeywordsList from './KeywordsList';

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
      <KeywordsList />
    </Container>
  );
};

const Container = styled.div``;

const Desc = styled.div`
  margin-bottom: 60px;
  text-align: center;

  p {
    &:first-child {
      margin: 20px 0;
      font-size: var(--font-m);
      strong {
        color: var(--main-color);
        font-weight: 700;
      }
    }

    &:last-child {
      font-size: var(--font-s);
      line-height: 1.5;
      color: var(--gray-color);
    }
  }
`;

export default NoResults;
