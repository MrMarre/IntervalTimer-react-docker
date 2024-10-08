import React from 'react';
import './styling/layout.scss';
import Logo from '../assets/logo.svg';
import './styling/landing.scss';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/setTimer');
  };

  return (
    <>
      <main className="layout loading">
        <section className="loading__section" onClick={handleNavigate}>
          <button className="loading__button">
            <img src={Logo} alt="logo" />
          </button>
          <h2 className="loading__header">INTERVAL</h2>
          <p className="loading__text">For all your timing needs</p>
        </section>
      </main>
    </>
  );
};

export default Landing;
