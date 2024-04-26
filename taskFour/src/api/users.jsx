export async function fetchUserList() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error('Ответ сети нет');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Не удалось получить список пользователей.: ' + error.message);
  }
}