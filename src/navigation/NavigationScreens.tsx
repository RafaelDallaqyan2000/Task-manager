import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TabScreens} from './';

const Stack = createNativeStackNavigator();

export function NavigationScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NewTaskScreen"
          component={TabScreens}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
