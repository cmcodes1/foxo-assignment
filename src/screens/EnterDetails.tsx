import React, {useState} from 'react';
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';
import Input from '../components/Input/Input';
import {EnterDetailsProps, UserData} from '../helpers/types';
import mockData from '../mockData/mockData.json';
import {styles} from '../styles/styles';

export default function EnterDetails({navigation}: EnterDetailsProps) {
  const [userData, setUserData] = useState<UserData>(mockData);

  const clearFormData = () => {
    let mockDataEmpty = mockData.map(item => ({...item, value: ''}));
    setUserData(mockDataEmpty);
  };

  const handleSubmit = () => {
    navigation.navigate('ShowDetails', {
      userData: userData,
    });
    clearFormData();
  };

  return (
    <View style={styles.root}>
      {userData.length === 0 ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={userData}
          renderItem={({item, index}) => (
            <View style={styles.row}>
              <Text style={styles.label}>{item.fieldName}</Text>
              <Input
                inputField={item}
                onPress={text => {
                  let userDataCopy = JSON.parse(JSON.stringify(userData));
                  userDataCopy[index].value = text;
                  setUserData(userDataCopy);
                }}
              />
            </View>
          )}
          ListFooterComponent={<Button title="Submit" onPress={handleSubmit} />}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
}
