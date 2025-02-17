import {RouteProp} from '@react-navigation/native';
import {Key, ReactNode} from 'react';

type UserDataInputField = string;

type InputField = {
  id: Key;
  fieldName: UserDataInputField;
  inputType: 'TextInput' | 'RadioButton' | string;
  validation: RegExp | string;
  value: string;
};

type UserData = InputField[];

type ScreenName = 'EnterDetails' | 'ShowDetails' | 'PreviewDetails';

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

type EnterDetailsProps = {
  navigation: Navigation;
};

type ShowDetailsProps = {
  route: RouteProp<any, any>;
  navigation: Navigation;
};

type PreviewDetailsProps = {
  route: RouteProp<any, any>;
  navigation: Navigation;
};

export type {
  EnterDetailsProps,
  ErrorBoundaryProps,
  ErrorBoundaryState,
  InputField,
  Navigation,
  PreviewDetailsProps,
  ScreenName,
  ShowDetailsProps,
  UserData,
};
