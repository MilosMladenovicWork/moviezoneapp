import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  movieName as movieNameAction,
  movie as movieAction,
  addMovie,
   movieNumber as movieNumAction,
  removeMovie,
  relNum as relNumAction,
  popNum as popNumAction,
  mainColor as main,
  secondaryColor as secondary
} from './actions'


function SearchNavBar(){
  const dispatch = useDispatch();
  const secondaryColor = useSelector(state => state.secondaryColor)
  const movieName = useSelector(state => state.movieName)
  const movies = useSelector(state=>state.movie)
  let popularPageNumber = useSelector(state => state.popNum)
  const movieNameHandler = (event)=>{
    dispatch(movieNameAction(event.target.value))
  }

  function fetchSearched(){
    if(movieName !== ''){
      fetch('https://api.themoviedb.org/3/search/movie?api_key=a614b2b8bd0dd35de81141140841503f&language=en-US&query='+ movieName + '&page=1')
      .then(data => data.json())
      .then(data=> {
        dispatch(movieAction(data.results));
      }
      )

    }
  }

  return(
    <div className='searchnavbar'>
      <ul>
        <li>
          <input
          style={{border:'1px solid ' + secondaryColor}}
          name='title' 
          type='text'
          placeholder='Title'
          value={movieName}
          onChange={movieNameHandler}
          />
        </li>
        <li>
          <Link
          style={{backgroundColor:secondaryColor, color:'black'}}
          onClick={fetchSearched}
          to={'/search/' + movieName}
          >Find It</Link>
        </li>
      </ul>
    </div>
  )
}

export default SearchNavBar