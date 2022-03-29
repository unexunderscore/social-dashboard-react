import {React, useState, useEffect} from 'react';
import './Header.css';



const Header = () => {

  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
/*
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem('theme'));
    if(theme) {
      setTheme(theme);
    }

  }, []);
*/
  return (
    <div className='header-container' data-theme={theme}>
        <div>
        <h1>Social Media Dashboard</h1>
        <p className='header-follow'>Total Followers: 23,004</p>
        <hr />
        </div>
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
  )
  
}

export default Header