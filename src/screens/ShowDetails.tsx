import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {UserData} from '../helpers/types';
import {styles} from '../styles/styles';

export default function ShowDetails({route}: {route: RouteProp<any, any>}) {
  let userData: UserData = route?.params?.userData;

  return (
    <View style={styles.root}>
      <ScrollView>
        {userData &&
          Object.entries(userData).map(item => (
            <View key={item[0]} style={styles.row}>
              <Text style={styles.label}>{item[0]}: </Text>
              <Text style={styles.label}>{item[1].value}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}
