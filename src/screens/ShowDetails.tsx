import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {ShowDetailsProps, UserData} from '../helpers/types';
import {styles} from '../styles/styles';

export default function ShowDetails({route, navigation}: ShowDetailsProps) {
  let userData: UserData = route?.params?.userData;

  const handleBack = () => {
    navigation.goBack();
  };

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
      <Button title="Go Back" onPress={handleBack} />
    </View>
  );
}
