const movieName = (state='', action) => {
  if(action.type === 'SEARCH_MOVIE_NAME'){
    return action.payload.name
  }
  else{
    return state
  }
}

export default movieName;