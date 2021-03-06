import React, { useEffect, useState } from 'react'
import './styles.css'

export const HomeHero = () => {
  const [timer, setTimer] = useState({
    day: '00',
    hour: '00',
    minute: '00',
    second: '00'
  })

  useEffect(() => {
    const myfunc = setInterval(function() {
      const now = new Date().getTime();
      const downDate = new Date("Dec 21, 2021 21:00:00").getTime()
      var timeleft = downDate - now;
          
      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      setTimer({
        day: days > 9 ? `${days}` : `0${days}`,
        hour: hours > 9 ? `${hours}` : `0${hours}`,
        minute: minutes > 9 ? `${minutes}` : `0${minutes}`,
        second: seconds > 9 ? `${seconds}` : `0${seconds}`
      })
    }, 1000)
  }, [])

  return (
    <div className='home-hero' id='welcome'>
      <div className='main-layout'>
        <div className='main-container'>
          <div className='top-section'>
            <div className='welcome'>
              Welcome to
            </div>
            <div className='welcome-title'>
              <div className="welcome-title-content">
                SOL KITTIES
                <div className="welcome-title-star">
                  <img src="assets/part1/home-star.png" style={{width: '100%', height: '100%'}}/>
                </div>
              </div>
            </div>
            <div className='welcome-desc'>
              The invasion is imminent, be-hold from the mighty kitties. 
            </div>
          </div>
          <div className='bottom-section'>
            <div className='sale'>
              <div className='sale-title'>NFT SALE</div>
              <div className='sale-collection'>The 1st drop of the Sol Kitties Collection</div>
              <div className='sale-time'>
                <div>
                  {timer.day}
                  <div className='time-unit'>days</div>
                </div>
                <div> : </div>
                <div>
                  {timer.hour} 
                  <div className='time-unit'>hrs</div>
                </div>
                <div> : </div>
                <div>
                  {timer.minute}
                  <div className='time-unit'>min</div>
                </div>
                <div> : </div>
                <div>
                  {timer.second} 
                  <div className='time-unit'>sec</div>
                </div>
              </div>
              <div className='sale-desc'>
                Sol Kitties is a revolutionary community-oriented NFT project on Solana block-chain with a unique hand-drown art &nbsp;
                <span className='sale-desc-link'>specially  made for the Community.</span>
                {/*<span className='sale-desc-link'>Check more details.</span>*/}
              </div>
            </div>
            <div className='sale-image'>
              <div className='sale-image-wrapper'>
                <img src='assets/part1/SolKittie_001.png' className='sale-image1' alt='image1' />
                <img src='assets/part1/SolKittie_002.png' className='sale-image1' alt='image2' />
                <img src='assets/part1/SolKittie_003.png' className='sale-image1' alt='image3' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
