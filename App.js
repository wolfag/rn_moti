import React, { useReducer } from 'react';
import { View } from 'react-native';
import Calling from './src/components/Calling';
import Loading from './src/components/Loading';
import Switcher from './src/components/Switcher';

export default function App() {
  const [isActive, toggle] = useReducer((s) => !s, false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <Switcher isActive={isActive} onPress={toggle} /> */}
      {/* <Loading /> */}
      <Calling />
    </View>
  );
}
