import styled from 'styled-components';

interface TabProps {
  tabIndex: number;
  setTabIndex: (index: number) => void;
  categoryArr: { category: string; title: string; content: JSX.Element }[];
  isOnAllPage: boolean;
}

const CategoryTab = ({ tabIndex, setTabIndex, categoryArr, isOnAllPage }: TabProps) => {
  return (
    <Container isOnAllPage={isOnAllPage}>
      {categoryArr.map((list, index: number) => (
        <li key={list.title} className={index === tabIndex ? 'clicked' : ''} onClick={() => setTabIndex(index)}>
          {list.title}
        </li>
      ))}
    </Container>
  );
};

const Container = styled.ol<{ isOnAllPage: boolean }>`
  position: fixed;
  top: ${(props) => (props.isOnAllPage ? '50px' : '68px')};
  display: flex;
  justify-content: space-between;
  gap: 13px;

  width: 100%;
  max-width: 768px;
  height: 40px;
  padding: 0 20px;
  border-bottom: 1px solid #ebebeb;
  background-color: #fff;

  font-size: var(--font-m);

  li {
    padding: 8px 0;
    color: var(--gray-color);
    transition: all 0.3ms ease-in;

    &.clicked {
      color: var(--main-color);
      border-bottom: 3px solid var(--main-color);
      font-weight: 500;
    }
  }
`;
export default CategoryTab;
