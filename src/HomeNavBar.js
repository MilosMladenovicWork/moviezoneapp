import React from 'react'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'


function HomeNavBar(props){
  const secondaryColor = useSelector(state => state.secondaryColor)

  return(
    <div id='homenavbar'>
      <ul>
        <NavLink 
        activeStyle={{filter:`drop-shadow(0px 2px 5px ${secondaryColor})`}}
        style={{backgroundColor:secondaryColor,
          color:'black'}}
        to='/newreleases'>
          New Releases
        </NavLink>
        <NavLink 
        activeStyle={{filter:`drop-shadow(0px 2px 5px ${secondaryColor})`}}
        style={{backgroundColor:secondaryColor,
          color:'black'}}
        to='/search'>
          Search for Movies
        </NavLink>
        <NavLink 
        activeStyle={{filter:`drop-shadow(0px 2px 5px ${secondaryColor})`}}
        style={{backgroundColor:secondaryColor,
          color:'black'}}
        to='/popularmovies'>
          Popular Movies
        </NavLink>
      </ul>
    </div>
  )
}

export default HomeNavBar