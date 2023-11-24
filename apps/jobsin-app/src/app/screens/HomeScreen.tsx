import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.box}>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 8,
    marginVertical: 12,
  },
});
