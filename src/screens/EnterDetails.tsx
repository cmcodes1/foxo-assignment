import {NavigationProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, ScrollView, Text, View} from 'react-native';
import Input from '../components/Input/Input';
import {getUserData, updateUserData} from '../helpers/helpers';
import {InputField, UserData, UserDataInputFields} from '../helpers/types';
import {styles} from '../styles/styles';

export default function EnterDetails({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [userData, setUserData] = useState<UserData>({} as UserData);

  useEffect(() => {
    getUserData(setUserData);
  }, [userData]);

  return (
    <View style={styles.root}>
      {Object.keys(userData).length === 0 ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <>
          <ScrollView>
            {Object.entries(userData).map(item => (
              <View key={item[0]} style={styles.row}>
                <Text style={styles.label}>{item[0]}</Text>
                <Input
                  inputFieldName={item[0] as UserDataInputFields}
                  inputField={item[1] as InputField}
                  onPress={text =>
                    updateUserData(
                      item[0] as UserDataInputFields,
                      text,
                      userData,
                      setUserData,
                    )
                  }
                />
              </View>
            ))}
          </ScrollView>
          <Button
            title="Next Page"
            onPress={() =>
              navigation.navigate('ShowDetails', {
                userData: userData,
              })
            }
          />
        </>
      )}
    </View>
  );
}
