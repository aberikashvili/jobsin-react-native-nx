import React from 'react';

import { StyleSheet, View } from 'react-native';

import { Input } from '@libs/core';

const App = () => {
  const handleRegistration = (formData) => {
    formData;
  };

  return (
    <View style={styles.container}>
      <Input onSubmit={handleRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
