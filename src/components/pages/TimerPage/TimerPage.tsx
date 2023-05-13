import { useEffect, useRef, useState } from 'react';
import * as Styled from './TimerPage.styled';
import TriggerButtonSection from '../../TriggerButtonSection/TriggerButtonSection';
import CustomTimer from '../../CustomTimer/CustomTimer';

const TimerPage = () => {
  const [time, setTime] = useState(0);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateTime = (time: number) => {
    const second = time % 60;
    const minute = Math.floor(time / 60);
    const hours = Math.floor(minute / 60);

    setTime(time);
    setHours(() => `${hours}`.padStart(2, '0'));
    setMinutes(() => `${minute}`.padStart(2, '0'));
    setSeconds(() => `${second}`.padStart(2, '0'));
  };

  const handleReset = () => {
    setTime(0);
    setHours('');
    setMinutes('');
    setSeconds('');
  };

  const handleRunning = () => {
    if (time <= 0) {
      return;
    }

    setIsRunning((prev) => !prev);
  };

  const playCompleteSound = () => {
    const audio = new Audio(
      'https://dl.dropboxusercontent.com/s/1cdwpm3gca9mlo0/kick.mp3',
    );
    audio.play();
  };

  useEffect(() => {
    if (time > 0 && isRunning) {
      intervalId.current = setInterval(() => {
        const second = (time - 1) % 60;
        const minute = Math.floor((time - 1) / 60);
        const hours = Math.floor(minute / 60);

        setTime((prevTime) => {
          // if (prevTime - 1 === 0) {
          //   playCompleteSound();
          // }

          return prevTime - 1;
        });
        setHours(() => `${hours}`.padStart(2, '0'));
        setMinutes(() => `${minute}`.padStart(2, '0'));
        setSeconds(() => `${second}`.padStart(2, '0'));
      }, 1000);
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [time, isRunning]);

  return (
    <Styled.TimerPage>
      <Styled.ClockSection>
        <Styled.TimerBox>
          <input
            type="text"
            maxLength={2}
            placeholder="00"
            value={hours}
            onChange={(e) => {
              if (!/^\d*$/.test(e.target.value)) return;

              const num = Number(e.target.value);

              setTime((prev) => prev + num * 3600);
              setHours(e.target.value);
            }}
          />
          :
          <input
            type="text"
            maxLength={2}
            placeholder="00"
            value={minutes}
            onChange={(e) => {
              if (!/^\d*$/.test(e.target.value)) return;

              const num = Number(e.target.value);
              if (num > 59) return;

              setTime((prev) => prev + num * 60);
              setMinutes(e.target.value);
            }}
          />
          :
          <input
            type="text"
            maxLength={2}
            placeholder="00"
            value={seconds}
            onChange={(e) => {
              if (!/^\d*$/.test(e.target.value)) return;

              const num = Number(e.target.value);
              if (num > 59) return;

              setTime((prev) => prev + num);
              setSeconds(e.target.value);
            }}
          />
        </Styled.TimerBox>
      </Styled.ClockSection>
      <TriggerButtonSection
        onReset={handleReset}
        onRunning={handleRunning}
        isRunning={isRunning}
      />

      <Styled.CustomTimerSection>
        <CustomTimer customTime={180} updateTime={updateTime} />
        <CustomTimer customTime={300} updateTime={updateTime} />
        <CustomTimer customTime={600} updateTime={updateTime} />
        <CustomTimer customTime={900} updateTime={updateTime} />
        <CustomTimer customTime={1200} updateTime={updateTime} />
      </Styled.CustomTimerSection>
    </Styled.TimerPage>
  );
};

export default TimerPage;