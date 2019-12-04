import {combineReducers} from 'redux'
import mainColor from './mainColor'
import secondaryColor from './secondaryColor'
import movie from './movie'
import movieNumber from './movieNumber'
import clickedInformation from './clickedInformation'
import genres from './genres.js'
import clickedDescription from './clickedDescription'
import relNum from './relNum'
import popNum from './popNum'

const allReducers = combineReducers({
  mainColor:mainColor,
  secondaryColor:secondaryColor,
  movie:movie,
  movieNumber:movieNumber,
  clickedInformation:clickedInformation,
  genres:genres,
  clickedDescription:clickedDescription,
  relNum:relNum,
  popNum:popNum
})

export default allReducers