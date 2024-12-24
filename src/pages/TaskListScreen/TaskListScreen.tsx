import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TaskItem} from '../../components';
import {CustomButton} from '../../components/CustomButton/CustomButton';
import {loadTasks, saveTasks} from '../../StorageService';
import {globalStyles} from '../../styles';

const TaskListScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [statusSort, setStatusSort] = useState(false);
  const [byDateAscending, setByDateDescending] = useState(false);

  useFocusEffect(
    useCallback(() => {
      loadTasks().then(setTasks);
    }, []),
  );

  const deleteTask = (taskId: number) => {
    const newTasks = tasks.filter((task: any) => +task.id !== +taskId);
    Alert.alert('Задание удалено');
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const sortByDate = () => {
    const sortedTasks = tasks.sort((a: any, b: any) => {
      if (byDateAscending) {
        return a.date > b.date ? 1 : -1;
      }
      return a.date < b.date ? 1 : -1;
    });
    setByDateDescending(!byDateAscending);
    setTasks(sortedTasks);
    saveTasks(sortedTasks);
  };

  const sortByStatus = () => {
    const sortedTasks = tasks.sort((a: any, b: any) =>
      statusSort
        ? a.status < b.status
          ? 1
          : -1
        : a.status > b.status
        ? 1
        : -1,
    );
    setStatusSort(!statusSort);
    setTasks(sortedTasks);
    saveTasks(sortedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={globalStyles.text}>Сортировать по:</Text>
        <CustomButton title="Дате" onPress={sortByDate} />
        <CustomButton title="Статусу" onPress={sortByStatus} />
      </View>
      <FlatList
        data={tasks}
        style={styles.listContainer}
        renderItem={({item}) => (
          <TaskItem
            key={item?.id}
            task={item}
            setTasks={setTasks}
            deleteTask={deleteTask}
          />
        )}
        keyExtractor={(item: any) => item?.id?.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    padding: 15,
  },
  listContainer: {
    height: 300,
    marginTop: 20,
    marginBottom: 30,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '99%',
    gap: 15,
  },
});

export default TaskListScreen;
