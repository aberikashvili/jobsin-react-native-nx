import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Palette } from '@libs/constants';

export type RadioButtonProps = {
  label: string;
  selected?: boolean;
  onPress: () => void;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.radioButton}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginTop: 50,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: Palette.black,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'yellow',
  },
});

export default RadioButton;
