import React from 'react';
import './styling/layout.scss';
import './styling/setTimer.scss';
import Navbar from '../components/navbar/Navbar';
import LeftVector from '../assets/Vector-left.svg';
import RightVector from '../assets/Vector-right.svg';

const SetTimer = () => {
  return (
    <>
      <section className="layout timer">
        <Navbar />
        <article className="timer__incrementer">
          <img src={LeftVector} alt="left vector" />
          <h2 className="incrementer__minutes">10</h2>
          <p className="incrementer__text">Minutes</p>
          <img src={RightVector} alt="left vector" />
        </article>
        <article className="controls">
          <input type="checkbox" />
          <input type="checkbox" />

          <button></button>
        </article>
      </section>
    </>
  );
};

export default SetTimer;
