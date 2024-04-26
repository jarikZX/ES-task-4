import { useQuery } from './useQuery';
import { fetchUserList } from '../api/users';

export const useUserInfo = () => {
  const { data: users, loading, error } = useQuery(fetchUserList);

        
  return { users: users, loading, error };
};