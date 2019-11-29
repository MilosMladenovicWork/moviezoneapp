import React from 'react'
import {useSelector} from 'react-redux'

function HeroText(props){
  const secondaryColor = useSelector(state => state.secondaryColor)
  return(
    <div id='heroText'>
      <p id='primaryHeroText' style={{color:secondaryColor}}>Discover<br/>Read<br/>Watch</p>
      <p id='secondaryHeroText'>Discover new releases or popular movies.<br/>
      Pick one you like. <br/>
      MovieZone makes it easy for you to find the right one.
      </p>
    </div>
  )
}

export default HeroText