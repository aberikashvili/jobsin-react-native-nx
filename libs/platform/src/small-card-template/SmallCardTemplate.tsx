import React from 'react';

import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Palette, Typography } from '@libs/constants';

export type SmallCardTemplateProps = {
  imageSrc: ImageSourcePropType;
  title: string;
  subTitle?: string;
  onButtonPress?: (event: GestureResponderEvent) => void;
  buttonText?: string;
};

export const SmallCardTemplate: React.FC<SmallCardTemplateProps> = ({
  imageSrc,
  title,
  subTitle = '',
  onButtonPress,
  buttonText = 'follow',
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageSrc} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      {subTitle && <Text style={styles.cardSubtitle}>{subTitle}</Text>}
      {onButtonPress && (
        <Pressable style={styles.cardButton} onPress={onButtonPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Palette.white,
    width: 160,
    height: 191,
    alignItems: 'center',
  },
  cardImage: {
    width: 46,
    height: 46,
    borderRadius: 8,
    marginBottom: 8,
    marginTop: 25,
  },
  cardTitle: {
    ...Typography({
      weight: '700',
      size: 14,
    }),
    color: Palette.blue,
    marginTop: 10,
  },
  cardSubtitle: {
    ...Typography({
      size: 14,
    }),
    color: Palette.darkGrey,
    marginTop: 5,
    marginBottom: 15,
  },
  cardButton: {
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Palette.deepPurple,
    borderRadius: 20,
    width: 100,
  },
  buttonText: {
    color: Palette.blue,
    ...Typography({
      size: 12,
      weight: '400',
    }),
    marginTop: 8,
    marginBottom: 8,
  },
});

export default SmallCardTemplate;
