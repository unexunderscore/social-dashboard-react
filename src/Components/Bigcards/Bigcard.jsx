import React from 'react';
import './Bigcard.css';



const Bigcard = () => {
  return (
    <div className='big-cards'>
        <div className='big-cardlayout facebook-thame'>

            <div>@nathanf</div>
            <div>1987</div>
            <div>Followers</div>
            <div>12 Today</div>
                    
         </div>
        <div className='big-cardlayout twitter-thame'>

            <div>@nathanf</div>
            <div>1044</div>
            <div>Followers</div>
            <div>99 Today</div>

        </div>
        <div className='big-cardlayout insta-thame'>

            <div>@realnathanf</div>
            <div>11k</div>
            <div>Followers</div>
            <div>1099 Today</div>

        </div>
        <div className='big-cardlayout youtube-thame'>

            <div>Nathan F.</div>
            <div>8239</div>
            <div>Subscribers</div>
            <div>144 Today</div>

        </div>
       
        
    </div>
  )
}

export default Bigcard