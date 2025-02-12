import {Dispatch, Key, ReactNode, SetStateAction} from 'react';

type UserDataInputField = 'age' | 'gender' | 'name' | string;

type InputField = {
  id: Key;
  fieldName: UserDataInputField;
  inputType: 'TextInput' | 'RadioButton' | string;
  validation: RegExp | string;
  value: string;
};

type SetState = Dispatch<SetStateAction<{}>>;

type SetUserData = Dispatch<SetStateAction<InputField[]>>;

type UserData = InputField[];

type ScreenName = 'EnterDetails' | 'ShowDetails';

type Navigation = {
  navigate: (screenName: ScreenName, params: {userData: UserData}) => any;
  goBack: () => void;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

type ErrorBoundaryProps = {
  children: ReactNode;
};

export type {
  ErrorBoundaryProps,
  ErrorBoundaryState,
  InputField,
  Navigation,
  ScreenName,
  SetState,
  SetUserData,
  UserData,
};
