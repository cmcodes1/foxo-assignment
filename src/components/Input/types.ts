import {InputField} from '../../helpers/types';
import {Option} from '../RadioButton/types';

type InputProps = {
  inputField: InputField;
  onPress: (text: Option) => void;
};

export type {InputProps};
