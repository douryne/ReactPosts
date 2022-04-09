import {useState} from 'react';

const useFetching = (callback) => {
  const [isLoading, setIsLoading]  = useState(true);
  const [error, setError] = useState('');

  const fetching = async (page) => {
      try {
      await callback(page);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error];
};

export default useFetching;