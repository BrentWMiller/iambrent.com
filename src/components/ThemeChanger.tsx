import React, { useState } from 'react';

const THEMES = ['fresh', 'voltage', 'error'];

const ThemeChanger: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swapTheme = () => {
    const newTheme = (currentIndex + 1) % THEMES.length;
    setCurrentIndex(newTheme);

    document.documentElement.style.setProperty('--theme-active-base', `var(--theme-${THEMES[newTheme]}-base)`);
    document.documentElement.style.setProperty('--theme-active-dark', `var(--theme-${THEMES[newTheme]}-dark)`);
  };

  return (
    <button
      onClick={swapTheme}
      type='button'
      className='inline text-theme-dark bg-theme rounded-sm underline transition-colors duration-500 ease-in-out'
    >
      {THEMES[currentIndex]}
    </button>
  );
};

export default ThemeChanger;
