import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TabScreens} from './';
import {NewTaskScreen} from '../pages';

const Stack = createStackNavigator<any>();

export function NavigationScreens() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Group> */}
          <Stack.Screen
            name="NewTaskScreen"
            component={TabScreens}
            options={{
              headerShown: false,
              cardStyle: {backgroundColor: '#FFFFFF'},
            }}
          />
          {/* </Stack.Group> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  titleStyle: {
    color: '#333333',
    fontFamily: 'NotoSansArmneian-SemiBold',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    paddingTop: 15,
    textAlign: 'center',
  },
});
