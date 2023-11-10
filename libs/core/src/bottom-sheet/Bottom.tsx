import { useRef } from 'react';

import BottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Bottom = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet ref={bottomSheetRef}>
        <View style={styles.contentContainer}>
          <Text>Awesome </Text>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#red',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Bottom;
