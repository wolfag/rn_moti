import React, { useMemo } from 'react';
import { View, Text, Pressable, Easing } from 'react-native';
import { MotiView } from 'moti';

const transition = {
  type: 'timing',
  duration: 300,
  // easing: Easing.inOut(Easing.ease),
};

export default function Switcher({
  size = 60,
  onPress,
  isActive,
  activeColor = '#2c2c2c',
  inactiveColor = '#dcdcdc',
}) {
  const trackWidth = useMemo(() => {
    return size * 1.5;
  }, [size]);

  const trackHeight = useMemo(() => {
    return size * 0.4;
  }, [size]);

  const knobSize = useMemo(() => {
    return size * 0.6;
  }, [size]);

  return (
    <Pressable onPress={onPress}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {/* track */}
        <MotiView
          transition={transition}
          from={{
            backgroundColor: isActive ? activeColor : inactiveColor,
          }}
          animate={{
            backgroundColor: isActive ? activeColor : inactiveColor,
          }}
          style={{
            position: 'absolute',
            width: trackWidth,
            height: trackHeight,
            borderRadius: trackHeight / 2,
          }}
        />

        {/* knob container */}
        <MotiView
          transition={transition}
          animate={{
            translateX: isActive ? trackWidth / 4 : -trackWidth / 4,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
          }}
        >
          {/* knob indicator */}
          <MotiView
            transition={transition}
            animate={{
              width: isActive ? 0 : knobSize,
              borderColor: isActive ? activeColor : inactiveColor,
            }}
            style={{
              width: knobSize,
              height: knobSize,
              borderRadius: knobSize / 2,
              borderWidth: size * 0.1,
            }}
          />
        </MotiView>
      </View>
    </Pressable>
  );
}
