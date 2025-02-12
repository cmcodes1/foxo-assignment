import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {UserData} from '../helpers/types';
import {styles} from '../styles/styles';

export default function ShowDetails({route}: {route: RouteProp<any, any>}) {
  let userData: UserData = route?.params?.userData;

  return (
    <View style={styles.root}>
      <FlatList
        data={userData}
        renderItem={({item}) => (
          <View style={styles.row}>
            <Text style={styles.label}>{item.fieldName}: </Text>
            <Text style={styles.label}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
