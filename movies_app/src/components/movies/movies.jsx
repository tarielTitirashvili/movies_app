import React from 'react'
import Filter from './filter/filter'
import Movie from './movie/movie'
import css from './movies.module.css'
import Pagination from './pagination/pagination'

export default function Movies(props) {
  return (
    <div>
      <div>
        <Filter
          searchBy={props.searchBy}
          search={props.search}
          getMoviesThunk={props.getMoviesThunk}
          genres={props.genres}
          setSelectedGenreAC={props.setSelectedGenreAC}
          selectedGenre={props.selectedGenre}
          setSelectedSearchTypeAC={props.setSelectedSearchTypeAC}
          selectedSearchType={props.selectedSearchType}
          setLoadingStatusAC = {props.setLoadingStatusAC}
        />
        <div className={css.found_movies_result}>
          found results: {props.allFoundMovies}
        </div>
      </div>
      <div className={css.container}>
        {props.movies.map((movie) => {
          return (
            <Movie
              setLoadingStatusAC = {props.setLoadingStatusAC}
              search={props.search}
              genres={props.genres}
              selectedSearchType={props.selectedSearchType}
              key={movie.id}
              movie={movie}
              getTrailersThunk={props.getTrailersThunk}
              trailers={props.trailers}
              setTrailersAC={props.setTrailersAC}
            />
          )
        })}
      </div>
      <div className={css.pagination_container}>
        <Pagination
          setLoadingStatusAC={props.setLoadingStatusAC}
          currentPage={props.currentPage}
          setCurrentPageAC={props.setCurrentPageAC}
          totalPages={props.totalPages}
          getMoviesThunk={props.getMoviesThunk}
          search={props.search}
          selectedGenre={props.selectedGenre}
          selectedSearchType={props.selectedSearchType}
        />
      </div>
    </div>
  )
}
