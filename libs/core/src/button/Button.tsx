import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

import { Palette, Typography } from '@libs/constants';

export type ButtonMode = 'blue' | 'purple';
export type TextMode = 'white' | 'blue';

export type ButtonProps = {
  children: string;
  onPress?: (event: GestureResponderEvent) => void;
  mode?: ButtonMode;
  textMode?: TextMode;
};

export const Button = ({
  children,
  mode = 'blue',
  textMode = 'white',
  onPress,
}: ButtonProps) => {
  const containerStyle =
    mode === 'blue' ? styles.blueContainer : styles.purpleContainer;

  const textStyles =
    textMode === 'white' ? styles.whitetitle : styles.bluetitle;

  return (
    <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
      <Text style={textStyles}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: Palette.blue,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  blueContainer: {
    backgroundColor: Palette.blue,
  },
  purpleContainer: {
    backgroundColor: Palette.purple,
  },
  whitetitle: {
    color: Palette.white,
    ...Typography({ weight: '700', size: 14 }),
  },
  bluetitle: {
    color: Palette.blue,
    ...Typography({ weight: '700', size: 14 }),
  },
});
