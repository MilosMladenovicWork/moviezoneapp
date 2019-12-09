import React, {useState, useEffect, useRef} from 'react'
import {mainColor as main,
   secondaryColor as secondary,
    movie as movieAction,
    movieNumber as movieNumAction
  } from './actions'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

var ColorThief = require('color-thief');

function HeroMovie(){
  const image = useRef(null);
  const dispatch = useDispatch()
  const primaryColor = useSelector(state => state.mainColor);
  const movie = useSelector(state => state.movie);


  const [movies, setMovies] = useState([])
  const [movieImage, setMovieImage] = useState('')
  const [movieTitle, setMovieTitle] = useState('')
  const [randomNum, setRandomNum] = useState('')
  const [clickedMovie, setClickedMovie] = useState(false)

  const fetchMovies = async ()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=a614b2b8bd0dd35de81141140841503f&language=en-US&page=1')
    .then(data=> data.json())
    .then(data=> {
      data.results.pop()
      data.results.pop()
      dispatch(movieAction(data.results))})
  }
  const randomNumGenerator = (to) => {
    return Math.floor(Math.random() * to)
  };

  const firstPicture = () => {
    let num = randomNumGenerator(18);
    dispatch(movieNumAction(num));
    setMovieImage(`https://image.tmdb.org/t/p/w500${movie[num]['poster_path']}`)
    setMovieTitle(movie[num]['title'])
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

  useEffect(()=>{
    fetchMovies()
  },[])

  useEffect(()=>{
    if(movie.length >= 18){
      firstPicture();
      const randomMovieInterval = setInterval(()=>{
        let num = randomNumGenerator(18);
        dispatch(movieNumAction(num))
        setMovieImage(`https://image.tmdb.org/t/p/w500${movie[num]['poster_path']}`)
        setMovieTitle(movie[num]['title'])
      },5000)
      return ()=>clearInterval(randomMovieInterval)
    }
  },[movie])
  
  return(
  <div id='heroMovie'>
    <div 
    id='heroImgWrapper'
    style={{boxShadow: `0 5px 10px ${primaryColor}`}}
    >
      <Link to='/movie'>
        <img 
        ref={image}
        onLoad = {function(){
          const colorThief = new ColorThief();
          const img = image.current;
          let color = colorThief.getColor(img);
          colorMaker(color)
        }}
        onClick = {()=>{
          setClickedMovie(true)
        }}
        src={movieImage}
        id='heroMovieImg'
        crossOrigin='anonymous'
        />
      </Link>
    </div>
  <p className='homeMovieTitle'>
      {movieTitle}
  </p>
  </div>

  )
}

export default HeroMovie