import React from 'react';
import HeaderContainer from './components/header/headerContainer';
import MoviesContainer from './components/movies/moviesContainer';

function App() {
  return (
    <div style = {{height:window.innerHeight}}>
      <HeaderContainer/>
      <MoviesContainer />
    </div>
  );
}

export default App;