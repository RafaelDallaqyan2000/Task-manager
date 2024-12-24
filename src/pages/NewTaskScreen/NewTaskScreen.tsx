import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import {TaskForm} from '../../components';
import {loadTasks, saveTasks} from '../../StorageService';
import {styles} from './styles';

const NewTaskScreen = () => {
  const [tasks, setTasks] = useState<any>([]);

  useFocusEffect(
    useCallback(() => {
      loadTasks().then(setTasks);
    }, []),
  );

  const addTask = (task: any) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveTasks(newTasks);
    Alert.alert('Задание сохранено');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TaskForm addTask={addTask} />
    </SafeAreaView>
  );
};

export default NewTaskScreen;
