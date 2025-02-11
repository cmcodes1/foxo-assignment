import {Option} from '../components/RadioButton/types';
import mockData from '../mockData/mockData.json';
import {InputField, SetUserData, UserData, UserDataInputFields} from './types';

const isInputInvalid = (input: InputField) => {
  const isInvalid: boolean = !new RegExp(input.validation, 'i').test(
    input.value.toString(),
  );

  return isInvalid;
};

const getUserData = async (setUserData: SetUserData) => {
  setUserData(mockData);
};

const updateUserData = (
  field: UserDataInputFields,
  text: Option,
  userData: UserData | any,
  setUserData: SetUserData,
) => {
  const userDataCopy = {...userData};
  userDataCopy[field].value = field === 'age' ? Number(text) : text;
  setUserData(userDataCopy);
};

export {getUserData, isInputInvalid, updateUserData};
