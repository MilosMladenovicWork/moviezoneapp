const movie = (state='', action) => {
  if(action.type === 'CURRENT_MOVIE'){
    return action.payload.movie;
  }else if(action.type === 'ADD_MOVIE'){
    if(state.length >= 1){
      return [
        ...state,
        ...action.payload.movie
      ]
    }
    return state;
  }else if(action.type === 'REMOVE_MOVIE'){
    return ''
  }
  else{
    return state;
  }
}

export default movie