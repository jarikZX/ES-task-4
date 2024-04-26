export const UserListDiv = ({ users }) => {
  return (
    <ul>
      {
        users.map((user) => (
          <li key={user.id}>
            <p><strong>Имя:</strong> {user.name}</p>
            <p><strong>Телефон:</strong> {user.phone}</p>
            <p><strong>Веб-сайт:</strong> {user.website}</p>
          </li>
        ))}
    </ul>
  );
};
