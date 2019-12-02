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

export const clickedDescription = () => {
  return{
    type:'CLICK_DESCRIPTION'
  }
}
