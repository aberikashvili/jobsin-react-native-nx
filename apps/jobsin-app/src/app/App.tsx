import { StatusBar } from 'react-native';

import StackNavigator from './navigators/StackNavigator';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StackNavigator />
    </>
  );
};

export default App;
