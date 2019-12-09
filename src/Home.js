import React from 'react';
import HomeNavBar from './HomeNavBar'
import Hero from './Hero'
import SeeMovie from './SeeMovie'
import NewReleases from './NewReleases'
import PopularMovies from './PopularMovies'
import SearchForMovies from './SearchForMovies'
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
              <Route exact path='/newreleases' component={NewReleases}/>
              <Route exact path='/popularmovies' component={PopularMovies}/>
              <Route path='/search/' component={SearchForMovies}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        )}/>
      </div>
  )
}

export default Home