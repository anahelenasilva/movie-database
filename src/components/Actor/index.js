import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Image } from './Actor.styles'

const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt={name} />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
)

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
}

export default Actor
