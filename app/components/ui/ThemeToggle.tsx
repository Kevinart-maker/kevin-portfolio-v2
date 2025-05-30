'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { PiMoonFill } from "react-icons/pi";
import { MdWbSunny } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className='p-1 rounded-full border self-baseline md:self-center mt-[4rem] md:mt-0 text-4xl md:text-xl'
    >
      {currentTheme === 'dark' ? (<MdWbSunny />) : (<PiMoonFill />)}
    </button>
  );
};

export default ThemeToggle;