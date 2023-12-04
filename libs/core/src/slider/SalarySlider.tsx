import React, { useEffect, useRef, useState } from 'react';

import { Slider } from '@miblanchard/react-native-slider';
import { Image, StyleSheet, Text, View } from 'react-native';

const SalarySlider = () => {
  const [sliderValue, setSliderValue] = useState([13, 25]);
  const sliderRef = useRef<View>(null);
  const [shadowSize, setShadowSize] = useState({ width: 0, left: 0 });

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.measure((_fx, _fy, width, _px, _py) => {
        const totalWidth = width;
        const min = 1;
        const max = 35;
        const valueRange = sliderValue[1] - sliderValue[0];
        const widthPerValue = totalWidth / (max - min);
        const shadowWidth = widthPerValue * valueRange;
        const shadowLeft = widthPerValue * (sliderValue[0] - min);

        setShadowSize({
          width: shadowWidth,
          left: shadowLeft,
        });
      });
    }
  }, [sliderValue]);

  const renderThumbLabel = (value: number) => {
    return (
      <View style={styles.thumbLabel}>
        <Text style={styles.valueLabel}>${value}k</Text>
      </View>
    );
  };

  return (
    <View style={styles.container} ref={sliderRef}>
      <Image
        style={[
          styles.stretch,
          { width: shadowSize.width, left: shadowSize.left },
        ]}
        source={require('../slider/shadowImg/shadow.png')}
      />
      <Slider
        value={sliderValue}
        onValueChange={setSliderValue}
        maximumValue={35}
        minimumValue={1}
        step={1}
        minimumTrackTintColor="#FF9228"
        maximumTrackTintColor="#CCC4C2"
        thumbTintColor="white"
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        renderBelowThumbComponent={(index) =>
          renderThumbLabel(sliderValue[index])
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  track: {
    height: 2,
    borderRadius: 2,
  },
  thumb: {
    height: 24,
    width: 24,
    padding: 4,
    borderRadius: 15,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 5,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  thumbLabel: {
    position: 'absolute',
    bottom: -20,
    alignSelf: 'center',
  },
  valueLabel: {
    textAlign: 'center',
    color: '#150b3d',
  },
  stretch: {
    position: 'absolute',
    bottom: 20,
    height: '80%',
  },
});

export default SalarySlider;
