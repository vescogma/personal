import React from 'react';

const Image = ({ style = {}, className = '', src }) => {
  return (
    <img
      src={ src }
      className={ `${ className }` }
      style={{ ...style }} />
  );
};

export default Image;
