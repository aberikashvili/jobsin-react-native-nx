import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const PostingScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.box}>
        <Text>PostingScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default PostingScreen;

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 8,
    marginVertical: 12,
  },
});
