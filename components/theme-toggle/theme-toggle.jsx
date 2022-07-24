import { useTheme } from 'next-themes';
import { useState } from 'react';

function ThemeToggle() {

  const { theme, setTheme } = useTheme();
  const [effect, setEffect] = useState(false);

  return (

    <span
      className={`
        text-4xl
        cursor-pointer
        ${effect && "animate-[wiggle_200ms_ease-in-out]"}
      `}
      onClick={() => {
        setEffect(true);
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
      onAnimationEnd={() => {
        setEffect(false);
      }}
    >

      {theme === 'dark' ? '🌞' : '🌚' }

    </span>

  );
}

export default ThemeToggle;