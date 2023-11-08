import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { Typography } from '@libs/constants';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.text}>App</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...Typography({
      weight: 'bold',
    }),
    textAlign: 'center',
  },
});

export default App;
