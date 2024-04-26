import { useEffect, useState } from 'react';

export const useQuery = (queryCallback) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const responseData = await queryCallback();
      setData(responseData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
      
  fetchData();
}, [queryCallback]);

  return { data, loading, error };
} 
