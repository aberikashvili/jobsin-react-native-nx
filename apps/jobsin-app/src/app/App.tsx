import React, { useState } from 'react';

import { Typography } from '@libs/constants';
import { SmallCardTemplate } from '@libs/platform';
import { Checkbox } from '@libs/core';

export const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (newIsChecked: boolean) => {
    setIsChecked(newIsChecked);
  };
    
  const handleButtonPress = () => {
    console.log('Button pressed');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={styles.text}>App</Text>
      </View>
      <View style={styles.container}>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});

export default App;
