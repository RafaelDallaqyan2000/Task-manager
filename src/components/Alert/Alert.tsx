import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

type AlertType = {
  open: boolean;
  setOpen: (b: boolean) => any;
  child: React.ReactElement;
};
export default function Alert({open, setOpen, child}: AlertType) {
  return open ? (
    <TouchableOpacity style={styles.container} onPress={() => setOpen(false)}>
      {child}
    </TouchableOpacity>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: 1000,
  },
});
