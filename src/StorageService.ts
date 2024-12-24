import SecureStorage from 'react-native-encrypted-storage';

export const loadTasks = async () => {
  const storedTasks = await SecureStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const saveTasks = async (tasks: any) => {
  await SecureStorage.setItem('tasks', JSON.stringify(tasks));
};
