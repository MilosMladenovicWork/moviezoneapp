import React, {useEffect, useRef} from 'react'
import Swiper from 'swiper'
import SwiperStyle from 'swiper/css/swiper.min.css'
import {useDispatch, useSelector} from 'react-redux'
import {movie as movieAction,
   movieNumber as movieNumAction,
  removeMovie,
  relNum as relNumAction,
  popNum as popNumAction,
  mainColor as main,
  secondaryColor as secondary} from './actions'
import {Link} from 'react-router-dom'
import ColorThief from 'color-thief'
import SearchNavBar from './SearchNavBar'

function NewReleases(){

  let mySwiper;
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movie)
  const primaryColor = useSelector(state => state.mainColor)
  let popularPageNumber = useSelector(state => state.popNum)
  let movieNum = useSelector(state => state.movieNumber)
  let image = useRef(null)


  let moviesList;
  let colorsList = [];
  useEffect(()=>{
    dispatch(movieAction({}))
  },[])

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
      if(movies.length >= 1){
        moviesList = movies.map(movie => 
          <div key={movie.id} className='swiper-slide'>
            <div className='movieImageWrapper'
            style={{boxShadow: `0 5px 10px ${primaryColor}`}}
            >
              <Link to='/movie'>
                <img 
                className='movieImage' 
                src={movie['poster_path'] !== null ?
                 `https://image.tmdb.org/t/p/w500${movie['poster_path']}`: '../media/nopicture.png'}
                />
              </Link>
            </div>
            <p style={{marginTop:'1rem'}} className='homeMovieTitle'>
              {movie['original_title']}
            </p>
          </div>
          );
  
          if(moviesList.length >= 1){
              resolve()
          }
            
      }
  })

  let randomNum = Math.floor(Math.random() * 10000000)
  useEffect(()=>{
      if(movies.length >= 1){
        moviesListCreator.then(() => {
          mySwiper = new Swiper('.swiper-container' + randomNum, {
            grabCursor: false,
            centeredSlides: true,
            slidesPerView: '3',
            keyboard:true,
            initialSlide:0,
            observesSlideChildren:true,
            observer:true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            on:{
              slideChange: function(){
                dispatch(movieNumAction(mySwiper.activeIndex))
              },
              init: function(){
                  dispatch(movieNumAction(0))
              }
            }
          })
        });
      }

  }, [movies, popularPageNumber])


  function smallImageSrc(){
    if(movies !== undefined){
      if(movies[movieNum] !== undefined){
        if(movies[movieNum]['poster_path'] !== null){
          return `https://image.tmdb.org/t/p/w92${movies[movieNum]['poster_path']}`
        }else{
          return './media/nopicture.png'
        }
      }
    }
  }

  return(
    <div className='newReleasesContainer'>
      <SearchNavBar/>
      <h1 className='title'>Search Results</h1>
      <div className={'swiper-container' + randomNum}>
        <div className='swiper-wrapper'>
          {moviesList}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      <div className='colorTest'>
        <img 
        crossOrigin='anonymous'
        src={smallImageSrc()} 
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