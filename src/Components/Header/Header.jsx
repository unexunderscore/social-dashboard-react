import React from 'react';
import './Header.css';
import { Switch } from '@mui/material';


const Header = () => {

    
  return (
    <div className='header-container'>
        <h1>Social Media Dashboard</h1>
        <p className='header-follow'>Total Followers: 23,004</p>
        <hr />
        <div className='thame-switcher'>
            <div>Dark Mode</div>
            <div>
            
            <Switch  size='normal' />
    
            </div>
        </div>
    </div>
  )
}

export default Header