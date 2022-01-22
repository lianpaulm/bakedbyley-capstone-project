import React, { useState } from 'react';
// icons
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="question" onClick={() => setShowInfo(!showInfo)}>
      <div className="question-header">
        <p>{title}</p>
        <div className="question-icon">
          {showInfo ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      {showInfo && <p className="info">{info}</p>}
    </div>
  );
};

export default Question;
