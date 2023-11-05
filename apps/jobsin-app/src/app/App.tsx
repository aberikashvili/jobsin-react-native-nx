import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { Typography } from '@libs/constants';
import { Button } from '@libs/core';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={styles.text}>app</Text>
        <Button textMode="white">LOGIN</Button>
        <Button mode="purple" textMode="blue">
          Sign in with Google
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    ...Typography({
      weight: 'bold',
    }),
  },
});

export default App;
