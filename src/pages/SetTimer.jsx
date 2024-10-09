import React from 'react';
import './styling/layout.scss';
import './styling/setTimer.scss';
import LeftVector from '../assets/Vector-left.svg';
import RightVector from '../assets/Vector-right.svg';

const SetTimer = () => {
  return (
    <>
      <section className="layout timer">
        <article className="timer__incrementer">
          <img src={LeftVector} alt="left vector" />
          <section>
            <h2 className="timer__incrementer--minutes">10</h2>
            <p className="timer__incrementer--text">minutes</p>
          </section>
          <img src={RightVector} alt="left vector" />
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
          <button className="start">START TIMER</button>
        </article>
      </section>
    </>
  );
};

export default SetTimer;
