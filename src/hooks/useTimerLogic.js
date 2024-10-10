import { useState, useEffect } from 'react';

import Timer from 'easytimer.js';

export const useTimerLogic = ({ countdown = true, startValues }) => {
  const [timer] = useState(() => new Timer());
  const [timeValues, setTimeValues] = useState({
    secondTenths: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const updateHandler = () => {
      const currentValues = timer.getTimeValues();
      setTimeValues({ ...currentValues });
      console.log('Time values updated:', currentValues);
    };

    timer.addEventListener('secondsUpdated', updateHandler);

    return () => {
      timer.stop();
      timer.removeEventListener('secondsUpdated', updateHandler);
    };
  }, [timer]);

  const startTimer = () => {
    if (!isRunning && countdown) {
      const { minutes, seconds } = startValues;
      const totalSeconds = minutes * 60 + seconds;
      console.log('Starting timer with values:', startValues);
      timer.start({ countdown: true, startValues: { seconds: totalSeconds } });
      setIsRunning(true);
    }
  };

  return {
    timeValues,
    isRunning,
    startTimer,
    stopTimer: () => {
      timer.stop();
      setIsRunning(false);
    },
  };
};

// export const useTimerLogic = ({ countdown = true, startValues }) => {
//   const [timer] = useState(new Timer());

//   const [timeValues, setTimeValues] = useState({
//     secondTenths: 0,
//     seconds: 0,
//     minutes: 0,
//     hours: 0,
//     days: 0,
//   });

//   const [isRunning, setIsRunning] = useState(false);
//   console.log(isRunning);

//   useEffect(() => {
//     const updateHandler = () => {
//       const currentValues = timer.getTimeValues();

//       console.log('Current values from timer before setting:', currentValues);

//       setTimeValues(currentValues);

//       console.log('Time values updated:', currentValues);
//     };
//     console.log('Adding event listener for secondsUpdated');
//     timer.addEventListener('secondsUpdated', updateHandler);

//     if (countdown && !isRunning) {
//       const { minutes, seconds } = startValues;
//       const totalSeconds = minutes * 60 + seconds;

//       console.log('Starting timer with values', startValues);
//       console.log('Total seconds to start', totalSeconds);

//       timer.start({ startValues: { seconds: totalSeconds } });

//       setIsRunning(true);

//       console.log('Timer started');
//     }

//     return () => {
//       timer.stop();
//       timer.removeEventListener('secondsUpdated', updateHandler);
//     };
//   }, [timer, countdown, startValues, isRunning]);

//   useEffect(() => {
//     console.log('isRunning changed to', isRunning);
//   }, [isRunning]);

//   return {
//     timeValues,
//     isRunning,
//     startTimer: timer.start,
//     stopTimer: timer.stop,
//   };
// };
