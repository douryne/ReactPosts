import {useState} from 'react';

const useFetching = (callback) => {
  const [isLoading, setIsLoading]  = useState(true);
  const [error, setError] = useState('');

  const fetching = async () => {
      try {
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error];
};

export default useFetching;