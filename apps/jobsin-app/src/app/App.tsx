import { StatusBar } from 'react-native';

import StackNavigator from './navigators/StackNavigator';

export const App =()=> {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StackNavigator />
    </>
  );
};

export default App;
