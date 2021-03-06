import React from 'react'
import PropTypes from 'prop-types';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'

import NoImage from '../../images/no_image.jpg'

import { Content, Text, Wrapper } from './MovieInfo.styles'

import Thumb from '../Thumb'

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backgrop_path}>
    <Content>
      <Thumb
        image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
        clickable={false}
        alt='movie thumbnail'
        movieId={movie.id}
      />

      <Text>
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>

        <div className='rating-director'>
          <div>
            <h3>RATING</h3>
            <div className='score'>{movie.vote_average}</div>
          </div>

          <div className='director'>
            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
            {movie.directors.map(({ name, credit_id }, i) => (
              <p key={credit_id}>{name}</p>
            ))}
          </div>
        </div>

      </Text>
    </Content>
  </Wrapper>
)

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieInfo
