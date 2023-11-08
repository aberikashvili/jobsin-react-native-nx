<<<<<<< HEAD
import { StatusBar } from 'react-native';

import StackNavigator from './navigators/StackNavigator';
=======
import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import { Checkbox } from '@libs/core';

const App: React.FC = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StackNavigator />
    </>
  );
};

export default App;
