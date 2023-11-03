export type FontStyle = 'italic' | 'normal';

export type FontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'bold'
  | 'normal';

export type TypographyParams = {
  font?: string;
  size?: number;
  weight?: FontWeight;
  style?: FontStyle;
};

export const Typography = ({
  size = 14,
  weight = 'normal',
  style = 'normal',
}: TypographyParams) => {
  return {
    fontSize: size,
    fontWeight: weight,
    fontStyle: style,
  };
};
