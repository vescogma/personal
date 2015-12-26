import React from 'react';

const Content = ({ children, style = {}, className = '' }) => {
  return (
    <div
      className={ `p3 ${ className }` }
      style={{ ...style }}>
      { children }
    </div>
  );
};

export default Content;
