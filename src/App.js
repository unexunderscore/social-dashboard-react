import './App.css';
import Header from './Components/Header/Header';
import Bigcard from './Components/Bigcards/Bigcard';
import Smallcard from './Components/Smallcards/Smallcard';
import {React, useState, useEffect} from 'react';


/* props video https://www.youtube.com/watch?v=UrpNtB61qyo */

function App() {

  const [checked, setChecked] = useState(() => {
    // getting stored value

      const saved = localStorage.getItem("checked");
      const initialValue = JSON.parse(saved);
      if(initialValue == null){
        return true;
      }
      return initialValue;

  });;

  const [theme, setTheme] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("theme");
    const initialValue = JSON.parse(saved);
    return initialValue || "light";
  });;


  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  useEffect(() => {
    // storing last used theme
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

 useEffect(() => {
    // storing last used switch
    localStorage.setItem('checked', JSON.stringify(checked));
  }, [checked]);

  return (
    <div className='plusBody' data-theme={theme}>
        <div className='headFlex'>
          <Header />  <hr />
          <div className='thame-switcher'>
            
            <div className='darkMode'>Dark Mode</div>
            <div>
              <div className="switcher-container">
        
                <label className="switch">
                <input className='checkBox' type="checkbox" 
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
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
