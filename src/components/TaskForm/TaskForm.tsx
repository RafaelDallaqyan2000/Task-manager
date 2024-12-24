import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {globalStyles} from '../../styles';
import {styles} from './styles';

type TaskType = {
  title: string;
  description: string;
  date: any;
  location: string;
  id?: number;
};

type FormType = {
  addTask: (task: TaskType) => void;
};

const TaskForm = ({addTask}: FormType) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [task, setTask] = useState<TaskType>({
    title: '',
    description: '',
    date: '',
    location: '',
    id: Date.now(),
  });
  const [date, setDate] = useState<any>(new Date());
  const [error, setError] = useState('');

  const handleSave = () => {
    if (task.title) {
      addTask({...task, id: Date.now()});
      setTask({title: '', description: '', date: '', location: ''});
    } else {
      Alert.alert('Пожалуйста заполните поле название');
      setError('Это поле объязательное');
    }
  };

  useEffect(() => {
    setTask((prev: TaskType) => {
      return {...prev, date};
    });
  }, [date]);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputsContainer}>
          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.text}>Название</Text>
            <TextInput
              style={[styles.input, error && styles.error]}
              placeholder="Название"
              placeholderTextColor="lightgray"
              value={task.title}
              onChangeText={title => setTask({...task, title})}
            />
            {error && <Text style={styles.error}>{error}</Text>}
          </View>
          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.text}>Описание</Text>
            <TextInput
              style={styles.input}
              placeholder="Описание"
              placeholderTextColor="lightgray"
              value={task.description}
              onChangeText={description => setTask({...task, description})}
            />
          </View>

          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.text}>Местоположение</Text>
            <TextInput
              style={styles.input}
              placeholder="Местоположение"
              placeholderTextColor="lightgray"
              value={task.location}
              onChangeText={location => setTask({...task, location})}
            />
          </View>
          <DatePicker
            modal
            open={openDatePicker}
            date={date}
            onDateChange={setDate}
            onConfirm={date => {
              setOpenDatePicker(false);
              setDate(date);
              setTask({...task, date: `${date}`});
            }}
            onCancel={() => {
              setOpenDatePicker(false);
            }}
          />

          <View style={globalStyles.buttonContainer}>
            {date ? (
              <Text style={globalStyles.text}>
                Выбранная дата:
                <Text style={styles.selectedDate}>
                  {' '}
                  {moment(date).format('DD/MM/YYYY HH:mm')}
                </Text>
              </Text>
            ) : null}
            <TouchableOpacity
              onPress={() => setOpenDatePicker(true)}
              style={styles.selectDateBtnContainer}>
              <Text style={styles.selectDateBtnText}>Выбрать дату</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={handleSave} style={styles.saveBtnContainer}>
          <Text style={styles.saveBtnText}>Сохранить</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default TaskForm;
