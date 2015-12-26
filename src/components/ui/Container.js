import React from 'react';

const Container = ({ children, style = {}, className = '' }) => {
  return (
    <div
      className={ `container ${ className }` }
      style={{ ...style }}>
      <div className="clearfix">
        { children }
      </div>
    </div>
  );
};

export default Container;
