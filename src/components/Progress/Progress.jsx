import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Progress.css'; 

const Progress = () => {
  const progressValue = 50; 
  return (
    <div className="progress-containers">
      <div className="progress-card">
        <CircularProgressbar
          value={progressValue}
          text={`${progressValue}%`}
          styles={buildStyles({ textSize: '16px' })}
        />
        <div className="heading">
        <strong><span>Your Progress report</span></strong>
        </div>
      </div>
    </div>
  );
}

export default Progress;




