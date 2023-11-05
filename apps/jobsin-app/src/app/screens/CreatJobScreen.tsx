import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const CreatJobScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.box}>
        <Text>CreatJobScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CreatJobScreen;

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 8,
    marginVertical: 12,
  },
});
