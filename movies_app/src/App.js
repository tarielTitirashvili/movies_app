import React from 'react'
import { BrowserRouter, Route , Redirect } from 'react-router-dom'
import HeaderContainer from './components/header/headerContainer'
import MoviesContainer from './components/movies/moviesContainer'
import Loading from './components/loading/loading'
import MoviePageContainer from './components/movies/moviePage/moviePageContainer'
import ShowPicturesContainer from './components/movies/moviePage/details/pictures/showPictures/showPicturesContainer'

function App(props) {
  
  if(props.loading)return <Loading />

  return (
    <div style = {{height:window.innerHeight}}>
      <BrowserRouter>
        <HeaderContainer/>
          <Route path = '/home/:id/:type' render ={()=><ShowPicturesContainer />} />
          <Route exact path = '/home/:id' render = {()=><MoviePageContainer/>}/>
          <Route exact path = '/home'  render = {()=><MoviesContainer/>}/>
          <Route exact path = '/' render={() => <Redirect  to = '/home' />}/>
      </BrowserRouter>
    </div>
  )
}
export default App