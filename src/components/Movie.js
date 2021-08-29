import React from 'react';
import { useParams } from 'react-router';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'

import Grid from './Grid';
import Spinner from './Spinner';

import { useMovieFetch } from '../hooks/useMovieFetch';

import NoImage from '../images/no_image.jpg'

const Movie = () => {

  const { movieId } = useParams()
  const { error, loading, state: movie } = useMovieFetch(movieId)

  return (
    <>
      <div>Movie</div>
    </>
  )
}

export default Movie
