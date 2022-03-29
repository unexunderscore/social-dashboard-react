import React from 'react';
import './Bigcard.css';
import faceIcon from '../../../src/icon-facebook.svg';
import arrowUp from '../../../src/icon-up.svg';
import arrowDown from '../../../src/icon-down.svg';
import twitterIcon from '../../../src/icon-twitter.svg';
import instaIcon from '../../../src/icon-instagram.svg';
import youtubeIcon from '../../../src/icon-youtube.svg';



const Bigcard = () => {


  return (
    <div className='big-cards'>
        <div className='big-cardlayout facebook-thame'>

            <div className='iconName-container'>
                <div><img src={faceIcon} alt="facebook icon" /></div>
                <div className='social-name'>@nathanf</div>
            </div>
            <div className='followers-counter'>1987</div>
            <div className='follow-title'>Followers</div>
            <div className='iconToday-container'>
                <div><img src={arrowUp} alt="Up arrow" /></div>
                <div className='counterToday greenCounter'>12 Today</div>
            </div>        
         </div>
         
        <div className='big-cardlayout twitter-thame'>

            <div className='iconName-container'>
                <div><img src={twitterIcon} alt="twitter icon" /></div>
                <div className='social-name'>@nathanf</div>
            </div>
            <div className='followers-counter'>1044</div>
            <div className='follow-title'>Followers</div>
            <div className='iconToday-container'>
                <div><img src={arrowUp} alt="Up arrow" /></div>
                <div className='counterToday greenCounter'>99 Today</div>
            </div> 
           

        </div>
        <div className='big-cardlayout insta-thame'>

            <div className='iconName-container'>
                <div><img src={instaIcon} alt="insta icon" /></div>
                <div className='social-name'>@realnathanf</div>
            </div>
            <div className='followers-counter'>11k</div>
            <div className='follow-title'>Followers</div>
            <div className='iconToday-container'>
                <div><img src={arrowUp} alt="Up arrow" /></div>
                <div className='counterToday greenCounter'>1099 Today</div>
            </div> 
            

        </div>
        <div className='big-cardlayout youtube-thame'>

            <div className='iconName-container'>
                <div><img src={youtubeIcon} alt="youtube icon" /></div>
                <div className='social-name'>Nathan F.</div>
            </div>    
            <div className='followers-counter'>8239</div>
            <div className='follow-title'> Subscribers</div>
            <div className='iconToday-container'>
                <div><img src={arrowDown} alt="Down arrow" /></div>
                <div className='counterToday redCounter'>144 Today</div>
            </div> 
            
           

        </div>
       
        
    </div>
  )
}

export default Bigcard