import {React, useState} from 'react';
import './Header.css';



const Header = () => {

const [ lightOn, setLightOn ] = useState(true);
    
  return (
    <div className='header-container'>
        <h1>Social Media Dashboard</h1>
        <p className='header-follow'>Total Followers: 23,004</p>
        <hr />
        <div className='thame-switcher'>
            <div>Dark Mode</div>
            <div>
              <div className="switcher-container">
        
                <label className="switch">
                <input type="checkbox" 
                checked={lightOn}
                onClick={() => setLightOn(!lightOn)}
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