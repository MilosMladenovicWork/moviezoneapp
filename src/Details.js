import React from 'react'
import {useSelector} from 'react-redux'

function Details(){

  let percentRating
  const secondaryColor = useSelector(state=> state.secondaryColor)
  const movie = useSelector(state => state.movie)
  const num = useSelector(state => state.movieNumber)

  const star = 
      <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeLinecap="square"
              strokeMiterlimit="10"
              viewBox="0 0 783.556 664.614"
              className='star'
            >
              <clipPath id="a">
                <path d="M0 0h783.56v664.61H0V0z"></path>
              </clipPath>
              <g clipPath="url(#a)">
                <path fill="none" d="M0 0h783.56v664.61H0z"></path>
                <path
                  fill={secondaryColor}
                  d="M249.3 234.39C223.984 195.768 331.094 4.48 377.83 4.85c46.739.365 173.32 193.47 151.9 231.73-21.422 38.257-255.11 36.434-280.43-2.188zM223.62 395.81c-41.221 23.779-37.903 239.68 3.981 259.08 41.885 19.401 247.99-99.496 247.33-142.68-.663-43.18-210.09-140.18-251.31-116.41z"
                ></path>
                <path
                  fill={secondaryColor}
                  d="M255.57 460.25C214.284 483.933 9.8 383.734 10.19 340.01c.39-43.723 206.82-162.14 247.71-142.1 40.896 20.04 38.947 238.65-2.339 262.34zM523.21 201.71c41.286-23.683 245.77 76.516 245.38 120.24-.39 43.723-206.82 162.14-247.71 142.1-40.896-20.04-38.947-238.65 2.339-262.34z"
                ></path>
                <path
                  fill={secondaryColor}
                  d="M613.7 395.81c41.221 23.779 37.903 239.68-3.981 259.08-41.884 19.401-247.99-99.496-247.33-142.68.663-43.18 210.09-140.18 251.31-116.41z"
                ></path>
                <path
                  fill={secondaryColor}
                  d="M250.14 334.43c0-71.693 62.123-129.81 138.76-129.81 76.633 0 138.76 58.118 138.76 129.81 0 71.693-62.123 129.81-138.76 129.81-76.633 0-138.76-58.118-138.76-129.81z"
                ></path>
              </g>
            </svg>

  if(movie[num] !== undefined){
    percentRating = movie[num]['vote_average'] * 10;
  }

  return(
    <div 
    className='details'
    >
      <p className='title'>{movie[num] !== undefined && movie[num]['original_title']}</p>
      <div className='ratingStarImage' style={{
          'clipPath':'polygon(0 0,'+ percentRating +'% 0,'+ percentRating +'% 100%, 0% 100%)'
          }}>
          {star}
          {star}
          {star}
          {star}
          {star}
      </div>
    </div>
  )
}

export default Details