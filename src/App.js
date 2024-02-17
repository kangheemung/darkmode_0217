
import './App.css';
import Page from './components/Page';
import { useState } from 'react';

function App() {
  const [isDark,setIsDark] = useState(false);
  return (
    <div className='App'>
      <Page isDark={isDark} setIsDark={setIsDark}/>
    </div>
  );
}

export default App;
