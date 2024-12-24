import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {default as React} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import CreateTaskIcon from '../icons/CreateTaskIcon';
import ListIcon from '../icons/ListIcon';
import {NewTaskScreen, TaskListScreen} from '../pages';

const Tab = createBottomTabNavigator();

export function TabScreens() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: tabBarStyle.tabBarContainer,
        tabBarInactiveTintColor: '#7C819E',
        tabBarActiveTintColor: '#E7E2DE',
        headerStyle: {backgroundColor: '#212121'},
        headerTitleStyle: {
          color: '#fff',
          fontSize: 30,
          alignSelf: 'center',
          height: '100%',
          textAlign: 'center',
          paddingTop: 10,
          width: Dimensions.get('window').width - 30,
          borderBottomColor: '#FF9800',
          borderBottomWidth: 2,
          borderStyle: 'solid',
          marginBottom: 20,
        },
      }}>
      <Tab.Screen
        name="NewTaskScreen"
        component={NewTaskScreen}
        options={{
          title: 'Новое задание',
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: icon => (
            <View
              style={[
                tabBarStyle.scanPlace,
                {
                  backgroundColor: icon.focused ? '#FF9800' : '#FFF',
                },
              ]}>
              <CreateTaskIcon />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="TaskListScreen"
        component={TaskListScreen}
        options={{
          title: 'Все задания',
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: icon => (
            <View
              style={[
                tabBarStyle.scanPlace,
                {
                  backgroundColor: icon.focused ? '#FF9800' : '#FFF',
                },
              ]}>
              <ListIcon />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const tabBarStyle = StyleSheet.create({
  tabBarContainer: {
    position: 'relative',
    backgroundColor: '#212121',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 70,
    paddingTop: 15,
  },

  iconContainer: {
    borderRadius: 30,
    backgroundColor: '#fff',
  },

  everyIcon: {
    width: 24,
    height: 24,
  },

  scanPlace: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#8EAEFD',
    position: 'absolute',
    padding: 10,
    elevation: 1,
    shadowColor: '#8EAEFD',
  },
});
