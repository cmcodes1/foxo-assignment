import React from 'react';
import {TextInput} from 'react-native';
import {isInputInvalid} from '../../helpers/helpers';
import RadioButton from '../RadioButton/RadioButton';
import {styles} from './styles';
import {InputProps} from './types';

export default function Input(props: InputProps): React.JSX.Element {
  const {inputField, onPress} = props;

  const options = ['M', 'F', 'Nonbinary'];

  return (
    <>
      {inputField.inputType === 'RadioButton' &&
      inputField.fieldName === 'gender' ? (
        <RadioButton
          options={options}
          value={inputField.value}
          onPress={onPress}
        />
      ) : (
        <TextInput
          value={inputField.value}
          onChangeText={onPress}
          style={[
            styles.textInput,
            isInputInvalid(inputField) && styles.textInputError,
          ]}
          keyboardType={inputField.fieldName === 'age' ? 'numeric' : 'default'}
        />
      )}
    </>
  );
}
