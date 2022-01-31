import React, { useEffect } from 'react';
import './Alert.css';

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="alert-overlay">
      <p className={`alert alert-${type}`}>{msg}</p>;
    </div>
  );
};

export default Alert;
