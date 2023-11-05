import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const SaveJobScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.box}>
        <Text>SaveJobScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SaveJobScreen;

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 8,
    marginVertical: 12,
  },
});
