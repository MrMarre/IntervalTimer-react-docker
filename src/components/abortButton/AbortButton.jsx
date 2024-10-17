import React from 'react';
import './abortButton.scss';
import { useNavigate } from 'react-router-dom';

const AbortButton = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/setTimer');
  };

  return (
    <>
      <button onClick={handleNavigate} className="abort">
        ABORT TIMER
      </button>
    </>
  );
};

export default AbortButton;
