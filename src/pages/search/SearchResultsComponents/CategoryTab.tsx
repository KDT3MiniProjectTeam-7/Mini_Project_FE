import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

interface TabProps {
  tabIndex: number;
  setTabIndex: (index: number) => void;
  categoryArr: { category: string; title: string; content: JSX.Element }[];
}

const CategoryTab = ({ tabIndex, setTabIndex, categoryArr }: TabProps) => {
  return (
    <Container>
      {categoryArr.map((list, index: number) => (
        <li key={list.title} className={index === tabIndex ? 'clicked' : ''} onClick={() => setTabIndex(index)}>
          {list.title}
        </li>
      ))}
    </Container>
  );
};

const Container = styled.ol`
  position: fixed;
  top: 68px;
  display: flex;
  justify-content: space-between;
  gap: 13px;

  width: 100%;
  max-width: 768px;
  padding: 0 20px;
  border-bottom: 1px solid #ebebeb;
  background-color: #fff;

  font-size: 14px;
  font-weight: 500;

  li {
    padding: 10px 8px;
    color: #5b5c5e;
    transition: all 0.3ms ease-in;

    &.clicked {
      color: #0e76ff;
      border-bottom: 3px solid #0e76ff;
    }
  }
`;
export default CategoryTab;
