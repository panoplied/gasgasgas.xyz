import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

function ThemeToggle() {

  const { systemTheme, theme, setTheme } = useTheme();
  const [ isAnimating, setIsAnimating] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const [ mounted, setMounted ] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (

    <span
      className={`
        text-4xl
        select-none
        cursor-pointer
        ${isAnimating && "animate-[wiggle_200ms_ease-in-out]"}
      `}
      onClick={() => {
        setIsAnimating(true);
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
      onAnimationEnd={() => {
        setIsAnimating(false);
      }}
    >

      {currentTheme === 'dark' ? '🌞' : '🌚' }

    </span>

  );
}

export default ThemeToggle;