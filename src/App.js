import './App.css';
import Header from './Components/Header/Header';
import Bigcard from './Components/Bigcards/Bigcard';
import Smallcard from './Components/Smallcards/Smallcard';
import {React, useState, useEffect} from 'react';

/* props video https://www.youtube.com/watch?v=UrpNtB61qyo */

function App(props) {
 
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    props.changeTheme(newTheme);
  }

  return (
    <div className='plusBody' data-theme={theme}>
        <div className='headFlex'>
          <Header />  <hr />
          <div className='thame-switcher'>
            
            <div className='darkMode'>Dark Mode</div>
            <div>
              <div className="switcher-container">
        
                <label className="switch">
                <input type="checkbox" 
                defaultChecked
                onClick={switchTheme}
                />
                <span className="switcher round"></span>
                </label>
 
              </div>

            </div>
        </div>
      </div>

      <div className="main-container">
     
        <Bigcard />
        <Smallcard />
      </div>
    </div>
  );
}

export default App;
