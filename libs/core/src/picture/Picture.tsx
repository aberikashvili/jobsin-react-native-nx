import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from 'react-native';

import { Palette } from '@libs/constants';

export type PictureProps = {
  source: ImageSourcePropType | string;
  circle?: boolean;
  width: number;
  height: number;
  onPress?: (event: GestureResponderEvent) => void;
  border?: boolean;
};

export const Picture = ({
  width,
  height,
  circle,
  source,
  onPress,
  border,
}: PictureProps) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        style={[border && styles.image, { width, height }]}
        source={typeof source === 'string' ? { uri: source } : source}
        borderRadius={circle ? width / 2 : 0}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    borderWidth: 1,
    borderColor: Palette.blue1,
  },
});

export default Picture;
