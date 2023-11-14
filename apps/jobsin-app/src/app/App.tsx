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
    backgroundColor: '#fff',
  },
  text: {
    ...Typography({
      weight: 'bold',
    }),
  },
  sliderContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 4,
    borderRadius: 10,
  },
});

export default App;
