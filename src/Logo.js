import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function Logo(props){
  const secondaryColor = useSelector(state=> state.secondaryColor)
  return(
    <Link to='/'>
    <div id='logo'>
      <svg xmlns="http://www.w3.org/2000/svg" width="126" height="30">
      <path fill="none" d="M-1 -1H127V31H-1z"></path>
      <g fillOpacity="null" stroke="#000" strokeOpacity="null">
        <text
          x="2.616"
          y="23.744"
          fill="#fff"
          strokeWidth="0"
          fontFamily="Euphoria, sans-serif"
          fontSize="24"
          textAnchor="start"
          xmlSpace="preserve"
        >
          Movie
        </text>
        <text
          x="84.616"
          y="23.744"
          fill="#fff"
          strokeWidth="0"
          fontFamily="Euphoria, sans-serif"
          fontSize="24"
          textAnchor="start"
          xmlSpace="preserve"
        >
          one
        </text>
        <path
          stroke={secondaryColor}
          strokeLinecap="null"
          strokeLinejoin="null"
          strokeWidth="2"
          d="M2.616 1.077L85.949 1.744"
        ></path>
        <path
          stroke={secondaryColor}
          strokeLinecap="null"
          strokeLinejoin="null"
          strokeWidth="2"
          d="M85.282 1.744L65.949 28.41"
        ></path>
        <path
          stroke={secondaryColor}
          strokeLinecap="null"
          strokeLinejoin="null"
          strokeWidth="2"
          d="M65.462 28.026L122.379 28.026"
        ></path>
      </g>
    </svg>
    </div>
    </Link>
  )
}

export default Logo