import React, { useState } from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Palette } from '@libs/constants';

type InputProps = {
  onSubmit: (formData: {
    fullName: string;
    email: string;
    password: string;
  }) => void;
};

export const Input: React.FC<InputProps> = ({ onSubmit }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handleInputChange = () => {
    onSubmit({ fullName, email, password });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.inputField}
          value={fullName}
          onChangeText={(text) => {
            setFullName(text);
            handleInputChange();
          }}
        />
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.inputField}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            handleInputChange();
          }}
        />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              handleInputChange();
            }}
            secureTextEntry={isPasswordHidden}
          />
          <Icon
            name={isPasswordHidden ? 'ios-eye' : 'ios-eye-off'}
            size={24}
            color="gray"
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  label: {
    color: Palette.black,
    fontSize: 18,
    marginBottom: 10,
  },
  inputField: {
    width: 317,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    width: 317,
    fontSize: 16,
  },
  eyeIcon: {
    paddingRight: 10,
  },
});
