import React from 'react'
import HeroText from './HeroText'
import HeroMovie from './HeroMovie'

function Hero(props){
  return(
    <div id='hero' className='hero'>
      <HeroText/>
      <HeroMovie/>
    </div>
  )
}

export default Hero