import React, { useEffect } from 'react';
import './styling/timerDigital.scss';
import { useLocation } from 'react-router-dom';
import { useTimerLogic } from '../hooks/useTimerLogic';

const TimerDigital = () => {
  const location = useLocation();
  const startCount = location.state?.startCount || { minutes: 0, seconds: 0 };

  const { timeValues, isRunning, startTimer } = useTimerLogic({
    countdown: true,
    startValues: startCount,
  });

  useEffect(() => {
    console.log('Initial start count:', startCount);
    startTimer();
  }, [startTimer, startCount]);

  return (
    <>
      <section className="layout">
        <div className="timer-digital">
          <article className="timer-digital__container">
            <div className="timer-digital__container--minutes">
              {timeValues.minutes}
            </div>
            <span>:</span>
            <div className="timer-digital__container--seconds">
              {timeValues.seconds}
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default TimerDigital;
