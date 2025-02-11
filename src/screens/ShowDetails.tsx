import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from '../styles/styles';
import {NavigationProp, RouteProp} from '@react-navigation/native';

export default function ShowDetails({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}) {
  let userData: {[key: string]: {value: string}} = route?.params?.userData;
  console.log('ShowDetails userData', userData);

  return (
    <View style={styles.root}>
      {userData &&
        Object.entries(userData).map(item => (
          <View key={item[0]} style={styles.row}>
            <Text style={styles.label}>{item[0]}: </Text>
            <Text style={styles.label}>{item[1].value}</Text>
          </View>
        ))}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
