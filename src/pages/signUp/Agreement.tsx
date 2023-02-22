import React from 'react';

const Agreement = (props: any) => {
  const handleClick = () => {
    props.setPage('UserInformation');
  };

  return (
    <>
      <button onClick={handleClick}>약관동의</button>
    </>
  );
};

export default Agreement;
