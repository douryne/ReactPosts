import {useState} from 'react';

const useFetching = (callback) => {
  const [isLoading, setIsLoading]  = useState(true);
  const [error, setError] = useState('');

  const fetching = async (page, posts, limit) => {
      try {
      setIsLoading(true);
      await callback(page, posts, limit);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error];
};

export default useFetching;