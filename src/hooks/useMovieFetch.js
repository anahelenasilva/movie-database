import { useState, useEffect } from 'react';

import API from '../API';

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {

    const fetchMovie = async () => {
      try {
        const movie = await API.fetchMovie(movieId)
        const credits = await API.fetchCredits(movieId)

        const directors = credits.crew.filter(member => member.job === 'Director')

        setState({
          ...movie,
          directors,
          actors: credits.cast
        });

        setLoading(false)
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchMovie();

  }, [movieId])

  return { state, loading, error };

}
