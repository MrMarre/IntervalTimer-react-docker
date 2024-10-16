import React from 'react';
import './alarmView.scss';

import alarmIcon from '../../assets/alarmIcon.svg';

const AlarmView = () => {
  return (
    <>
      <div className="overlay">
        <div className="overlay__content">
          <div className="overlay__content--icon">
            <img className="alarmBell" src={alarmIcon}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlarmView;
