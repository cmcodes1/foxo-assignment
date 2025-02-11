import {TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {InputProps} from './types';
import RadioButton from '../RadioButton/RadioButton';
import {isInputInvalid} from '../../helpers/helpers';

export default function Input(props: InputProps): React.JSX.Element {
  const {inputFieldName, inputField, onPress} = props;

  const options = ['M', 'F', 'Nonbinary'];

  return (
    <>
      {inputField.inputType === 'RadioButton' && inputFieldName === 'gender' ? (
        <RadioButton
          options={options}
          value={inputField.value.toString()}
          onPress={onPress}
        />
      ) : (
        <TextInput
          value={inputField.value.toString()}
          onChangeText={onPress}
          style={[
            styles.textInput,
            isInputInvalid(inputField) && styles.textInputError,
          ]}
          keyboardType={inputFieldName === 'age' ? 'numeric' : 'default'}
        />
      )}
    </>
  );
}
