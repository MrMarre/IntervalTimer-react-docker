import React, { useEffect } from 'react';
import './styling/timerDigital.scss';
import { useLocation } from 'react-router-dom';
import { useTimerLogic } from '../hooks/useTimerLogic';
import AbortButton from '../components/abortButton/AbortButton';
import { useTimer } from '../providers/TimerProvider';

const TimerDigital = () => {
  const location = useLocation();
  // const startCount = location.state?.startCount || { minutes: 0, seconds: 0 };
  const { timeValues } = useTimer();

  //*  Trycker du på tiden så pausa timer
  const formattedMinutes = timeValues
    ? String(timeValues.minutes).padStart(2, '0')
    : '00';
  const formattedSeconds = timeValues
    ? String(timeValues.seconds).padStart(2, '0')
    : '00';

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
