import { useState } from 'react';

import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

import { Typography } from '@libs/constants';
import { Bottom } from '@libs/core';

const HomeScreen = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Open Bottom Sheet"
        onPress={() => setBottomSheetVisible(true)}
      />
      <Text style={styles.text}>HomeScreen</Text>
      <Bottom
        isVisible={bottomSheetVisible}
        height={300}
        onClose={() => setBottomSheetVisible(false)}
      >
        <Text>This is the content of the bottom sheet.</Text>
      </Bottom>
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
