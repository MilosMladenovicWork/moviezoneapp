import React from 'react'
import Information from './Information'
import Details from './Details'
import Description from './Description'

function InformationBar(){
  return(
    <div className='informationBar'>
      <Information />
      <Details />
      <Description />
    </div>
  )
}

export default InformationBar