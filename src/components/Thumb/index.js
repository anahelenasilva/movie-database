import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Image } from './Thumb.styles'

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ?
      (<Link to={`/${movieId}`}>
        <Image src={image} alt='movie thumbnail' />
      </Link>)
      : (<Image src={image} alt='movie thumbnail' />)
    }
  </div>
)

Thumb.propTypes = {
  image: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
  clickable: PropTypes.bool.isRequired
}

export default Thumb;
