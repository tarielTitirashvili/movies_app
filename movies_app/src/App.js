import React from 'react'
import { BrowserRouter, Route , Redirect } from 'react-router-dom'
import HeaderContainer from './components/header/headerContainer'
import MoviesContainer from './components/movies/moviesContainer'
import Loading from './components/loading/loading'

function App(props) {
  
  if(props.loading)return <Loading />

  return (
    <div style = {{height:window.innerHeight}}>
      <BrowserRouter>
        <HeaderContainer/>
            <Route path = '/home'  render = {()=><MoviesContainer/>} />
            <Route exact path = '/' render={() => <Redirect  to = '/home' />} />
      </BrowserRouter>
    </div>
  );
}

export default App

