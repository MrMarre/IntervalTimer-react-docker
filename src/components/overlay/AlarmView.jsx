import React from 'react';
import './alarmView.scss';

import alarmIcon from '../../assets/alarmIcon.svg';
import { useNavigate } from 'react-router-dom';

const AlarmView = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <>
      <div className="overlay">
        <div className="overlay__content2">
          <div className="overlay__content--icon">
            <img className="alarmBell" src={alarmIcon}></img>
          </div>
          <h2 className="overlay__text">Times up!</h2>
          <button onClick={onClose} className="abort">
            SET NEW TIMER
          </button>
        </div>
      </div>
    </>
  );
};

export default AlarmView;
