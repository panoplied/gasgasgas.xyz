import { useTheme } from 'next-themes';

function ThemeToggle() {

  const { theme, setTheme } = useTheme();

  return (
    <button 
      className="text-4xl"
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '🌞' : '🌚' }
    </button>
  );
}

export default ThemeToggle;