import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const MessageScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.box}>
        <Text>MessageScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 8,
    marginVertical: 12,
  },
});
