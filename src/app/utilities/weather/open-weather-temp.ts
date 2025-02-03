import { useEffect, useState } from 'react';
import { getResponse, getSessionItem } from '../../../utils';
import { Daily } from './types/daily';
import { Hourly } from './types/hourly';

export const useOpenWeatherCall = (latIn: number, lonIn: number) => {
  const [dailyResult, setDailyResult] = useState<Daily[]>([]);
  const [hourlyResult, setHourlyResult] = useState<Hourly[]>([]);

  const base = 'https://api.openweathermap.org/data/3.0/onecall?';
  const appid = '6008c47adda4d19b4055c7058a622879';
  const units = 'metric';
  const lang = 'en';

  useEffect(() => {
    const setResults = () => {
      setDailyResult(getSessionItem('response-daily') as Daily[]);
      setHourlyResult(getSessionItem('response-hourly') as Hourly[]);
    };

    getResponse(
      `${base}lat=${latIn}&lon=${lonIn}&appid=${appid}&units=${units}&lang=${lang}`,
      'GET',
      setResults
    );
  }, [latIn, lonIn]);

  return { dailyResult, hourlyResult };
};
