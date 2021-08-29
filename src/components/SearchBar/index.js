import React, { useState, useEffect, useRef } from 'react';

import searchIcon from '../../images/search-icon.svg'

import { Content, Wrapper } from './SearchBar.styles'

const SearchBar = ({ setSearchTerm }) => {

  const [state, setState] = useState('')

  return <Wrapper>
    <Content>

      <img src={searchIcon} alt='A magnifying glass search icon' />
      <input
        type='text'
        placeholder='Search Movie'
        onChange={event => setState(event.currentTarget.value)}
        value={state}
      />

    </Content>
  </Wrapper>
}

export default SearchBar
