export const mainColor = (color)=>{
  return{
    type:'NEW_VALUE',
    payload:{
      color: color
    }
  }
}

export const secondaryColor = (color)=>{
  return{
    type:'NEW_VALUE',
    payload:{
      color:color
    }
  }
}

export const movie = (movie) => {
  return{
    type:'CURRENT_MOVIE',
    payload:{
      movie:movie
    }
  }
}

export const addMovie = (movie) => {
  return{
    type:'ADD_MOVIE',
    payload:{
      movie:movie
    }
  }
}

export const removeMovie = () => {
  return{
    type:'REMOVE_MOVIE'
  }
}

export const movieNumber = (number) => {
  return{
    type:'CURRENT_MOVIE_NUMBER',
    payload:{
      movieNumber:number
    }
  }
}

export const clickedInformation = () => {
  return{
    type:'CLICK_INFORMATION'
  }
}

export const genresAction = (genresArr) => {
  return{
    type:'GENRES_ARR',
    payload:{
      genresArr:genresArr.genres
    }
  }
}

export const relNum = () => {
  return {
    type:'NEXT_PAGE'
  }
}

export const popNum = () => {
  return {
    type:'NEXT_PAGE_POPULAR'
  }
}


export const clickedDescription = () => {
  return{
    type:'CLICK_DESCRIPTION'
  }
}

export const movieName = (name) => {
  return{
    type:'SEARCH_MOVIE_NAME',
    payload:{
      name:name
    }
  }
}

export const clickedSearch = () => {
  return{
    type:'TOGGLE_CLICKED_SEARCH'
  }
}

export const relNumReset = () => {
  return{
    type:'RELEASE_NUM_RESET'
  }
}

export const popNumReset = () => {
  return{
    type:'POPULAR_NUM_RESET'
  }
}