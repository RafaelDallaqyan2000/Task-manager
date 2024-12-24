import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationScreens} from './src/navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationScreens />
    </SafeAreaView>
  );
}

export default App;
