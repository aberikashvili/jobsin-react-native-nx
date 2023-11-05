import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CreatJobScreen from '../screens/CreatJobScreen';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import PostingScreen from '../screens/PostingScreen';
import SaveJobScreen from '../screens/SaveJobScreen';

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: 10,
          height: 60,
        },
        tabBarActiveTintColor: '#333333',
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
        }}
      />
      <BottomTabs.Screen
        name="Posting"
        component={PostingScreen}
        options={{
          title: '',
        }}
      />
      <BottomTabs.Screen
        name="Create job or post"
        component={CreatJobScreen}
        options={{
          title: '',
        }}
      />
      <BottomTabs.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: '',
        }}
      />
      <BottomTabs.Screen
        name="Save job"
        component={SaveJobScreen}
        options={{
          title: '',
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabNavigator;
