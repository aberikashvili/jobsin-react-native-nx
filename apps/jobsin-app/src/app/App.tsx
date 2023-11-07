import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { Typography } from '@libs/constants';
import { SmallCardTemplate } from '@libs/platform';

export const App = () => {
  const handleButtonPress = () => {
    console.log('Button pressed');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={styles.text}>App</Text>
      </View>
      <View>
        <SmallCardTemplate
          imageSrc={require('../../assets/testphoto.png')}
          title="Google Inc"
          subTitle="1M Followers"
          onButtonPress={handleButtonPress}
          buttonText="Follow"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    ...Typography({
      weight: 'bold',
    }),
  },
});

export default App;
