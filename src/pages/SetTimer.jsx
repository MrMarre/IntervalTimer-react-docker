import React, { useState } from 'react';
import './styling/layout.scss';
import './styling/setTimer.scss';
import LeftVector from '../assets/Vector-left.svg';
import RightVector from '../assets/Vector-right.svg';
import { useNavigate } from 'react-router-dom';

// Prolly skicka iväg count som props
const SetTimer = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    console.log('Navigating with startCount:', { minutes: count, seconds: 0 });
    navigate('/timerDigital', {
      state: { startCount: { minutes: count, seconds: 0 } },
    });
  };
  console.log(count);

  return (
    <>
      <section className="layout timer">
        <article className="timer__incrementer">
          <img src={LeftVector} alt="left vector" onClick={decrement} />
          <section>
            <h2 className="timer__incrementer--minutes">{count}</h2>
            <p className="timer__incrementer--text">minutes</p>
          </section>
          <img src={RightVector} alt="left vector" onClick={increment} />
        </article>

        <article className="controls">
          <article className="controls__row-one">
            <input className="intervals" name="intervals" type="checkbox" />
            <label for="intervals">intervals</label>
          </article>
          <article className="row-two">
            <input className="break" name="break" type="checkbox" />
            <label for="break">5 min break / interval</label>
          </article>
          <button className="start" onClick={handleNavigate}>
            START TIMER
          </button>
        </article>
      </section>
    </>
  );
};

export default SetTimer;
