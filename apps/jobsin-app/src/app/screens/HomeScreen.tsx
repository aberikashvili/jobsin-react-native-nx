import { useState } from 'react';

import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Typography } from '@libs/constants';
import { Bottom, Picture } from '@libs/core';

import { UseStore } from '../store/JobsData';

const HomeScreen = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const { data } = UseStore();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Picture circle={true} width={50} height={50} source={data[0].image} />
        <Text style={styles.text}>{data[0].username}</Text>
      </View>
      <View style={styles.bottomSheet}>
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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    marginVertical: 12,
  },
  header: {},
  bottomSheet: {},
  text: {
    ...Typography({
      weight: 'bold',
      size: 18,
    }),
  },
});
