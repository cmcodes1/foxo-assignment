import {InputField, UserDataInputFields} from '../../helpers/types';
import {Option} from '../RadioButton/types';

type InputProps = {
  inputFieldName: UserDataInputFields;
  inputField: InputField;
  onPress: (text: Option) => void;
};

export type {InputProps};
