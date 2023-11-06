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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...Typography({
      weight: 'bold',
    }),
  },
});

export default App;
