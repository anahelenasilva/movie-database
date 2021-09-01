import React, { Component } from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
import API from '../API';

import NoImage from '../images/no_image.jpg'

import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import SearchBar from './SearchBar';
import Button from './Button';

import Spinner from './Spinner';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
}

class Home extends Component {
  state = {
    movies: initialState,
    searchTerm: '',
    loading: false,
    isLoadingMore: false,
    error: false
  }

  fetchMovies = async (page, searchTerm = '') => {
    try {
      this.setState({ loading: true, error: false })

      const movies = await API.fetchMovies(searchTerm, page)

      this.setState(prev => ({
        ...prev,
        movies: {
          ...movies,
          results: page > 1 ? [...prev.movies.results, ...movies.results] : [...movies.results]
        },
        loading: false,
      }))

    } catch (error) {
      this.setState({ loading: false, error: true })
    }
  }

  handleSearch = (searchTerm) => {
    this.setState({ movies: initialState, searchTerm }, () => {
      this.fetchMovies(1, this.state.searchTerm)
    })
  }

  handleLoadMore = () => {
    this.fetchMovies(this.state.movies.page + 1, this.state.searchTerm)
  }

  componentDidMount() {
    this.fetchMovies(1);
  }

  render() {
    const { error, movies, loading, searchTerm } = this.state

    if (error) return <div>Something went wrong ...</div>

    return (
      <>
        {!searchTerm && movies.results[0] && //short circuit
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
            title={movies.results[0].original_title}
            text={movies.results[0].overview}
          />
        }

        <SearchBar setSearchTerm={this.handleSearch} />

        <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
          {movies.results.map(movie => (
            <Thumb
              key={movie.id}
              clickable
              image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
              movieId={movie.id}
            >
              {movie.title}
            </Thumb>
          ))}
        </Grid>

        {loading && <Spinner />}
        {movies.page < movies.total_pages && !loading && (
          <Button text={'Load More'} callback={this.handleLoadMore} />
        )}

      </>
    )
  }


}

export default Home
