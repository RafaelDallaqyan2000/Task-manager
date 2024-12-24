import moment from 'moment';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import DeleteIcon from '../../icons/DeleteIcon';
import ViewIcon from '../../icons/ViewIcon';
import {saveTasks} from '../../StorageService';
import Alert from '../Alert/Alert';
import {CustomButton} from '../CustomButton/CustomButton';
import Status from '../Status/Status';
import {styles} from './styles';

type TaskItemType = {
  task: {
    title: string;
    id: number;
    description?: string;
    date?: any;
    status: string;
  };
  deleteTask: (taskId: number) => void;
  setTasks: any;
};
const TaskItem = ({task, deleteTask, setTasks}: TaskItemType) => {
  const [openShowDialog, setOpenShowDialog] = useState(false);
  const handleChangeStatus = (status: string) => {
    setTasks((prev: any) => {
      const updatedTasks = prev.map((t: any) => {
        if (t.id === task.id) {
          return {...t, status};
        }
        return t;
      });
      saveTasks(updatedTasks);
      return updatedTasks;
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={{color: '#fff'}}>{task.title}</Text>
        <Text style={{color: '#fff'}}>{task.description}</Text>
        <View>
          <View style={styles.iconContainer}>
            <CustomButton
              icon={<ViewIcon />}
              onPress={() => setOpenShowDialog(!openShowDialog)}
              containerStyle={styles.viewBtnContainer}
            />
            <CustomButton
              icon={<DeleteIcon />}
              onPress={() => deleteTask(task.id)}
              containerStyle={styles.deleteBtnContainer}
              textStyle={styles.deleteBtnText}
            />
          </View>
          <Status
            containerStyles={styles.statusContainer}
            handleSelectStatus={handleChangeStatus}
            status={task.status}
          />
        </View>
      </View>
      <Alert
        open={openShowDialog}
        setOpen={setOpenShowDialog}
        child={
          <View style={styles.alertContainer}>
            <Text style={{color: '#fff'}}>Название: {task.title}</Text>
            <Text style={{color: '#fff'}}>Описание: {task.description}</Text>
            {task.date && (
              <Text style={{color: '#fff'}}>
                Дата и время исполнения:{' '}
                {moment(task.date).format('DD/MM/YYYY HH:mm')}
              </Text>
            )}
          </View>
        }
      />
    </View>
  );
};

export default TaskItem;
