import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import { Checkbox } from '@libs/core';

const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (newIsChecked: boolean) => {
    setIsChecked(newIsChecked);
  };

  return (
    <View style={styles.container}>
      <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});

export default App;
