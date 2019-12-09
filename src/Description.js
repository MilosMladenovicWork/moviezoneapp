import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {clickedDescription as clickedDescriptionAction} from './actions'

function Description(){

  const dispatch = useDispatch()
  const secondaryColor = useSelector(state=> state.secondaryColor)
  const num = useSelector(state => state.movieNumber)
  const movie = useSelector(state => state.movie)
  const clickedDescription = useSelector(state => state.clickedDescription)

  return(
    <div 
    className={`description ${clickedDescription ? 'descriptionClicked' : ''}`}
    onClick={()=>dispatch(clickedDescriptionAction())}
    style={{
      border:`1px solid ${secondaryColor}`
    }}
    >
      <p>{movie[num] && clickedDescription ? movie[num]['overview'] : 'Description'}</p>
    </div>
  )
}

export default Description