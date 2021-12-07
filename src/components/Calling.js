import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

const _color = '#6e01ef';
const _size = 100;

export default function Calling() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map((item) => {
          return (
            <MotiView
              key={item}
              from={{ opacity: 0.7, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{
                loop: true,
                type: 'timing',
                duration: 2000,
                easing: Easing.out(Easing.ease),
                delay: item * 400,
                repeatReverse: false,
              }}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          );
        })}
        <Feather name='phone-outgoing' size={32} color='#fff' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
