import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { Typography } from '@libs/constants';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 12,
  },
  text: {
    ...Typography({
      weight: 'bold',
      size: 18,
    }),
  },
});
