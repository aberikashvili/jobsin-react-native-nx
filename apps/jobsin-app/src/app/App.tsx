import { StatusBar } from 'react-native';

import StackNavigator from './navigators/StackNavigator';

export const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
<<<<<<< HEAD
      <StackNavigator />
=======
      <View style={styles.container}>
        <Text style={styles.text}>App</Text>
      </View>
>>>>>>> 224a7df (add functionality to close the modal by pressing outside of the Modal.)
    </>

  );
};

<<<<<<< HEAD
=======
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

>>>>>>> 224a7df (add functionality to close the modal by pressing outside of the Modal.)
export default App;
