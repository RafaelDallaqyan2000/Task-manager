import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type ButtonType = {
  title?: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: any;
};
export function CustomButton({
  title,
  onPress,
  containerStyle,
  textStyle,
  icon,
}: ButtonType) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {title && <Text style={[styles.textStyle, textStyle]}>{title}</Text>}
      {icon && <View>{icon}</View>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF9800',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
