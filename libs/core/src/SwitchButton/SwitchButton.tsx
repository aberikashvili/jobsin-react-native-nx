import React, { useState } from 'react';

import { StyleSheet, Switch, Text, View } from 'react-native';

import Icon, { icons } from '../IconComp/Icon';

type SwitchButtonProps = {
  icon: keyof typeof icons;
  label: string;
  initialValue?: boolean;
  onToggle?: (value: boolean) => void;
};

const SwitchButton: React.FC<SwitchButtonProps> = ({
  icon,
  label,
  initialValue = false,
  onToggle,
}) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);

  const toggleSwitch = () => {
    const newState = !isEnabled;

    setIsEnabled(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Icon name={icon} />
        <Text style={[styles.label, { marginLeft: 10 }]}>{label}</Text>
      </View>
      <Switch
        trackColor={{
          false: '#E5E5E5',
          true: '#56CD54',
        }}
        thumbColor={isEnabled ? '#FFFFFF' : '#3D4859'}
        ios_backgroundColor="#E5E5E5"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});

export default SwitchButton;
