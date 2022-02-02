import React from 'react';
import './Breadcrumbs.css';

const Breadcrumbs = (props) => {
  return (
    <div className="page-path">
      <div className="container">
        <p>{props.path}</p>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Breadcrumbs;
