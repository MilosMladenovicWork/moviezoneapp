import React, {useEffect} from 'react'
import Swiper from 'swiper'

function NewReleases(){

  useEffect(()=>{
    var mySwiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },[])


  return(
    <div className='newReleasesContainer'>
      <h1>New Releases</h1>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>Slide1</div>
          <div className='swiper-slide'>Slide2</div>
          <div className='swiper-slide'>Slide3</div>
        </div>
      </div>
    </div>
  )
}

export default NewReleases