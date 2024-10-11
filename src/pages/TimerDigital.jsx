import React, { useEffect } from 'react';
import './styling/timerDigital.scss';
import { useLocation } from 'react-router-dom';
import { useTimerLogic } from '../hooks/useTimerLogic';
import AbortButton from '../components/abortButton/AbortButton';

const TimerDigital = () => {
  const location = useLocation();
  const startCount = location.state?.startCount || { minutes: 0, seconds: 0 };

  const { timeValues, startTimer } = useTimerLogic({
    countdown: true,
    startValues: startCount,
  });

  const formattedMinutes = String(timeValues.minutes).padStart(2, '0');
  const formattedSeconds = String(timeValues.seconds).padStart(2, '0');

  useEffect(() => {
    startTimer();
  }, [startTimer, startCount]);

  return (
    <>
      <section className="layout">
        <div className="timer-digital">
          <article className="timer-digital__container">
            <div className="timer-digital__container--minutes">
              {formattedMinutes}
            </div>
            <span>:</span>
            <div className="timer-digital__container--seconds">
              {formattedSeconds}
            </div>
            <AbortButton />
          </article>
        </div>
      </section>
    </>
  );
};

export default TimerDigital;
