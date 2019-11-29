const movieNumber = (state=0, action) => {
  if(action.type === 'CURRENT_MOVIE_NUMBER'){
    return action.payload.movieNumber
  }else{
    return state
  }
}

export default movieNumber