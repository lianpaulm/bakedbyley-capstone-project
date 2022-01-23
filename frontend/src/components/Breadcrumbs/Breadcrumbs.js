import React from 'react';
import './Breadcrumbs.css';

const Breadcrumbs = (props) => {
  return (
    <div className="page-path">
      <div className="container">
        <p>{props.path}</p>
      </div>
    </div>
  );
};

export default Breadcrumbs;
