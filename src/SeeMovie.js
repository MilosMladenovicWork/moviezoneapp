import React, {useState, useEffect, useRef} from 'react'
import {mainColor as main, secondaryColor as secondary, movie as movieAction, genresAction} from './actions'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import InformationBar from './InformationBar'
var ColorThief = require('color-thief')

function SeeMovie(props){
  const image = useRef(null);
  const dispatch = useDispatch()
  const primaryColor = useSelector(state => state.mainColor);
  const movie = useSelector(state => state.movie);
  const num = useSelector(state => state.movieNumber)
  const clickedInformation = useSelector(state => state.clickedInformation)
  const clickedDescription = useSelector(state => state.clickedDescription)

  const [movies, setMovies] = useState('')
  const [movieImage, setMovieImage] = useState('')
  const [movieTitle, setMovieTitle] = useState('')

  const firstPicture = () => {
    setMovieImage(`https://image.tmdb.org/t/p/w500${movie[num]['poster_path']}`)
    setMovieTitle(movie[num]['title'])
  };

  const firstPictureReload = () => {
    setMovieImage(`https://image.tmdb.org/t/p/w500${movies[0]['poster_path']}`)
    setMovieTitle(movies[0]['title'])
    dispatch(movieAction(movies))
  };

  const colorMaker = (value) => {
    let mainColor = 'rgb('+ (value[0] > value[1] && value[0] > value[2] ? value[0]-20:value[0]-30)
           +','+ (value[1] > value[2] && value[1] > value[0] ? value[1]-20:value[1]-30)
            + ', ' + (value[2] > value[1] && value[2] > value[0] ?
             value[2]-20:value[2]-30) + ')';
    let secondaryColor = 'rgb('+ (value[0] > value[1] && value[0] > value[2] ? 
              value[0]+255:value[0]+20)
                +','+ (value[1] > value[2] && value[1] > value[0] ? 
                value[1]+255:value[1]+20)
                 + ', ' + (value[2] > value[1] && value[2] > value[0] ?
                  value[2]+255:value[2]+20) + ')';
    dispatch(main(mainColor))
    dispatch(secondary(secondaryColor))
  };

  const fetchMovies = async ()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=a614b2b8bd0dd35de81141140841503f&language=en-US&page=1')
    .then(data=> data.json())
    .then(data=> setMovies(data.results))
  }

  const fetchGenres = async () =>{
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=a614b2b8bd0dd35de81141140841503f&language=en-US')
    .then(data => data.json())
    .then(data => dispatch(genresAction(data)))
  }

  useEffect(()=>{
    fetchMovies()
    fetchGenres()
  }, [])

  useEffect(()=>{
    if(movie.length !== 0){
      firstPicture()
    }else if(movie.length === 0 && movies.length !== 0){
      firstPictureReload();
    }
  }, [movie, movies])

  return(
  <div className='seeMovie'>
    <div id='heroMovie'>
      <div 
      id='heroImgWrapper'
      className={`${clickedDescription && !clickedInformation ? 'imageDescriptionClicked' : ''} 
      ${!clickedDescription && clickedInformation ? 'imageInformationClicked' : ''}`}
      style={{boxShadow: `0 5px 10px ${primaryColor}`}}
      >
        <Link to='/'>
          <img 
          ref={image}
          onLoad = {function(){
            const colorThief = new ColorThief();
            const img = image.current;
            let color = colorThief.getColor(img);
            colorMaker(color)
          }}
          src={movieImage}
          id='heroMovieImg'
          crossOrigin='anonymous'
          />
        </Link>
      </div>
    </div>
    <InformationBar />
  </div>

  )
}

export default SeeMovie