import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import EnterDetails from '../screens/EnterDetails';
import ShowDetails from '../screens/ShowDetails';

const Stack = createNativeStackNavigator();

export default function NavigationStack(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="EnterDetails"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="EnterDetails" component={EnterDetails} />
      <Stack.Screen
        name="ShowDetails"
        component={ShowDetails}
        options={{
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_bottom',
        }}
      />
    </Stack.Navigator>
  );
}
