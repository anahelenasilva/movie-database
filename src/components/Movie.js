import React from 'react';
import { useParams } from 'react-router';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'

import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';

import { useMovieFetch } from '../hooks/useMovieFetch';

import NoImage from '../images/no_image.jpg'
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';

const Movie = () => {

  const { movieId } = useParams()
  const { error, loading, state: movie } = useMovieFetch(movieId)

  if (loading) return <Spinner />
  if (error) return <div>Something went wrong...</div>

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue} />

      <Grid header='Actors'>
        {movie.actors.map(actor => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path ?
                `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            } />
        ))}
      </Grid>
    </>
  )
}

export default Movie
