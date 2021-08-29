import { useState, useEffect } from 'react';

import API from '../API';

const inititalState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
}

export const useHomeFetch = () => {
  const [state, setState] = useState(inititalState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false)
      setLoading(true)

      const movies = await API.fetchMovies(page, searchTerm)

      setState(prev => ({
        ...movies,
        results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
      }))

    } catch (error) {
      setError(true)
      setLoading(false)
    }

    setLoading(false)
  }

  useEffect(() => {

    fetchMovies(1)

  }, [])//only when mount

  return { state, loading, error, setSearchTermState: setSearchTerm }
}
