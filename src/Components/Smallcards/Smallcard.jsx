import React from 'react';
import './Smallcard.css';
import faceIcon from '../../../src/icon-facebook.svg';
import arrowUp from '../../../src/icon-up.svg';
import arrowDown from '../../../src/icon-down.svg';
import twitterIcon from '../../../src/icon-twitter.svg';
import instaIcon from '../../../src/icon-instagram.svg';
import youtubeIcon from '../../../src/icon-youtube.svg';


const Smallcard = () => {
  return (
    <div>

        <div className='overTitle'>Overview - Today</div>

        <div className="smallcard-container">
            <div className='smallCard'>
                <div className='pageViews'>
                    <div>Page Views</div>
                    <div><img src={faceIcon} alt="facebook icon" /></div>
                </div>

                <div className='percentageCounter'>
                    <div className='counterSum'>87</div>
                    <div className='percentage-icon greenCounter'>
                        <div className='arrowIcon'>
                            <img src={arrowUp} alt="arrow up" />
                        </div>
                        <div>3%</div>
                        
                        
                    </div>
                </div>
            </div>

            <div className='smallCard'>
                <div className='pageViews'>
                    <div>Likes</div>
                    <div><img src={faceIcon} alt="facebook icon" /></div>
                </div>

                <div className='percentageCounter'>
                    <div className='counterSum'>52</div>
                    <div className='percentage-icon redCounter'>
                        <div className='arrowIcon'>
                            <img src={arrowDown} alt="arrow up" />
                        </div>
                        <div>2%</div>
                        
                        
                    </div>
                </div>
            </div>

            <div className='smallCard'>
                <div className='pageViews'>
                    <div>Likes</div>
                    <div><img src={instaIcon} alt="insta icon" /></div>
                </div>

                <div className='percentageCounter'>
                    <div className='counterSum'>5462</div>
                    <div className='percentage-icon greenCounter'>
                        <div className='arrowIcon'>
                            <img src={arrowUp} alt="arrow up" />
                        </div>
                        <div>2257%</div>
                        
                        
                    </div>
                </div>
            </div>

            <div className='smallCard'>
                <div className='pageViews'>
                    <div>Profile Views</div>
                    <div><img src={instaIcon} alt="insta icon" /></div>
                </div>

                <div className='percentageCounter'>
                    <div className='counterSum'>52k</div>
                    <div className='percentage-icon greenCounter'>
                        <div className='arrowIcon'>
                            <img src={arrowUp} alt="arrow up" />
                        </div>
                        <div>1375%</div>
                        
                        
                    </div>
                </div>
            </div>

            <div className='smallCard'>
                <div className='pageViews'>
                    <div>Retweets</div>
                    <div><img src={twitterIcon} alt="twitter icon" /></div>
                </div>

                <div className='percentageCounter'>
                    <div className='counterSum'>507</div>
                    <div className='percentage-icon greenCounter'>
                        <div className='arrowIcon'>
                            <img src={arrowUp} alt="arrow up" />
                        </div>
                        <div>303%</div>
                        
                        
                    </div>
                </div>
            </div>

            <div className='smallCard'>
                <div className='pageViews'>
                    <div>Likes</div>
                    <div><img src={twitterIcon} alt="twitter icon" /></div>
                </div>

                <div className='percentageCounter'>
                    <div className='counterSum'>507</div>
                    <div className='percentage-icon greenCounter'>
                        <div className='arrowIcon'>
                            <img src={arrowUp} alt="arrow up" />
                        </div>
                        <div>553%</div>
                        
                        
                    </div>
                </div>
            </div>

            <div className='smallCard'>
                <div className='pageViews'>
                    <div>Likes</div>
                    <div><img src={youtubeIcon} alt="youtube icon" /></div>
                </div>

                <div className='percentageCounter'>
                    <div className='counterSum'>107</div>
                    <div className='percentage-icon redCounter'>
                        <div className='arrowIcon'>
                            <img src={arrowDown} alt="down arrow" />
                        </div>
                        <div>19%</div>
                        
                        
                    </div>
                </div>
            </div>

            <div className='smallCard'>
                <div className='pageViews'>
                    <div>Total Views</div>
                    <div><img src={youtubeIcon} alt="youtube icon" /></div>
                </div>

                <div className='percentageCounter'>
                    <div className='counterSum'>1407</div>
                    <div className='percentage-icon redCounter'>
                        <div className='arrowIcon'>
                            <img src={arrowDown} alt="down arrow" />
                        </div>
                        <div>12%</div>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Smallcard