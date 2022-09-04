import {useEffect, useState} from 'react';
import './App.css';
import Icon1 from './icons/icon1';
import Icon2 from './icons/icon2';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    clickHandler();
  }, []);

  const clickHandler = async () => {
    const data = await axios.get('https://api.adviceslip.com/advice');
    setAdvice(data.data);
  };

  return (
    <div className='card'>
      <div className='content'>
        <span>ADVICE # {advice?.slip?.id}</span>
        <h2>{advice?.slip?.advice}</h2>
        <div className='icon1'>
          <Icon1 />
        </div>

        <div onClick={clickHandler} className='dice-container'>
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

export default App;
