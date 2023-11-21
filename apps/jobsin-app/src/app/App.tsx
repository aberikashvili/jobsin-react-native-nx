import React, { useState } from 'react';

import { Text, View } from 'react-native';

import { RadioButton } from '@libs/core';

const App: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  const handleRadioButtonPress = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Your App</Text>
      <RadioButton
        label="Option 1"
        selected={selectedValue === 'option1'}
        onPress={() => handleRadioButtonPress('option1')}
      />
      <RadioButton
        label="Option 2"
        selected={selectedValue === 'option2'}
        onPress={() => handleRadioButtonPress('option2')}
      />
    </View>
  );
};

export default App;
