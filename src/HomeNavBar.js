import React from 'react'
import {useSelector} from 'react-redux'

function HomeNavBar(props){
  const secondaryColor = useSelector(state => state.secondaryColor)
  return(
    <div id='homenavbar'>
      <ul>
        <li style={{
          backgroundColor:secondaryColor,
          color:'black'
        }}>New Releases</li>
        <li style={{
          backgroundColor:secondaryColor,
          color:'black'
        }}
        >Search for Movies</li>
        <li style={{
          backgroundColor:secondaryColor,
          color:'black'
        }}
        >Popular Movies</li>
      </ul>
    </div>
  )
}

export default HomeNavBar