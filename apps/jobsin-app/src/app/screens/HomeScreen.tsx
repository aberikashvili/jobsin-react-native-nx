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
    marginHorizontal: 23,
  },
  header: {
    height: 71,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  textBox: {
    justifyContent: 'flex-end',
  },
  yourWelcome: {
    ...Typography({
      weight: 'bold',
      size: 22,
    }),
    color: Palette.blue,
  },
  userNameStyle: {
    ...Typography({
      weight: '700',
      size: 22,
    }),
    color: Palette.blue,
  },
  box: {
    backgroundColor: Palette.blue1,
    width: '100%',
    height: 143,
    borderRadius: 6,
    marginBottom: 24,
  },
  promoBox: {
    paddingLeft: 17,
    paddingTop: 24,
    alignItems: 'flex-start',
  },
  promoImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  btnBox: {
    backgroundColor: Palette.yellow,
    borderRadius: 6,
    marginTop: 18,
  },
  btnTitle: {
    color: Palette.white,
    paddingHorizontal: 17,
    paddingVertical: 5,
  },
  pomotionText: {
    ...Typography({
      size: 18,
      style: 'normal',
    }),
    color: Palette.white,
  },
  text: {
    ...Typography({
      weight: 'bold',
      size: 18,
    }),
  },
});
