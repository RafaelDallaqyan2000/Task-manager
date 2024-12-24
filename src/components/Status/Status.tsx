import React, {useRef, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type StatusType = {
  status: string;
  handleSelectStatus: (value: any) => void;
  containerStyles?: StyleProp<ViewStyle>;
};

export default function Status({
  status = 'Делать',
  handleSelectStatus,
  containerStyles,
}: StatusType) {
  const [openStatus, setOpenStatus] = useState(false);
  const ref = useRef(null);

  const statuses = [
    {title: 'Завершено', color: 'green'},
    {title: 'В процессе', color: 'orange'},
    {title: 'Делать', color: 'red'},
  ];
  const statusColor = {
    Завершено: 'green',
    'В процессе': 'orange',
    Делать: 'red',
  };

  return (
    <TouchableOpacity style={containerStyles} ref={ref}>
      <TouchableOpacity
        onPress={() => setOpenStatus(!openStatus)}
        //@ts-ignore
        style={[styles.status, {backgroundColor: statusColor[status]}]}>
        <Text style={styles.statusText}>{status}</Text>
      </TouchableOpacity>
      {openStatus && (
        <View>
          {statuses.map(e => (
            <TouchableOpacity
              onPress={() => {
                handleSelectStatus(e.title);
                setOpenStatus(false);
              }}
              style={[styles.items, {backgroundColor: e.color}]}>
              <Text>{e.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  items: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
  status: {
    width: 100,
    borderRadius: 5,
    padding: 2,
  },
  statusText: {
    textAlign: 'center',
    color: '#fff',
  },
});
