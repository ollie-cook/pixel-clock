'use client';

import { useState, useEffect } from 'react'
import { Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine } from './Numbers';
import Colon from './Colon';

const numbers = [Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine]

export default function Clock() {
  const [time, setTime] = useState<string>();
  const [characters, setCharacters] = useState<number[]>();
  const [hour, setHour] = useState<number[]>();
  const [minute, setMinute] = useState<number[]>();
  const [second, setSecond] = useState<number[]>();

  useEffect(() => {
    const timer = setInterval(() => {
      const dateString = new Date().toLocaleTimeString();
      const [hour, minute, second] = dateString.split(':');
      let tempCharacters = [];

      let tempHour = []
      for (let i = 0; i < hour.length; i++) {
        tempHour.push(Number(hour[i]))
      }
      setHour(tempHour);

      let tempMinute = []
      for (let i = 0; i < minute.length; i++) {
        tempMinute.push(Number(minute[i]));
      }
      setMinute(tempMinute);

      let tempSecond = []
      for (let i = 0; i < second.length; i++) {
        tempSecond.push(Number(second[i]));
      }
      setSecond(tempSecond);

      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex gap-6">
        {
          hour?.map((character, index) => {
            const Number = numbers[character];
            const guid = crypto.randomUUID();
            return (
              <div className="w-64" key={guid}>
                <Number colour="#f59e0b" />
              </div>
            )
          })
        }
        <div className="w-48">
          <Colon colour="#f59e0b"/>
        </div>
        {
          minute?.map((character, index) => {
            const Number = numbers[character];
            const guid = crypto.randomUUID();
            return (
              <div className="w-64" key={guid}>
                <Number colour="#f59e0b" />
              </div>
            )
          })
        }
        <div className="w-48">
          <Colon colour="#f59e0b"/>
        </div>
        {
          second?.map((character, index) => {
            const Number = numbers[character];
            const guid = crypto.randomUUID();
            return (
              <div className="w-64" key={guid}>
                <Number colour="#f59e0b" />
              </div>
            )
          })
        }
    </div>
  )
}