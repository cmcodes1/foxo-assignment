import {Dispatch, SetStateAction} from 'react';

type InputField = {
  inputType: 'TextInput' | 'RadioButton' | string;
  validation: RegExp | string;
  value: string | number;
};

type SetState = Dispatch<SetStateAction<{}>>;

type SetUserData = Dispatch<SetStateAction<UserData>>;

type UserDataInputFields = 'age' | 'gender' | 'name' | string;

type UserData = {
  age: InputField;
  gender: InputField;
  name: InputField;
};

type ScreenName = 'EnterDetails' | 'ShowDetails';

type Navigation = {
  navigate: (screenName: ScreenName, params: {userData: UserData}) => any;
  goBack: () => void;
};

export type {
  InputField,
  SetState,
  SetUserData,
  UserDataInputFields,
  UserData,
  ScreenName,
  Navigation,
};
