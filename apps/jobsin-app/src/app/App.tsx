import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { Typography } from '@libs/constants';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={styles.text}>App</Text>
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
