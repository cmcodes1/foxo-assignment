import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {PreviewDetailsProps, UserData} from '../helpers/types';
import {styles} from '../styles/styles';

export default function PreviewDetails({
  route,
  navigation,
}: PreviewDetailsProps) {
  let userFormData: UserData = route?.params?.userData;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <Text style={[styles.header, styles.marginBottom]}>Preview Details</Text>
      <FlatList
        data={userFormData}
        renderItem={({item}) => (
          <View style={styles.row}>
            <Text style={styles.label}>{item.fieldName}: </Text>
            <Text style={styles.label}>{item.value}</Text>
          </View>
        )}
        ListFooterComponent={<Button title="Go Back" onPress={handleBack} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
