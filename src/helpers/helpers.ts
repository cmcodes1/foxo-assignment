import {Option} from '../components/RadioButton/types';
import {InputField, SetUserData, UserData, UserDataInputFields} from './types';

const isInputInvalid = (input: InputField) => {
  const isInvalid: boolean = !new RegExp(input.validation, 'i').test(
    input.value.toString(),
  );

  return isInvalid;
};

const updateUserData = (
  field: UserDataInputFields,
  text: Option,
  userData: UserData | any,
  setUserData: SetUserData,
) => {
  const userDataCopy = {...userData};
  userDataCopy[field].value = text;
  setUserData(userDataCopy);
};

export {isInputInvalid, updateUserData};
