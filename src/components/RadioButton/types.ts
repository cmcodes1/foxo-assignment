type Option = string | 'M' | 'F' | 'Nonbinary';

type Options = Option[];

type OnPress = (item: Option) => void;

type RadioButtonProps = {
  options: Options;
  value: Option;
  onPress: OnPress;
};

export type {Option, RadioButtonProps};
