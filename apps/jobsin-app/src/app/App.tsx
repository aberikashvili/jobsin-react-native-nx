import { StatusBar } from 'react-native';

import StackNavigator from './navigators/StackNavigator';
import { StoreProvider } from './store/JobsData';

export const App = () => {
  return (
    <StoreProvider>
      <StatusBar barStyle="dark-content" />
      <StackNavigator />
    </StoreProvider>
  );
};

export default App;

import { StatusBar } from 'react-native';

import StackNavigator from './navigators/StackNavigator';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StackNavigator />
    </>
  );
};

export default App;
