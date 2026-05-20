import React, { useState, useEffect } from 'react';
import { Clock, CloudSun } from 'lucide-react';

export default function HeaderInfo({ className = "justify-center", isHome = false }: { className?: string; isHome?: boolean }) {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Coordinates for Chùa Láng, Đống Đa: 21.0221, 105.8019
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=21.0221&longitude=105.8019&current=temperature_2m,weather_code');
        const data = await res.json();
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          code: data.current.weather_code
        });
      } catch (error) {
        console.error('Failed to fetch weather:', error);
      }
    };
    fetchWeather();
    const weatherTimer = setInterval(fetchWeather, 600000); // Update every 10 mins
    return () => clearInterval(weatherTimer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      timeZone: 'Asia/Ho_Chi_Minh'
    });
  };

  const getWeatherIcon = (code: number) => {
    if (code === 0) return '☀️';
    if (code <= 3) return '⛅';
    if (code <= 48) return '🌫️';
    if (code <= 67) return '🌧️';
    if (code <= 77) return '❄️';
    if (code <= 82) return '🌧️';
    if (code <= 99) return '⛈️';
    return '⛅';
  };

  const textColor = isHome ? 'text-white/80' : 'text-primary dark:text-gray-300';

  return (
    <div className={`flex items-center space-x-6 ${textColor} text-[10px] md:text-sm font-black uppercase tracking-[0.2em] mb-4 animate-fade-in ${className}`}>
      <div className="flex items-center">
        <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2 text-accent" />
        <span>Hanoi: {formatTime(time)}</span>
      </div>
      <div className="flex items-center">
        <CloudSun className="w-3 h-3 md:w-4 md:h-4 mr-2 text-accent" />
        <span>{weather ? `${getWeatherIcon(weather.code)} ${weather.temp}°C` : 'Chùa Láng...'}</span>
        <span className="ml-2 text-[8px] opacity-60">Dong Da, Ha Noi</span>
      </div>
    </div>
  );
}
