import React from 'react';
import styled from 'styled-components';

const ALL = () => {
  return (
    <div>
      <div>
        <input type="radio" value="card" name="credit" id="two-type" defaultChecked />
        <label htmlFor="two-type">카드</label>
        <input type="radio" value="loan" name="credit" id="four-type" />
        <label htmlFor="four-type">대출</label>
        <input type="radio" value="savings" name="credit" id="eight-type" />
        <label htmlFor="eight-type">예/적금</label>
        <input type="radio" value="subscription" name="credit" id="eight-type" />
        <label htmlFor="eight-type">청약</label>
      </div>
    </div>
  );
};

const RadioInput = styled.input.attrs((props) => ({
  type: 'radio',
  value: props.value,
  name: props.name,
  id: props.id,
}))``;

export default ALL;
