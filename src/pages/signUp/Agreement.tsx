import React from 'react';

const Agreement = (props: any) => {
  const handleClick = () => {
    props.setPage('UserInformation');
  };

  return (
    <>
      <div onClick={handleClick}>약관 블라블라블라</div>
    </>
  );
};

export default Agreement;
