import React from 'react';
import HomeNavBar from './HomeNavBar'
import Hero from './Hero'
import SeeMovie from './SeeMovie'
import {Route,Switch} from 'react-router-dom'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

function Home(props){
  return(
      <div className='home'>
        <HomeNavBar />
        <Route render={({location})=>(
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames='fade'
          >
            <Switch location={location}>
              <Route exact path='/' component={Hero}/>
              <Route exact path='/movie' component={SeeMovie}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        )}/>
      </div>
  )
}

export default Home