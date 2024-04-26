import { UserListDiv } from '../UserListDiv/UserListDiv';
import { useUserInfo } from '../../hook/useUserInfo';

export const UserList = () => {
  const { users, loading, error } = useUserInfo();
  return (
    <div>
      <h1>Лист пользователей</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error.message}</p>}
      {!loading && !error && (
        <>
          {users && users.length > 0 ? (
            <UserListDiv users={users} />
          ) : (
            <p>Извините, нет данных.</p>
          )}
        </>
      )}
    </div>
  );
};
