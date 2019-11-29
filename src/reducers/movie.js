const movie = (state='', action) => {
  if(action.type === 'CURRENT_MOVIE'){
    return action.payload.movie;
  }else{
    return state;
  }
}

export default movie