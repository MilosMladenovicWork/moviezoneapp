import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {clickedInformation as clickedInformationAction} from './actions'

function Information(){
  const dispatch = useDispatch();
  const secondaryColor = useSelector(state => state.secondaryColor)
  const movie = useSelector(state => state.movie)
  const num = useSelector(state => state.movieNumber)
  const genres = useSelector(state => state.genres)
  const clickedInformation = useSelector(state => state.clickedInformation)

  const borderStyle = {
    backgroundColor:secondaryColor,
    borderRadius:'1.5rem',
    textAlign:'center',
    padding:'0.5rem 1rem',
    marginBottom:'1rem',
    color:'black',
    display:'inline-block'
  }
  
  let genresList;
  if(genres.length !== 0 && movie[num] !== undefined){
    genresList = genres.filter(genre => {
      if(movie[num]['genre_ids'].indexOf(genre.id) === -1){
        return false
      }
      return true
  }).map(genre=><li  style={borderStyle} key={genre.id}>{genre.name}</li>)
  }


  return(
    <div 
    className={`information ${clickedInformation ? 'informationClicked' : ''}`} 
    style={{
      border:`1px solid ${secondaryColor}`
    }}
    onClick={()=>dispatch(clickedInformationAction())}>   
      
      {clickedInformation ? <div className='informationBlock'>
        <p>Genres</p>
        <ul className='genresList'>{genresList}</ul>
        <p>Release</p>
        <p style={borderStyle}>{movie[num] !== undefined && movie[num]['release_date']}</p>
        <p>Popularity</p>
        <p  style={borderStyle}>{movie[num] !== undefined && movie[num]['popularity']}</p>
        <p>Vote Count</p>
        <p style={borderStyle}>{movie[num] !== undefined && movie[num]['vote_count']}</p>
      </div> : <p>Information</p>}
      
    </div>
  )
}

export default Information