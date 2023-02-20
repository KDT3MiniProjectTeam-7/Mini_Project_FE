import React from 'react';

const Agreement = (props: any) => {
  const handleClick = () => {
    props.setPage('UserInformation');
  };

  return (
    <>
      <div onClick={handleClick}>약관동의</div>
    </>
  );
};

export default Agreement;
