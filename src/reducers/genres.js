const genres = (state = [], action) => {
  if(action.type === 'GENRES_ARR'){
    return action.payload.genresArr;
  }else{
    return state;
  }
}

export default genres;