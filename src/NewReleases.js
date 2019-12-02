import React, {useEffect, useRef} from 'react'
import Swiper from 'swiper'
import SwiperStyle from 'swiper/css/swiper.min.css'
import {useDispatch, useSelector} from 'react-redux'
import {movie as movieAction,
  addMovie,
   movieNumber as movieNumAction,
  removeMovie,
  relNum as relNumAction,
  mainColor as main,
  secondaryColor as secondary} from './actions'
import {Link} from 'react-router-dom'
import ColorThief from 'color-thief'

function NewReleases(){

  let mySwiper;
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movie)
  const primaryColor = useSelector(state => state.mainColor)
  let releasesPageNumber = useSelector(state => state.relNum)
  let movieNum = useSelector(state => state.movieNumber)
  let image = useRef(null)


  let moviesList;
  let colorsList = [];
  useEffect(()=>{
  fetchNewReleases();
  },[])

  console.log(releasesPageNumber)
  console.log(movies)

  function fetchNewReleases(){
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a614b2b8bd0dd35de81141140841503f&language=en-US&page=' + releasesPageNumber)
    .then(data => data.json())
    .then(data=> {
      dispatch(movieAction(data.results));
      dispatch(relNumAction())
    }
    )
  }

  function fetchMoreNewReleases(){
    releasesPageNumber += 1;
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a614b2b8bd0dd35de81141140841503f&language=en-US&page=' + releasesPageNumber)
    .then(data => data.json())
    .then(data=> {
      dispatch(addMovie(data.results))
      dispatch(relNumAction())
    }
    )
  }

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

  const moviesListCreator = new Promise((resolve,reject) => {
      if(movies.length >= 20){
        moviesList = movies.map(movie => 
          <div key={movie.id} className='swiper-slide'>
            <div className='movieImageWrapper'
            style={{boxShadow: `0 5px 10px ${primaryColor}`}}
            >
              <Link to='/movie'>
                <img 
                className='movieImage' 
                src={`https://image.tmdb.org/t/p/w500${movie['poster_path']}`}
                />
              </Link>
            </div>
            <p style={{marginTop:'1rem'}} className='homeMovieTitle'>
              {movie['original_title']}
            </p>
          </div>
          );
  
          if(moviesList.length >= 20){
              resolve()
              
          }
            
      }
  })
  useEffect(()=>{
      if(movies.length === 20){
        moviesListCreator.then(() => {
          mySwiper = new Swiper('.swiper-container', {
            grabCursor: false,
            centeredSlides: true,
            slidesPerView: '3',
            keyboard:true,
            initialSlide:0,
            observer:true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            on:{
              slideChange: function(){
                if(mySwiper.activeIndex === Math.floor(mySwiper.slides.length * 0.8)){
                  fetchMoreNewReleases()
                }
                dispatch(movieNumAction(mySwiper.activeIndex))
              },
              init: function(){
                setTimeout(()=>{
                  dispatch(movieNumAction(mySwiper.activeIndex))
                }, 100)
              },
            }
          })
        });
      }

  }, [movies, releasesPageNumber])

  return(
    <div className='newReleasesContainer'>
      <h1 className='title'>New Releases</h1>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          {moviesList}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      <div className='colorTest'>
        <img 
        crossOrigin='anonymous'
        src={movies && `https://image.tmdb.org/t/p/w92${movies[movieNum]['poster_path']}`} 
        onLoad = {function(){
          const colorThief = new ColorThief();
          const img = image.current;
          let color = colorThief.getColor(img);
          colorMaker(color)
        }}
        ref={image}
        />
      </div>
    </div>
  )
}

export default NewReleases