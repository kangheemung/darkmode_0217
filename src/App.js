import { useState } from 'react';
import './App.css';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';  // Corrected path assuming `context` is inside `src`

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className='App'>
      <ThemeContext.Provider value = {{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
