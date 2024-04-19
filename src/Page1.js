// Page1.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Page1 = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff', padding: '20px' }}>
      <h1>Page 1</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Page1;
