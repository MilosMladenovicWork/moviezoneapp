const movie = (state='', action) => {
  if(action.type === 'CURRENT_MOVIE'){
    return action.payload.movie;
  }else if(action.type === 'ADD_MOVIE'){
    return [
      ...state,
      ...action.payload.movie
    ]
  }else if(action.type === 'REMOVE_MOVIE'){
    return ''
  }
  else{
    return state;
  }
}

export default movie