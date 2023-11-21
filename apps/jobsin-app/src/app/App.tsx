// import React, { useState } from 'react';

// import { StatusBar, StyleSheet, Text, View } from 'react-native';

// import { Typography } from '@libs/constants';
// import { Button, Checkbox, RadioButton } from '@libs/core';
// import { SmallCardTemplate } from '@libs/platform';

// export const App = () => {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = (newIsChecked: boolean) => {
//     setIsChecked(newIsChecked);
//   };

//   const handleButtonPress = () => {
//     console.log('Button pressed');
//   };

//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <View style={styles.container}>
//         <Text style={styles.text}>App</Text>
//       </View>
//       <View style={styles.container}>
//         <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
//       </View>
//       <View>
//         <RadioButton />
//       </View>
//       <View>
//         <SmallCardTemplate
//           imageSrc={require('../../assets/testphoto.png')}
//           title="Google Inc"
//           subTitle="1M Followers"
//           onButtonPress={handleButtonPress}
//           buttonText="Follow"
//         />
//       </View>
//       <View>
//         <Button textMode="white">LOGIN</Button>
//         <Button mode="purple" textMode="blue">
//           Sign in with Google
//         </Button>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     ...Typography({
//       weight: 'bold',
//     }),
//     textAlign: 'center',
//     marginTop: 100,
//   },
// });

// export default App;

import React, { useState } from 'react';

import { Text, View } from 'react-native';

import { RadioButton } from '@libs/core';

const App: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  const handleRadioButtonPress = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Your App</Text>
      <RadioButton
        label="Option 1"
        selected={selectedValue === 'option1'}
        onPress={() => handleRadioButtonPress('option1')}
      />
      <RadioButton
        label="Option 2"
        selected={selectedValue === 'option2'}
        onPress={() => handleRadioButtonPress('option2')}
      />
    </View>
  );
};

export default App;
